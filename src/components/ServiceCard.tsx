
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
  link: string;
  imageUrl?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  link,
  imageUrl,
  className = "",
}) => {
  return (
    <div className={`group bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl overflow-hidden ${className}`}>
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-ti-blue-100 rounded-lg flex items-center justify-center text-ti-blue-600 mr-4 flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>
        </div>

        {features.length > 0 && (
          <div className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-5 w-5 text-ti-blue-500 mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6">
          <Link
            to={link}
            className="inline-flex items-center text-ti-blue-600 font-medium text-sm hover:text-ti-blue-800 transition-colors group"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
