"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold tracking-tight text-[#e0475e] ">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-slate-900 font-bold">
            Get in touch with our team for any queries or support
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#e0475e] mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900">Address</h3>
                <p className="text-slate-600">123 Automation Street, Tech City, 12345</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#e0475e] mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900">Phone</h3>
                <p className="text-slate-600">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#e0475e] mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900">Email</h3>
                <p className="text-slate-600">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-[#e0475e] mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900">Working Hours</h3>
                <p className="text-slate-600">Monday - Friday: 10:00 AM - 7:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0475e]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0475e]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0475e]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e0475e] min-h-[150px]"
            />
            <button className="w-full px-4 py-2 text-white bg-[#e0475e] rounded-lg hover:bg-[#de3f57]">
              Send Message
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
