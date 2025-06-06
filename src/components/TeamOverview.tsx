import { Link } from "react-router-dom";
import {
  Scale,
  Briefcase,
  Users,
  Building,
  FileText,
  Shield,
  Gavel,
  BookOpen,
} from "lucide-react";

const teamMembers = [
  {
    name: "Yoseph Desta",
    role: "Managing Partner",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    href: "/team/yoseph-desta",
  },
  {
    name: "Sarah Haile",
    role: "Senior Partner",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    href: "/team/sarah-haile",
  },
  {
    name: "Michael Tekle",
    role: "Partner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    href: "/team/michael-tekle",
  },
  {
    name: "Rebecca Alemayehu",
    role: "Senior Associate",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    href: "/team/rebecca-alemayehu",
  },
  {
    name: "Daniel Mekonnen",
    role: "Associate",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    href: "/team/daniel-mekonnen",
  },
];

const stats = [
  {
    value: "500+",
    label: "Clients Served",
  },
  {
    value: "30+",
    label: "Years of Combined Experience",
  },
  {
    value: "95%",
    label: "Success Rate",
  },
  {
    value: "₭100M+",
    label: "Recovered for Clients",
  },
];

const practiceAreas = [
  {
    icon: Scale,
    title: "Commercial Litigation",
    description:
      "Expert representation in complex business disputes and commercial conflicts.",
    href: "/services/commercial-litigation",
  },
  {
    icon: Briefcase,
    title: "Corporate Law",
    description: "Comprehensive legal solutions for businesses of all sizes.",
    href: "/services/corporate",
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Compassionate guidance through divorce, custody, and other family matters.",
    href: "/services/family",
  },
  {
    icon: Building,
    title: "Real Estate",
    description:
      "Legal expertise for property transactions, disputes, and development.",
    href: "/services/real-estate",
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    description:
      "Protection for your innovations, creative works, and brand identity.",
    href: "/services/intellectual-property",
  },
  {
    icon: Gavel,
    title: "Criminal Defense",
    description:
      "Vigorous defense against criminal charges and investigations.",
    href: "/services/criminal-defense",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "Secure your legacy and protect your assets for future generations.",
    href: "/services/estate-planning",
  },
  {
    icon: BookOpen,
    title: "Immigration Law",
    description: "Navigate complex immigration processes with expert guidance.",
    href: "/services/immigration",
  },
];

export function TeamOverview() {
  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Card with Background Image */}
        <div className="relative mb-8 sm:mb-12 p-6 sm:p-10 rounded-xl shadow-lg text-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Legal expertise background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-wide">
              Expertise In Action
            </h2>
            <p className="text-lg sm:text-xl text-white mt-2 opacity-90">
              Meet The Law Office Attorneys
            </p>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-yellow-500 mt-1"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-start mb-8 sm:mb-16">
          {/* Description Card */}
          <div>
            <div className="p-6 sm:p-8 border-2 border-yellow-500 rounded-lg bg-white shadow-sm hover:border-primary/40 transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">
                Dedicated Legal Excellence
              </h3>
              <p className="text-base sm:text-lg text-gray-600">
                At Yoseph Desta Law Office, our team of highly skilled and
                experienced attorneys is committed to providing top-tier legal
                services across various practice areas. We leverage cutting-edge
                technology to streamline legal processes, ensuring efficient,
                accurate, and cost-effective solutions for our clients.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 border-2 border-yellow-500 rounded-lg bg-white shadow-sm hover:border-primary/40 transition-colors"
              >
                <div className="text-2xl sm:text-4xl font-bold text-yellow-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
          {teamMembers.map((member) => (
            <Link
              key={member.name}
              to={member.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 border-2 border-yellow-100 hover:border-yellow-500 transition-colors"
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {member.role}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/team"
            className="inline-flex items-center text-yellow-500 hover:text-accent-hover font-semibold text-sm sm:text-base"
          >
            View All Team Members
            <svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Our Practice Areas Section with Background Image */}
        <div className="mt-16 sm:mt-24 relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Legal practice areas background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Practice Areas
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-yellow-500 mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-200">
              Comprehensive legal expertise to address your most complex
              challenges
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {practiceAreas.map((area) => (
            <Link
              key={area.title}
              to={area.href}
              className="group p-4 sm:p-6 border-2 border-primary/20 rounded-lg bg-white shadow-sm hover:border-yellow-500 hover:bg-gray-50 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4 group-hover:bg-accent/10 group-hover:text-yellow-500 transition-colors">
                <area.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-500 transition-colors">
                {area.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {area.description}
              </p>
              <div className="mt-3 sm:mt-4 flex items-center text-primary group-hover:text-yellow-500 transition-colors">
                <span className="text-xs sm:text-sm font-medium">
                  Learn more
                </span>
                <svg
                  className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
