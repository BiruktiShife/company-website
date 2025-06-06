import { Scale, Briefcase, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Scale,
    title: "Civil Litigation",
    description:
      "Expert representation in civil disputes, protecting your rights in court.",
    link: "/services/civil-litigation",
  },
  {
    icon: Briefcase,
    title: "Corporate Law",
    description: "Comprehensive legal solutions for businesses of all sizes.",
    link: "/services/corporate",
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate guidance through family legal matters.",
    link: "/services/family",
  },
  {
    icon: Building,
    title: "Real Estate",
    description: "Expert handling of property transactions and disputes.",
    link: "/services/real-estate",
  },
];

export function FeaturedServices() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group p-6 bg-gray-50 rounded-lg transition-all duration-200 hover:bg-yellow-50"
            >
              <service.icon className="h-10 w-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 ">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
