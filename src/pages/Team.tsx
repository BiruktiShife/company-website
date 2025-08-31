import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Users, Briefcase, ChevronRight } from "lucide-react";
import { PageHero } from "../components/PageHero";

const teamMembers = [
  {
    name: "Yoseph Desta",
    role: "Founding Partner",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "With over 25 years of experience in commercial litigation and corporate law, Yoseph leads our firm with expertise and dedication.",
    expertise: [
      "Commercial Litigation",
      "Corporate Law",
      "International Arbitration",
    ],
  },
  {
    name: "Sarah Haile",
    role: "Senior Partner",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Sarah specializes in intellectual property law and has successfully handled numerous high-profile cases in the entertainment industry.",
    expertise: [
      "Intellectual Property",
      "Entertainment Law",
      "Contract Negotiation",
    ],
  },
  {
    name: "Michael Tekle",
    role: "Partner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Michael brings extensive experience in real estate law and construction litigation, helping clients navigate complex property disputes.",
    expertise: [
      "Real Estate Law",
      "Construction Litigation",
      "Property Rights",
    ],
  },
];

export function Team() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Our Legal Team"
        description="Meet our experienced attorneys who are dedicated to providing exceptional legal services and protecting your interests."
        icon={Users}
        backgroundImage="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Team Members Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transform -translate-y-12 sm:-translate-y-16">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 pt-16 sm:pt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Meet Our Attorneys
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-yellow-400 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base">
                    {member.bio}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-medium border border-yellow-100"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="mt-16 sm:mt-24 mb-16 relative overflow-hidden rounded-xl shadow-xl">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Join our team background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 px-6 sm:px-8 py-12 sm:py-16 text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="p-4 bg-yellow-500/10 rounded-full">
                <Briefcase className="h-12 w-12 text-yellow-500" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              We're always looking for talented legal professionals to join our
              growing team. If you're passionate about law and justice, we'd
              love to hear from you.
            </p>
            <Button
              onClick={() => navigate("/careers")}
              className="group inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Open Positions
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
