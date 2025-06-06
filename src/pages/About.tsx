import React from "react";
// import { Stats } from '../components/Stats';
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonials } from "../components/Testimonials";
import { Building2, Scale, Building } from "lucide-react";
import { PageHero } from "../components/PageHero";

export function About() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="About Our Firm"
        description="A legacy of excellence in Ethiopian legal services, built on trust, expertise, and unwavering commitment to our clients."
        icon={Building}
        backgroundImage="https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Law office building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-2">
                  <Scale className="h-6 w-6 text-yellow-500" />
                  <span className="text-lg font-semibold text-white">
                    Excellence in Legal Services
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="space-y-6 animate-slideUp"
            style={{ animationDelay: "150ms" }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <div className="w-20 h-1 bg-yellow-500"></div>
            <p className="text-lg text-gray-600">
              At Yoseph Desta Law Office, we are committed to providing
              comprehensive legal solutions with the highest standards of
              professional integrity. Our mission is to deliver exceptional
              legal services while maintaining unwavering dedication to our
              clients' interests.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  25+
                </h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  1000+
                </h3>
                <p className="text-gray-600">Successful Cases</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <div className="bg-primary/5 py-16">
        <Testimonials />
      </div>
    </div>
  );
}
