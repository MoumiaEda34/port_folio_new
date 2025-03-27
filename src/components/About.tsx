"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Email, LocationOn, Phone, Cake, LinkedIn } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import ApiIcon from "@mui/icons-material/Api";

const about = {
  name: "Moumita Ahamed",
  dob: "January 15, 1995",
  location: "Kolkata, India",
  email: "moumita@example.com",
  phone: "+91 9876543210",
  linkedin: "https://linkedin.com/in/moumita",
  description:
    "I am a passionate full-stack developer with expertise in JavaScript, React.js, PHP, and backend technologies. I love building high-performance, scalable web applications.",
  skills: [
    { name: "JavaScript (ES6+)", icon: "CodeIcon", color: "text-yellow-500" },
    { name: "React.js & Next.js", icon: "WebIcon", color: "text-blue-500" },
    { name: "PHP & Laravel", icon: "StorageIcon", color: "text-purple-500" },
    { name: "API Development", icon: "ApiIcon", color: "text-green-500" },
  ],
};

// Icon Map
const iconComponents = {
  WebIcon: WebIcon,
  CodeIcon: CodeIcon,
  StorageIcon: StorageIcon,
  ApiIcon: ApiIcon,
};

export default function About() {
  const [typedText, setTypedText] = useState("");
  const [descIndex, setDescIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    const fullText = about.description;
    const speed = isDeleting ? 40 : 80;
    const pauseTime = 2000;

    let typingTimeout: NodeJS.Timeout;

    if (!isDeleting && descIndex < fullText.length) {
      typingTimeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[descIndex]);
        setDescIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && descIndex === fullText.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && descIndex > 0) {
      typingTimeout = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1));
        setDescIndex((prev) => prev - 1);
      }, speed);
    } else if (isDeleting && descIndex === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(typingTimeout);
  }, [descIndex, isDeleting]);

  return (
    <section id="about" className="min-h-screen bg-white text-gray-900 py-16 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-purple-600 text-center"
      >
        About Me
      </motion.h2>

      {/* Description with Typewriter Effect */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="mt-6 text-lg text-blue-500 text-center max-w-3xl mx-auto leading-relaxed font-bold"
      >
        {typedText}
        <span className="animate-pulse">|</span>
      </motion.p>

      {/* Skills & Personal Info Section */}
      <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="bg-gray-100 p-6 rounded-lg shadow-md border border-purple-600"
        >
          <h3 className="text-xl font-semibold text-purple-700 flex items-center">
            <CodeIcon className="mr-2" /> Technical Skills
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            {about.skills.map((skill, index) => {
              const IconComponent = iconComponents[skill.icon];
              return (
                <li key={index} className="flex items-center">
                  <IconComponent className={`mr-2 ${skill.color}`} />
                  {skill.name}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Personal Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md border border-purple-600"
        >
          <h3 className="text-xl font-semibold text-purple-700 flex items-center">
            <LocationOn className="mr-2" /> Personal Details
          </h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li className="flex items-center">
              <Cake className="mr-2 text-pink-500" /> <strong>DOB:</strong>{" "}
              {about.dob}
            </li>
            <li className="flex items-center">
              <LocationOn className="mr-2 text-red-500" />{" "}
              <strong>Location:</strong> {about.location}
            </li>
            <li className="flex items-center">
              <Email className="mr-2 text-blue-500" /> <strong>Email:</strong>{" "}
              {about.email}
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 text-green-500" /> <strong>Phone:</strong>{" "}
              {about.phone}
            </li>
            <li className="flex items-center">
              <LinkedIn className="mr-2 text-purple-700" />
              <strong>LinkedIn:</strong>
              <a
                href={about.linkedin}
                className="text-purple-700 hover:underline ml-2"
                target="_blank"
              >
                Profile
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
