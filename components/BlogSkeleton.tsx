const BlogSkeleton = () => {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-[180px] bg-white/20"></div>

      {/* Content Skeleton */}
      <div className="p-5 space-y-3">
        <div className="h-4 bg-white/20 w-3/4 rounded"></div>
        <div className="h-4 bg-white/20 w-full rounded"></div>
        <div className="h-4 bg-white/20 w-5/6 rounded"></div>

        <div className="h-3 bg-white/20 w-2/4 rounded mt-4"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
