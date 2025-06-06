import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: `The legal expertise and personal attention I received from Yoseph Desta was exceptional. They helped me navigate a complex business dispute with professionalism and dedication.`,
  },
  {
    name: "Michael Chen",
    role: "Real Estate Developer",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: `I've worked with many law firms, but none have matched the level of commitment and results that Yoseph Desta Law Office delivers. They're truly the best in the business.`,
  },
  {
    name: "Emily Rodriguez",
    role: "Family Law Client",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    content: `During a difficult divorce, Yoseph Desta provided not just legal guidance but also emotional support. Their compassionate approach made a huge difference.`,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear what our clients have to say about their experience with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group p-6 bg-gray-50 rounded-lg transition-all duration-200 hover:bg-yellow-50"
            >
              <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
