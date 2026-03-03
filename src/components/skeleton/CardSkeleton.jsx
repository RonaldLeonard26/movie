export const CardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-lg shadow-sm p-2">
      <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg" />
      <div className="mt-3 h-3 bg-gray-200 rounded w-3/4" />
      <div className="mt-2 h-2 bg-gray-200 rounded w-1/2" />
    </div>
  );
};
