import React from "react";
import { Scale } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { FeaturedServices } from "../components/FeaturedServices";
import { ContactCTA } from "../components/ContactCTA";

export function Services() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Our Services"
        description="Comprehensive legal solutions tailored to your needs, delivered with expertise and dedication."
        icon={Scale}
        backgroundImage="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Our Legal Services
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive legal solutions tailored to your needs. Our
            experienced team provides expert guidance across various practice
            areas.
          </p>
        </div>
        <FeaturedServices />
        <ContactCTA />
      </div>
    </div>
  );
}
