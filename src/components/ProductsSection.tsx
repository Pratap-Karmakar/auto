"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    title: "PLC Automation",
    description: "Advanced programmable logic controllers for industrial automation",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "SCADA Systems",
    description: "Supervisory control and data acquisition solutions",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "HMI Solutions",
    description: "Human-machine interface systems for efficient control",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Industrial IoT",
    description: "Connected solutions for smart manufacturing",
    image: "/placeholder.svg?height=300&width=400",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Discover our range of innovative automation solutions
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative group h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </motion.div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-slate-600 mb-4">{product.description}</p>
                <button
                  className="w-full py-2 px-4 text-sm font-medium text-slate-900 border border-slate-300 rounded-md hover:bg-slate-100"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
