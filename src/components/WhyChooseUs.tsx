import { Shield, Award, Clock, UserCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Expert Legal Team",
    description:
      "Our attorneys bring decades of combined experience across various practice areas.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Consistently recognized for excellence with numerous industry awards and accolades.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock support for your urgent legal matters and emergencies.",
  },
  {
    icon: UserCheck,
    title: "Client-Focused Approach",
    description:
      "Personalized attention and tailored solutions for your specific legal needs.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Why Choose LegalEdge
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Committed to excellence in legal services and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <feature.icon className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
