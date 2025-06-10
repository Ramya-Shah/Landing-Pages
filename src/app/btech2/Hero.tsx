// Hero.tsx
"use client";

import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useRef,
} from "react";
import { Clock, Award, Users, ExternalLink, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { useContactFormContext } from "@/contexts/ContactFormContext";

// Country‐specific states
const countryStates = {
  "INR(+91)": [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ],
  "USA(+1)": [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "District of Columbia",
    "Puerto Rico",
    "Guam",
    "American Samoa",
    "U.S. Virgin Islands",
    "Northern Mariana Islands",
  ],
  "UK(+44)": [
    "England",
    "Scotland",
    "Wales",
    "Northern Ireland",
    "Bedfordshire",
    "Berkshire",
    "Bristol",
    "Buckinghamshire",
    "Cambridgeshire",
    "Cheshire",
    "Cornwall",
    "Cumbria",
    "Derbyshire",
    "Devon",
    "Dorset",
    "Durham",
    "East Sussex",
    "Essex",
    "Gloucestershire",
    "Greater London",
    "Greater Manchester",
    "Hampshire",
    "Hertfordshire",
    "Kent",
    "Lancashire",
    "Leicestershire",
    "Lincolnshire",
    "Merseyside",
    "Norfolk",
    "North Yorkshire",
    "Northamptonshire",
    "Nottinghamshire",
    "Oxfordshire",
    "Shropshire",
    "Somerset",
    "South Yorkshire",
    "Staffordshire",
    "Suffolk",
    "Surrey",
    "Tyne and Wear",
    "Warwickshire",
    "West Midlands",
    "West Sussex",
    "West Yorkshire",
    "Wiltshire",
    "Worcestershire",
  ],
  "UAE(+971)": ["Abu Dhabi", "Ajman", "Dubai", "Fujairah", "Ras Al Khaimah", "Sharjah", "Umm Al Quwain"],
  "CAN(+1)": [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ],
  "AUS(+61)": [
    "Australian Capital Territory",
    "New South Wales",
    "Northern Territory",
    "Queensland",
    "South Australia",
    "Tasmania",
    "Victoria",
    "Western Australia",
  ],
  OTHER: [], // Manual
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  manualCountryCode: string;
  state: string;
  manualState: string;
  authorized: boolean;
  recaptcha: string | null;
}

interface ValidationErrors {
  name: string;
  email: string;
  phone: string;
  state: string;
}

const redirectUrl = "https://applyadmission.net/DA-IICT2025/";

const Hero = () => {
  // ─── Countdown Timer State ───
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-06-20T23:59:59");
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff > 0) {
        return {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timerLabels: Record<string, { short: string; long: string }> = {
    days: { short: "days", long: "days" },
    hours: { short: "hrs", long: "hours" },
    minutes: { short: "mins", long: "minutes" },
    seconds: { short: "secs", long: "seconds" },
  };

  // ─── Contact‐Form State & Logic ───
  const { isPopupOpen, setIsPopupOpen } = useContactFormContext();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    countryCode: "INR(+91)",
    manualCountryCode: "",
    state: "",
    manualState: "",
    authorized: false,
    recaptcha: null,
  });

  const [errors, setErrors] = useState<ValidationErrors>({
    name: "",
    email: "",
    phone: "",
    state: "",
  });

  const [submitMessage, setSubmitMessage] = useState<{ text: string; isError: boolean }>({
    text: "",
    isError: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Detect B.Tech page for country/state logic
  const [isBTechPage, setIsBTechPage] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setIsBTechPage(path.includes("/btech") || path === "/");
    }
  }, []);

  // Field‐level validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 3) return "Name must be at least 3 characters";
        if (!/^[a-zA-Z\s]+$/.test(value.trim())) return "Only letters allowed";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Enter a valid email";
        return "";
      case "phone":
        if (!value.trim()) return "Phone is required";
        if (!/^\d{10}$/.test(value.replace(/\s/g, ""))) return "Enter a valid 10-digit phone";
        return "";
      case "state":
        if (!value) return "State is required";
        return "";
      default:
        return "";
    }
  };

  const getAvailableStates = () => {
    if (!isBTechPage) {
      return countryStates["INR(+91)"];
    }
    return countryStates[formData.countryCode as keyof typeof countryStates] || [];
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (name === "countryCode") {
      const states = countryStates[value as keyof typeof countryStates] || [];
      if (!states.includes(formData.state)) {
        setFormData((prev) => ({ ...prev, countryCode: value, state: "" }));
      } else {
        setFormData((prev) => ({ ...prev, countryCode: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleRecaptchaChange = (value: string | null) => {
    setFormData((prev) => ({ ...prev, recaptcha: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      state: validateField("state", formData.state),
    };

    if (!formData.authorized) {
      setSubmitMessage({ text: "Please authorize DAU to contact you.", isError: true });
      return false;
    }
    if (!formData.recaptcha) {
      setSubmitMessage({ text: "Please verify you’re not a robot.", isError: true });
      return false;
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((err) => err);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage({ text: "", isError: false });
    setShowConfirmation(false);

    const submissionData = {
      ...formData,
      countryCode:
        formData.countryCode === "OTHER" ? formData.manualCountryCode : formData.countryCode,
      state: formData.countryCode === "OTHER" ? formData.manualState : formData.state,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || res.statusText);

      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "INR(+91)",
        manualCountryCode: "",
        state: "",
        manualState: "",
        authorized: false,
        recaptcha: null,
      });
      setSubmitMessage({ text: "Form submitted successfully!", isError: false });
      setShowConfirmation(true);

      setTimeout(() => {
        setShowConfirmation(false);
        window.location.href = redirectUrl;
      }, 2000);
    } catch (err) {
      setSubmitMessage({
        text: `Submission failed: ${err instanceof Error ? err.message : "Unknown error"}`,
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
      recaptchaRef.current?.reset();
    }
  };

  const renderError = (field: keyof ValidationErrors) =>
    errors[field] ? <p className="text-red-500 text-sm mt-1">{errors[field]}</p> : null;

  return (
    <div
      id="hero-section"
      className="relative bg-white text-gray-900 overflow-hidden font-montserrat"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-10 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-4xl font-bold text-gray-900">
              Worried About{" "}
              <span className="text-orange-500">Job Placements?</span>
            </h1>
            <h2 className="text-3xl lg:text-2xl text-gray-600">
              Here's How We Help You Get Hired at Top Companies
            </h2>
          </div>
        </div>

        {/* Two‐column layout: LEFT = placements + counter, RIGHT = inlined form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── LEFT COLUMN ── */}
          <div className="space-y-6">
            {/* Blue placement cards */}
            <div className="space-y-6">
              <Card className="bg-[#273586] text-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl max-w-[575px] mx-auto">
                <div className="flex items-center space-x-3">
                  <Award className="w-10 h-10" />
                  <div>
                    <motion.p
                      className="text-3xl font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      ₹82 LPA
                    </motion.p>
                    <motion.p
                      className="text-blue-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Highest Placement
                    </motion.p>
                  </div>
                </div>
              </Card>

              <Card className="bg-[#273586] text-white p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl max-w-[575px] mx-auto">
                <div className="flex items-center space-x-3">
                  <Users className="w-10 h-10" />
                  <div>
                    <motion.p
                      className="text-3xl font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      ₹18.25 LPA
                    </motion.p>
                    <motion.p
                      className="text-blue-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      Average Placement
                    </motion.p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Countdown timer */}
            <div className="px-4 mt-6">
              <Card className="bg-orange-500 text-white p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="flex flex-col items-center justify-center gap-1 mb-2">
                    <span className="flex items-center gap-2">
                      <Clock className="w-8 h-8 text-white" />
                      <span className="text-lg md:text-xl font-semibold">
                        Applications Closing on
                      </span>
                    </span>
                    <span className="text-3xl sm:text-5xl font-extrabold mt-2">
                      20th June 2025
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center">
                  {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                    <div
                      key={unit}
                      className="bg-orange-600 rounded-xl p-4 min-w-[48px] sm:min-w-[80px] flex flex-col items-center"
                    >
                      <div className="text-3xl font-bold">{timeLeft[unit]}</div>
                      <div className="text-sm capitalize break-words">
                        <span className="block sm:hidden">
                          {timerLabels[unit].short}
                        </span>
                        <span className="hidden sm:block">
                          {timerLabels[unit].long}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── (inlined form only) ── */}
          <div className="relative">
            {/* Confirmation overlay */}
            {showConfirmation && (
              <div className="absolute inset-0 bg-white bg-opacity-95 z-10 flex flex-col items-center justify-center rounded-lg shadow-md animate-fade-in-down">
                <div className="text-green-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">Thank You!</h3>
                <p className="text-gray-700 text-center mb-6 px-8">
                  Your form has been submitted successfully. We will get back to you soon.
                </p>
                <Button
                  onClick={() => setShowConfirmation(false)}
                  className="bg-red-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md"
                >
                  Close
                </Button>
              </div>
            )}

            {/* Submission message */}
            {submitMessage.text && !showConfirmation && (
              <div
                className={`mb-4 p-3 rounded ${
                  submitMessage.isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                }`}
              >
                {submitMessage.text}
              </div>
            )}

            {/* ── Inlined Application Form ── */}
            <form
              className="space-y-4 bg-gray-50 p-8 rounded-lg shadow-md text-black min-h-[535px]"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Ramesh Sharma"
                  className={`w-full p-3 border rounded-md ${errors.name ? "border-red-500" : ""}`}
                  required
                />
                {renderError("name")}
              </div>

              {/* Email */}
              <div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="rameshsharma@gmail.com"
                  className={`w-full p-3 border rounded-md ${errors.email ? "border-red-500" : ""}`}
                  required
                />
                {renderError("email")}
              </div>

              {/* Phone + country code */}
              <div>
                <div
                  className={`flex items-center border rounded-md overflow-hidden ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                >
                  <select
                    className="appearance-none bg-white p-3 text-gray-400 outline-none"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    disabled={!isBTechPage}
                  >
                    <option value="INR(+91)">India (+91)</option>
                    {isBTechPage && (
                      <>
                        <option value="USA(+1)">USA (+1)</option>
                        <option value="UK(+44)">UK (+44)</option>
                        <option value="UAE(+971)">UAE (+971)</option>
                        <option value="CAN(+1)">Canada (+1)</option>
                        <option value="AUS(+61)">Australia (+61)</option>
                        <option value="OTHER">Other (Manual)</option>
                      </>
                    )}
                  </select>
                  <span className="px-2 text-gray-500">|</span>

                  {formData.countryCode === "OTHER" ? (
                    <div className="flex items-center w-full">
                      <Input
                        type="text"
                        name="manualCountryCode"
                        value={formData.manualCountryCode}
                        onChange={handleInputChange}
                        placeholder="e.g. +65"
                        className="w-24 p-3 outline-none"
                        required
                      />
                      <span className="px-2 text-gray-500">|</span>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number"
                        className="w-full p-3 outline-none"
                        required
                      />
                    </div>
                  ) : (
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="12345 67890"
                      className="w-full p-3 outline-none"
                      required
                    />
                  )}
                </div>
                {renderError("phone")}
              </div>

              {/* State / Territory */}
              <div>
                {formData.countryCode === "OTHER" ? (
                  <Input
                    type="text"
                    name="manualState"
                    value={formData.manualState}
                    onChange={handleInputChange}
                    placeholder="Enter your state/region"
                    className={`w-full p-3 border rounded-md ${errors.state ? "border-red-500" : ""}`}
                    required
                  />
                ) : (
                  <select
                    className={`w-full p-3 border rounded-md text-gray-400 bg-white ${
                      errors.state ? "border-red-500" : ""
                    }`}
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">State/Territory</option>
                    {getAvailableStates().map((st, idx) => (
                      <option key={idx} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                )}
                {renderError("state")}
              </div>

              {/* Authorization Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="authorize"
                  name="authorized"
                  checked={formData.authorized}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-red-500 focus:ring-amber-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="authorize" className="ml-2 block text-sm text-gray-700">
                  I authorize DAU, Gandhinagar to contact me regarding admission information.
                </label>
              </div>

              {/* ReCAPTCHA */}
              <div className="flex justify-center my-4">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={handleRecaptchaChange}
                />
              </div>


              <div className="pt-4 flex gap-4">
                {/* Apply Now */}
                <Button
                type="submit"
                disabled={isSubmitting || !formData.authorized}
                className={`
                  flex-1
                  text-white
                  p-3
                  rounded-md
                  flex
                  items-center
                  justify-center
                  gap-2
                  h-14
                  transition

                  !bg-red-500
                  disabled:!bg-red-500
                  disabled:opacity-100
                  disabled:cursor-not-allowed

                  ${!isSubmitting && formData.authorized ? "hover:bg-amber-600 cursor-pointer" : ""}
                `}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <span className="flex items-center gap-2">
                    Apply Now
                    <ExternalLink className="w-5 h-5" />
                  </span>
                )}
              </Button>


                {/* Brochure (disabled until form is valid) */}
                <a
                  href="/BTech_DAU.pdf"
                  download
                  aria-disabled={isSubmitting || !formData.authorized}
                  className={`
                    flex-1
                    text-white
                    p-3
                    rounded-md
                    flex
                    items-center
                    justify-center
                    gap-2
                    h-14
                    transition
                    bg-green-600
                    ${isSubmitting || !formData.authorized
                      ? "pointer-events-none cursor-not-allowed"
                      : "hover:bg-green-700 cursor-pointer"
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    Brochure
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                      />
                    </svg>
                  </span>
                </a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
