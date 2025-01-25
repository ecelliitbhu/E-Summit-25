import React from "react";
import Link from "next/link"; // Importing Link from next/link

interface BookCardProps {
  title: string;
  author: string;
  imgURL: string;
  reviews: { reviewer: string; comment: string; rating: number }[];
  index: number; // Adding index as a prop
}

const BookCard: React.FC<BookCardProps> = ({ title, author, imgURL, reviews, index }) => {
  return (
    <div className="border rounded-lg p-4 m-2 w-64 h-auto"> {/* Increased height to auto */}
      <img src={imgURL} alt={title} className="w-full h-48 object-cover rounded" />
      <Link href={`/recommendations/book?id=${index}`}> {/* Added href to the Link */}
        <h2 className="text-xl font-bold">{title}</h2> {/* Removed truncation for title */}
      </Link>
      <p className="text-gray-700">by {author}</p> {/* Removed truncation for author */}

      <div className="mt-2">
        <h3 className="font-semibold">Reviews:</h3>
        {reviews.map((review, index) => (
          <div key={index} className="border-t mt-2 pt-2">
            <p className="font-medium">{review.reviewer}</p> {/* Removed truncation for reviewer */}
            <p>{review.comment}</p> {/* Removed truncation for comment */}
            <p className="text-yellow-500">Rating: {review.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BookCard;
