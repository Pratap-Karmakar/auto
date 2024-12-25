"use client"

import { motion } from "framer-motion"
import { Cpu, Shield, Users, Zap, BarChart, Settings } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: "Advanced Automation",
    description: "Cutting-edge automation solutions for modern industries"
  },
  {
    icon: Shield,
    title: "Reliable Security",
    description: "Protected systems with industry-leading security measures"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 support from our team of automation experts"
  },
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Quick deployment with minimal disruption to operations"
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Real-time monitoring and performance optimization"
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored automation solutions for your specific needs"
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold tracking-tight text-[#e0475e] sm:text-6xl">
            Why Choose StarTrack Automation?
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-bold">
            Discover the advantages that make us the right choice for quality automation solutions
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#e0475e] text-white flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

