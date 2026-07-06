import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  MapPin,
  Mail,
  ArrowUpRight,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Clock,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const BRAND = {
    businessName: "PULSE Digital Marketing Solution Limited",
    location: "London, UK",
    email: "info@pulsedigitalmarketing.uk",
  };

  const services = [
    "Website Design",
    "Graphic Design",
    "UI/UX Design",
    "SEO Services",
    "Digital Marketing",
    "Video Editing",
    "Full Digital Package",
  ];

  const budgets = [
    "£50 - £150",
    "£150 - £300",
    "£300 - £500",
    "£500 - £1000",
    "£1000+",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Sending your enquiry...");

    try {
      await axios.post("https://digital-pulse-backend.vercel.app/api/contact", {
        ...formData,
        business: BRAND.businessName,
        location: BRAND.location,
      });

      toast.dismiss();
      toast.success("Your enquiry has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch {
      toast.dismiss();
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Toaster position="top-right" />

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-16 pt-40 md:px-8 lg:px-10">
        <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-180px] bottom-[-180px] h-[460px] w-[460px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
            <Sparkles size={15} />
            Contact Us
          </span>

          <h1 className="mt-7 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Let’s discuss your digital project.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Tell us what you need — website design, graphics, SEO, marketing or
            a complete digital package.
          </p>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-12 lg:px-10">
          {/* LEFT INFO */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-5">
              <div className="rounded-[34px] border border-white/10 bg-[#0B0B0F] p-7">
                <MessageSquare className="h-8 w-8 text-blue-400" />

                <h2 className="mt-6 text-3xl font-black leading-tight">
                  Start with a simple enquiry.
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  Share your service, budget and project details. We will review
                  your enquiry and guide you with the right next step.
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                <MapPin className="mb-4 h-6 w-6 text-blue-400" />
                <span className="block text-xs font-black uppercase tracking-widest text-blue-400">
                  Location
                </span>
                <p className="mt-2 text-sm font-bold text-gray-300">
                  {BRAND.location}
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                <Mail className="mb-4 h-6 w-6 text-blue-400" />
                <span className="block text-xs font-black uppercase tracking-widest text-blue-400">
                  Email
                </span>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="mt-2 block text-sm font-bold text-gray-300 hover:text-white"
                >
                  {BRAND.email}
                </a>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                <Clock className="mb-4 h-6 w-6 text-blue-400" />
                <span className="block text-xs font-black uppercase tracking-widest text-blue-400">
                  Response
                </span>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  We reply to digital project enquiries as soon as possible.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-8">
            <div className="rounded-[38px] border border-white/10 bg-[#0B0B0F] p-6 shadow-2xl shadow-black/30 md:p-8 lg:p-10">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  <MessageSquare size={15} />
                  Send Enquiry
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                  Request a digital service
                </h2>

                <p className="mt-3 text-sm text-gray-400">
                  Fill out the form below and tell us what you want to build.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <input
                  placeholder="Company / Business Name"
                  value={formData.company}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <select
                    required
                    value={formData.service}
                    className="rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-sm font-semibold text-white outline-none focus:border-blue-500"
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="">Select Service Required</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <select
                    required
                    value={formData.budget}
                    className="rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-sm font-semibold text-white outline-none focus:border-blue-500"
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  >
                    <option value="">Select Budget</option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  required
                  rows={6}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <button
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 py-4 font-black uppercase tracking-wider text-white transition hover:bg-blue-700 disabled:opacity-60"
                >
                  {loading ? (
                    "Sending Enquiry..."
                  ) : (
                    <>
                      Submit Enquiry <ArrowUpRight size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM INFO */}
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 px-5 md:grid-cols-3 md:px-8 lg:px-10">
          {[
            {
              icon: Mail,
              title: "Email Us",
              text: BRAND.email,
            },
            {
              icon: MapPin,
              title: "Location",
              text: BRAND.location,
            },
            {
              icon: CheckCircle2,
              title: "Services",
              text: "Websites, SEO, graphics and digital marketing.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6"
            >
              <Icon className="mb-4 h-6 w-6 text-blue-400" />
              <span className="block text-xs font-black uppercase tracking-widest text-blue-400">
                {title}
              </span>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}