"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg mb-4">
            Email:{" "}
            <a
              href="mailto:aravinthakshanmain@example.com"
              className="text-blue-500 hover:underline"
            >
              your.email@example.com
            </a>
          </p>
          <p className="text-lg mb-4">
            Phone:{" "}
            <a
              href="tel:+91 8754563674"
              className="text-blue-500 hover:underline"
            >
              +1234567890
            </a>
          </p>
          <p className="text-lg">Location: Your City, Your Country</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
