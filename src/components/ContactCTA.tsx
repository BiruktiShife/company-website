import { Button } from "./Button";
import { Phone, Mail } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-16 bg-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Ready to Discuss Your Case?
          </h2>
          <p className="mt-4 text-xl text-black">
            Schedule a consultation with our experienced legal team today
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="inline-flex items-center justify-center text-white border-white hover:bg-white hover:text-yellow-600"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send a Message
            </Button>
          </div>
          <p className="mt-6 text-yellow-100">
            Available 24/7 for urgent legal matters
          </p>
        </div>
      </div>
    </section>
  );
}
