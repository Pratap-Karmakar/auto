"use client"

import Link from "next/link"
import { Mail, Clock, Phone } from 'lucide-react'
import { motion } from "framer-motion"

export function SiteHeader() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full"
    >
      <div className="border-b bg-[#dd3951]">
        <div className="container flex h-10 items-center justify-between px-4 sm:px-8 lg:px-12">
          <div className="flex items-center space-x-4 text-sm text-white">
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>contact@example.com</span>
            </div>
            <div className="hidden items-center space-x-1 sm:flex">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 10:00 am - 7:00 pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4 text-white" />
            <span className="text-sm text-white">+1 234 567 890</span>
          </div>
        </div>
      </div>
      <div className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl font-bold text-[#e0475e]">StarTrack</span>
              <span className="text-2xl font-light text-slate-600">Automation</span>
            </motion.div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {["Home", "About Us", "Products", "Competencies", "Industries", "Training", "IT Services"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <Link 
                  href="#" 
                  className="text-sm text-slate-600 hover:text-[#e0475e] font-bold transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

