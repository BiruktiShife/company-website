import { Scale, Users, Star, Award } from "lucide-react";

const stats = [
  {
    icon: Scale,
    value: "25+",
    label: "Years of Experience",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Satisfied Clients",
  },
  {
    icon: Star,
    value: "98%",
    label: "Success Rate",
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards",
  },
];

export function Stats() {
  return (
    <section className="py-12 bg-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-yellow-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
