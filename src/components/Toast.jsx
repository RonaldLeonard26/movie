export const Toast = ({ message, type }) => {
  const styles = {
    success: 'bg-green-500',
    error: 'bg-rose-500',
    info: 'bg-sky-500',
  };
  return (
    <div
      className={`text-white px-4 py-3 rounded-lg shadow-sm ${styles[type]}`}
    >
      {message}
    </div>
  );
};
