"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 px-4 py-24 sm:px-8 lg:px-12"
      >
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Welcome To
            <span className="block text-cyan-300">StarTrack Automation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-blue-100"
          >
            Empowering industries with cutting-edge automation solutions. Transform your operations with our innovative technology and expert services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <button
              className="px-6 py-3 text-lg font-medium text-white transition duration-300 ease-in-out bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:from-cyan-500 hover:to-blue-600"
            >
              Get Started Now
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[600px]"
        >
          <Image
            src="/placeholder.svg"
            alt="Automation Illustration"
            width={800}
            height={600}
            className="object-contain"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
      />
    </div>
  )
}
