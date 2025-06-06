import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tagline: "Before The Challenge Begins",
    emphasis: "Before",
  },
  {
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tagline: "Mastering The Balance For Our Clients",
    emphasis: "Balance",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tagline: "For Companies Facing Complex Challenges",
    emphasis: "Complex",
  },
  {
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tagline: "We Immerse Ourselves In Your Business",
    emphasis: "Immerse",
  },
];

export function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Slider */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img
          className="w-full h-full object-cover"
          src={slides[currentSlide].image}
          alt="Law firm background"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-3xl">
          {/* Animated Tagline */}
          <div
            className={`transition-opacity duration-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-5xl font-light text-white mb-8 leading-tight">
              {slides[currentSlide].tagline
                .split(slides[currentSlide].emphasis)
                .map((part, index, array) => (
                  <span key={index}>
                    {part}
                    {index < array.length - 1 && (
                      <em className="font-semibold text-accent-hover">
                        {slides[currentSlide].emphasis}
                      </em>
                    )}
                  </span>
                ))}
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-xl text-gray-200 mb-12">
            Dedicated to providing exceptional legal services with integrity and
            professionalism. Your trusted partner in Ethiopian law.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-accent hover:bg-accent-hover text-white transition-colors bg-yellow-600 w-full sm:w-auto text-center justify-center"
            >
              Request Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-accent transition-colors w-full sm:w-auto text-center justify-center"
              onClick={() => navigate("/about")}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-accent-hover w-4" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="animate-bounce text-accent-hover text-center">
          <span className="block text-sm mb-2">Scroll</span>
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
