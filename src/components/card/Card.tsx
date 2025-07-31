import React from 'react';
import { CheckCircle, Star, Award, Lightbulb, Briefcase, Banknote } from 'lucide-react';

interface Iprops {
  title: string;
  description: string;
  iconName?: 'CheckCircle' | 'Star' | 'Award' | 'Lightbulb' | 'Briefcase' | 'Banknote'; // Optional icon name
}

const iconMap = {
  CheckCircle: CheckCircle,
  Star: Star,
  Award: Award,
  Lightbulb: Lightbulb,
  Briefcase: Briefcase,
  Banknote: Banknote,
};

function Card({ title, description, iconName = 'CheckCircle' }: Iprops) {
  const IconComponent = iconMap[iconName] || CheckCircle; // Default to CheckCircle if iconName is not found

  return (
    <div className="relative p-8 rounded-3xl overflow-hidden
                    bg-gradient-to-br from-white to-gray-50
                    border border-gray-100
                    shadow-lg
                    hover:shadow-xl hover:scale-[1.02] hover:border-green-300
                    transition-all duration-300 ease-in-out
                    flex flex-col items-start space-y-4
                    group cursor-pointer transform
                    h-[280px]"> {/* Changed from min-h to fixed h for consistent size */}

      {/* Icon Container */}
      <div className="p-3 rounded-full bg-green-100 text-green-600
                      group-hover:bg-green-600 group-hover:text-white
                      transition-colors duration-300 ease-in-out
                      shadow-md">
        <IconComponent size={28} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-extrabold text-gray-800
                     group-hover:text-green-700
                     transition-colors duration-300 ease-in-out
                     leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>

      {/* Subtle overlay/decoration on hover */}
      <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-20
                      transition-opacity duration-300 ease-in-out pointer-events-none"></div>
    </div>
  );
}

export default Card