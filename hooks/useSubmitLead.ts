"use client";
import { useState } from "react";
import axios, { AxiosError } from "axios";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
};

export type SubmitLeadResult = {
  ok: boolean;
  message: string;
};

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// Gets a reCAPTCHA v3 token (script is loaded in app/layout.tsx).
const getRecaptchaToken = (): Promise<string> =>
  new Promise((resolve, reject) => {
    const grecaptcha = window.grecaptcha;
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!grecaptcha || !siteKey) {
      reject(new Error("reCAPTCHA not loaded"));
      return;
    }
    grecaptcha.ready(() => {
      try {
        grecaptcha
          .execute(siteKey, { action: "submit_lead" })
          .then(resolve, reject);
      } catch (err) {
        reject(err);
      }
    });
  });

// Sends a lead to the backend. Validation and UI stay in each form.
const useSubmitLead = () => {
  const [loading, setLoading] = useState(false);

  const submitLead = async (lead: LeadPayload): Promise<SubmitLeadResult> => {
    setLoading(true);
    try {
      let recaptchaToken: string;
      try {
        recaptchaToken = await getRecaptchaToken();
      } catch {
        return {
          ok: false,
          message: "Captcha failed to load. Please refresh and try again.",
        };
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/lead/create-lead`,
        { ...lead, recaptchaToken },
      );
      return { ok: true, message: "Lead Saved Successfully!" };
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      return {
        ok: false,
        message: error.response?.data?.message || "Something went wrong.",
      };
    } finally {
      setLoading(false);
    }
  };

  return { submitLead, loading };
};

export default useSubmitLead;
