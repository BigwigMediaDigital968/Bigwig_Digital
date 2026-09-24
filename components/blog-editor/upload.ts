import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_BASE;

export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;

export interface UploadedImage {
  url: string;
  width?: number;
  height?: number;
}

export interface LibraryImage {
  _id: string;
  url: string;
  originalName?: string;
  width?: number;
  height?: number;
  createdAt: string;
}

const errorMessage = (err: unknown, fallback: string) =>
  axios.isAxiosError(err) ? err.response?.data?.message || fallback : fallback;

export function validateImageFile(file: File): string | null {
  if (!file.type.startsWith("image/")) return `${file.name} is not an image`;
  if (file.size > MAX_IMAGE_BYTES) return `${file.name} is larger than 10MB`;
  return null;
}

/** Uploads a file to Cloudinary through the backend. */
export async function uploadImageFile(
  file: File,
  onProgress?: (percent: number) => void,
): Promise<UploadedImage> {
  const invalid = validateImageFile(file);
  if (invalid) throw new Error(invalid);

  const body = new FormData();
  body.append("image", file);
  try {
    const res = await axios.post(`${API}/api/upload/editor-image`, body, {
      onUploadProgress: (e) => {
        if (onProgress && e.total) onProgress(Math.round((e.loaded / e.total) * 100));
      },
    });
    return res.data;
  } catch (err) {
    throw new Error(errorMessage(err, "Image upload failed"));
  }
}

/** Asks the backend to copy a remote image into Cloudinary. */
export async function uploadImageFromUrl(url: string): Promise<UploadedImage> {
  try {
    const res = await axios.post(`${API}/api/upload/editor-image-url`, { url });
    return res.data;
  } catch (err) {
    throw new Error(errorMessage(err, "Could not copy image from URL"));
  }
}

export async function fetchImageLibrary(page = 1, limit = 40) {
  const res = await axios.get(`${API}/api/upload/editor-images`, {
    params: { page, limit },
  });
  return res.data as { images: LibraryImage[]; total: number };
}

/** data:image/png;base64,... → File */
export function dataUrlToFile(dataUrl: string, name = "pasted-image"): File {
  const [meta, data] = dataUrl.split(",");
  const mime = meta.match(/data:([^;]+)/)?.[1] || "image/png";
  const binary = atob(data);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new File([bytes], `${name}.${mime.split("/")[1] || "png"}`, { type: mime });
}
