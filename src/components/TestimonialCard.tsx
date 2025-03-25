
import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  text,
  date,
  avatar,
  className = "",
}) => {
  return (
    <div className={`glass p-6 rounded-xl transition-all duration-300 hover:shadow-lg ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <blockquote className="text-gray-700 mb-4">"{text}"</blockquote>

      <div className="flex items-center mt-4">
        <div className="flex-shrink-0 mr-3">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-ti-blue-600 flex items-center justify-center text-white font-medium">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <div className="font-medium text-gray-900">{name}</div>
          <div className="text-sm flex items-center">
            <span className="text-gray-500">{location}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-400">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
