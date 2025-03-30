import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

const ContactForm = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly!",
        duration: 5000,
      });
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            id="name"
            {...register("name", { required: true })}
            type="text"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-ti-blue-500 focus:border-transparent transition-colors"
            placeholder="John Doe"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            {...register("email", { 
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
            })}
            type="email"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-ti-blue-500 focus:border-transparent transition-colors"
            placeholder="john@example.com"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.type === "required" ? "This field is required" : "Invalid email address"}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            {...register("phone", { required: true })}
            type="tel"
            className={cn(
              "w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-ti-blue-500 focus:border-transparent transition-colors",
              errors.phone && "border-red-500 focus:ring-red-500"
            )}
            placeholder="+27 83 462 8367"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Select Service
          </label>
          <select
            id="service"
            {...register("service", { required: true })}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-ti-blue-500 focus:border-transparent transition-colors"
          >
            <option value="">Select a service</option>
            <option value="dstv-installation">DStv Installation</option>
            <option value="signal-troubleshooting">Signal Troubleshooting</option>
            <option value="tv-mounting">TV Mounting</option>
            <option value="extra-view">Extra View Setup</option>
            <option value="dish-installation">Dish Installation</option>
            <option value="commercial">Commercial Installation</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <span className="text-red-500 text-sm">Please select a service</span>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          {...register("message", { required: true })}
          rows={5}
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-ti-blue-500 focus:border-transparent transition-colors"
          placeholder="Tell us about your needs..."
        ></textarea>
        {errors.message && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-ti-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-ti-blue-700"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
