import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Contact as ContactIcon,
} from "lucide-react";
import { Button } from "../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageHero } from "../components/PageHero";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Server response:", result);

      if (!response.ok) {
        throw new Error(
          result.details || result.error || "Failed to send message"
        );
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (error: any) {
      console.error("Contact form error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.message || "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Contact Us"
        description="Get in touch with our legal experts. We're here to help you with your legal needs and answer any questions you may have."
        icon={Mail}
        backgroundImage="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Cards Container */}
        <div className="transform -translate-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            {/* Contact Information Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg shrink-0">
                    <Phone className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Phone
                    </h3>
                    <p className="text-gray-600 mt-1">(+251) 911-123-456</p>
                    <p className="text-gray-600">(+251) 911-987-654</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg shrink-0">
                    <Mail className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Email
                    </h3>
                    <p className="text-gray-600 mt-1">
                      contact@yosephdesta.com
                    </p>
                    <p className="text-gray-600">info@yosephdesta.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg shrink-0">
                    <MapPin className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Office Location
                    </h3>
                    <p className="text-gray-600 mt-1">
                      123 Legal Street, Suite 100
                    </p>
                    <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg shrink-0">
                    <Clock className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Request a Consultation
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("firstName")}
                      className={`mt-1 block w-full rounded-lg border p-2 ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } shadow-sm focus:border-primary focus:ring-primary`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("lastName")}
                      className={`mt-1 block w-full rounded-lg border p-2 ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } shadow-sm focus:border-primary focus:ring-primary`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className={`mt-1 block w-full rounded-lg border p-2 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:border-primary focus:ring-primary`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className={`mt-1 block w-full rounded-lg border p-2 ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:border-primary focus:ring-primary`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("service")}
                    className={`mt-1 block w-full rounded-lg border p-2 ${
                      errors.service ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:border-primary focus:ring-primary`}
                  >
                    <option value="">Select a service</option>
                    <option value="real-estate">Real Estate Litigation</option>
                    <option value="intellectual-property">
                      Intellectual Property
                    </option>
                    <option value="entertainment">Entertainment Law</option>
                    <option value="employment">Employment Litigation</option>
                    <option value="family">Family Law</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={`mt-1 block w-full rounded-lg border p-2 {
                      errors.message ? "border-red-500" : "border-gray-300"
                    } shadow-sm focus:border-primary focus:ring-primary`}
                    placeholder="Please describe your case briefly..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 mb-20">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5455050554295!2d38.7611!3d9.0222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMTkuOSJOIDM4wrA0NSc0MC4wIkU!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
