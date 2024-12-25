"use client"

import { motion } from "framer-motion";

const courses = [
  {
    title: "PLC Programming",
    duration: "4 Weeks",
    level: "Beginner to Advanced",
    description: "Comprehensive training in PLC programming and implementation"
  },
  {
    title: "SCADA Systems",
    duration: "6 Weeks",
    level: "Intermediate",
    description: "Learn to design and manage SCADA systems effectively"
  },
  {
    title: "Industrial Automation",
    duration: "8 Weeks",
    level: "Advanced",
    description: "Master industrial automation technologies and practices"
  }
];

export function TrainingSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Training Programs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Enhance your skills with our professional training courses
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 text-blue-600 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m9 0h-9m9 0v6.75a4.5 4.5 0 11-9 0v-6.75"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {course.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2"
                      />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.606-1.385M9 10h1.5a2.5 2.5 0 010 5H9v-5z"
                      />
                    </svg>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                    </svg>
                    <span>Certificate Included</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-6">
                  {course.description}
                </p>
                <button
                  className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
