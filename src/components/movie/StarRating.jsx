import { Star, StarHalf } from 'lucide-react';

export const StarRating = ({ rating }) => {
  const starValue = rating / 2;
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        if (i + 1 <= starValue)
          return <Star key={i} color="#ffc107" size={12} />;
        if (i + 0.5 <= starValue)
          return <StarHalf key={i} size={12} color="#ffc107" />;
        return <Star key={i} color="#ffc107" size={12} />;
      })}
    </div>
  );
};
