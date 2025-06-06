import React from "react";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  backgroundImage?: string;
}

export function PageHero({
  title,
  description,
  icon: Icon,
  backgroundImage = "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
}: PageHeroProps) {
  return (
    <div className="relative bg-primary py-16 sm:py-24">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 mix-blend-multiply"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {Icon && (
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-yellow-500/10 rounded-full">
                <Icon className="h-12 w-12 text-yellow-500" />
              </div>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
