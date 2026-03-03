export const RatingSkeleton = () => {
  return (
    <div className="animate-pulse gap-2 rounded-lg flex shadow-sm p-2">
      <div className="w-24 h-36 bg-gray-200 rounded-lg shrink-0" />

      <div className="flex flex-col justify-start pt-2 gap-3 flex-1">
        <div className="w-3/4  h-4 bg-gray-200 rounded" />
        <div className="w-1/2  h-3 bg-gray-200 rounded" />
        <div className="w-1/3  h-3 bg-gray-200 rounded" />
      </div>
    </div>
  );
};
