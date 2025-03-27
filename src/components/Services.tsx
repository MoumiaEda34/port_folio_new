"use client";

import { CardContent, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import ApiIcon from "@mui/icons-material/Api";
import { motion } from "framer-motion";

// Static Services Data with Direct Component References
const services = [
  {
    title: "Advanced JavaScript Development",
    description:
      "Building high-performance and scalable web applications using modern JavaScript (ES6+), TypeScript, and best practices.",
    icon: <CodeIcon sx={{ fontSize: 80, color: "#ffffff" }} />,
  },
  {
    title: "React.js Development",
    description:
      "Creating dynamic, responsive, and fast single-page applications (SPAs) with React.js, Next.js, and state management libraries like Redux and Zustand.",
    icon: <WebIcon sx={{ fontSize: 80, color: "#ffffff" }} />,
  },
  {
    title: "PHP & Backend Development",
    description:
      "Developing secure and scalable server-side applications using PHP, Laravel, CodeIgniter, and RESTful API integration.",
    icon: <StorageIcon sx={{ fontSize: 80, color: "#ffffff" }} />,
  },
  {
    title: "API Development & Integration",
    description:
      "Building and integrating RESTful & GraphQL APIs for seamless communication between front-end and back-end applications.",
    icon: <ApiIcon sx={{ fontSize: 80, color: "#ffffff" }} />,
  },
];

// Background colors for cards
const cardColors = ["bg-blue-600", "bg-green-600", "bg-purple-600", "bg-pink-600"];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-center text-white py-16 px-6"
      style={{
        background: "linear-gradient(to bottom right, skyblue, purple)",
      }}
    >
      <h2 className="text-4xl font-bold shadow-text">My Services</h2>
      <p className="mt-4 max-w-2xl text-center text-lg text-gray-100">
        I specialize in{" "}
        <span className="font-semibold">Advanced JavaScript, React.js, and PHP development</span>{" "}
        to create high-performance, scalable web applications.
      </p>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl">
        {services.map((service, index) => {
          const cardColor = cardColors[index % cardColors.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.08,
                rotateX: 10,
                rotateY: -10,
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
              }}
              className={`rounded-2xl ${cardColor} shadow-2xl transition-all duration-500`}
            >
              <CardContent className="p-10 flex flex-col items-center text-center">
                {/* Icon Animation */}
                <motion.div whileHover={{ rotate: 15, scale: 1.3 }} className="mb-6">
                  {service.icon}
                </motion.div>

                <Typography variant="h5" className="font-bold text-white mb-4">
                  {service.title}
                </Typography>
                <Typography variant="body1" className="text-gray-200">
                  {service.description}
                </Typography>
              </CardContent>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
