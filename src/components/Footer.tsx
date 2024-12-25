"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#e0475e] text-slate-100">
      {/* Background SVG */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#343131"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container px-4 py-12 sm:px-8 lg:px-12 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">About Us</h3>
            <p className="text-sm">
              StarTrack Automation is a leading provider of industrial automation solutions,
              delivering excellence through innovation and expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Products", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-[#343131] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Services</h3>
            <ul className="space-y-2">
              {[
                "Project Execution",
                "Applications",
                "Industries",
                "Our Field Services",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-[#343131] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-slate-100 hover:text-[#343131] transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-white font-bold"
        >
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#e0475e]">StarTrack Automation.</span> All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

