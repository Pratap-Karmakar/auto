"use client"

import { motion } from "framer-motion"
import { Factory, Truck, Building2, FlaskRoundIcon as Flask, Wrench, Leaf } from 'lucide-react'

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Smart manufacturing solutions with advanced automation"
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Automated logistics and supply chain management"
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description: "Intelligent infrastructure automation systems"
  },
  {
    icon: Flask,
    title: "Chemical",
    description: "Process automation for chemical industries"
  },
  {
    icon: Wrench,
    title: "Engineering",
    description: "Engineering solutions with precision control"
  },
  {
    icon: Leaf,
    title: "Agriculture",
    description: "Smart farming and agricultural automation"
  }
]

export function IndustriesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Delivering automation excellence across diverse sectors
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-700"
            >
              <industry.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {industry.title}
              </h3>
              <p className="text-slate-300">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

