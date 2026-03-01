export const Genre = ({ genre }) => {
  return (
    <div className="px-4 py-2 rounded-lg shadow-sm flex items-center justify-center ">
      <p className="text-sm font-medium text-center">{genre.name}</p>
    </div>
  );
};
