export const formatRating = (rating) => {
  return rating?.toFixed(1);
};

export const getYear = (date) => {
  return new Date(date).getFullYear();
};
