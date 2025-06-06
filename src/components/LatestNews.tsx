import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const news = [
  {
    title: "Understanding Ethiopian Business Law: A Comprehensive Guide",
    date: "March 15, 2024",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Navigate the complexities of Ethiopian business law with our expert insights and practical guidance.",
  },
  {
    title: "Recent Changes in Family Law: What You Need to Know",
    date: "March 10, 2024",
    image:
      "https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Stay informed about the latest developments in family law and how they might affect your case.",
  },
  {
    title: "Property Rights in Ethiopia: Legal Framework and Protection",
    date: "March 5, 2024",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Learn about property rights protection and legal considerations for real estate transactions.",
  },
];

export function LatestNews() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Latest News & Blogs
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest legal news, analysis, and expert
            insights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {news.map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center mb-3">
                  <time className="text-sm text-gray-500 font-medium">
                    {article.date}
                  </time>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-yellow-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base">
                  {article.excerpt}
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-sm sm:text-base group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 text-yellow-600 hover:text-yellow-700 font-bold text-sm sm:text-base group"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
