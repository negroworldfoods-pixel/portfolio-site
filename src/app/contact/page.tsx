'use client'

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Instagram } from "iconsax-reactjs";
import { infoData } from "@/constants/assets";
import { useSessionStorage } from "@/utils/useSessionStorage";
import ScrambleOnHover from "@/components/effects/scrambleOnHover";
import ScrollDown from "@/components/effects/ScrollDown";

interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const contactPageImage =
  "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useSessionStorage<string>("message", "");
  const [formInputs, setFormInputs] = useSessionStorage<FormInputs>("formInputs", {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formInputs.email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_WEB3_FORMS_API_KEY;
    if (!apiKey) {
      toast.error("Web3Forms API key is not configured.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const formData = new FormData();
      formData.append("access_key", apiKey);
      formData.append("name", `${formInputs.firstName} ${formInputs.lastName}`.trim());
      formData.append("email", formInputs.email);
      formData.append("phone", formInputs.phone);
      formData.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully");
        setMessage("");
        setFormInputs({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
      } else {
        toast.error(data.message || "Failed to send message. Please try again.", {
          id: toastId,
        });
      }
    } catch {
      toast.error("An error occurred while sending your message. Please try again.", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white text-zinc-900 min-h-screen lg:min-h-screen py-24 max-lg:py-24 px-6 lg:px-16 flex items-center justify-center">
      <ScrollDown height={18} />
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:h-full">
        
        {/* Left Column: Portrait Visual */}
        <div className="hidden lg:block lg:col-span-6 relative w-full h-full min-h-[500px] rounded-0 overflow-hidden bg-zinc-100 shadow-xl">
          <Image
            src={contactPageImage}
            alt="Studio Portrait"
            fill
            priority
            sizes="(max-width: 1024px) 0vw, 45vw"
            className="object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          
          {/* Contact Quick Links */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <a
                href={`mailto:${infoData.email}`}
                className="flex items-center gap-2.5 text-white/90 hover:text-white text-xs sm:text-sm font-medium transition-all hover:scale-105"
              >
                <Mail size={18} className="text-white/80 flex-shrink-0" />
                <span className="truncate">{infoData.email}</span>
              </a>

              <a
                href={infoData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/90 hover:text-white text-xs sm:text-sm font-medium transition-all hover:scale-105"
              >
                <Instagram size={18} className="text-white/80 flex-shrink-0" />
                <span>Instagram</span>
              </a>

              <a
                href={`tel:${infoData.phone}`}
                className="flex items-center gap-2.5 text-white/90 hover:text-white text-xs sm:text-sm font-medium transition-all hover:scale-105"
              >
                <Phone size={18} className="text-white/80 flex-shrink-0" />
                <span>{infoData.phone}</span>
              </a>

              <a
                href={infoData.WhatsappMessageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/90 hover:text-white text-xs sm:text-sm font-medium transition-all hover:scale-105"
              >
                <MessageSquare size={18} className="text-white/80 flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6 space-y-10 lg:h-full lg:flex lg:flex-col lg:justify-center">
          
          {/* Header Block */}
          <div className="space-y-3 max-lg:text-center">
            <ScrambleOnHover
              text="Contact Us"
              duration={0.6}
              className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-950 uppercase"
            />
            <p className="text-zinc-500 text-sm font-normal">
              Contact me lets talk business, I usually reply within 24–48 hours.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-xl max-lg:mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formInputs.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formInputs.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formInputs.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200"
                />
              </div>

              {/* Message Area */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-semibold text-zinc-500 tracking-wider">
                  Enter Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  required
                  className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-600 text-white font-medium text-sm py-4 rounded-xl transition-colors duration-200 shadow-md active:scale-[0.99]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactPage;