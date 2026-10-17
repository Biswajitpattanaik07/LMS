import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

const ReviewCard = ({ text, name, image, rating, role }) => {
  const [imgError, setImgError] = useState(false);
  const showImage = image && !imgError;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 max-w-sm w-full">
      {/* ⭐ Rating Stars */}
      <div className="flex items-center mb-3 text-yellow-400 text-sm">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i}>
              {i < rating ? <FaStar/> : <FaRegStar/>}
            </span>
          ))}
      </div>

      {/* 💬 Review Text */}
      <p className="text-gray-700 text-sm mb-5">{text}</p>

      {/* 👤 Reviewer Info */}
      <div className="flex items-center gap-3">
        {showImage ? (
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
            {name?.charAt(0)?.toUpperCase() || "?"}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
