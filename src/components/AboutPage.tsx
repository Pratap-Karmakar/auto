'use client'

import { motion } from "framer-motion"
import React from "react"
import { FaLightbulb, FaHandshake, FaStar } from 'react-icons/fa'
import { MdLightbulbOutline } from "react-icons/md";
import { BiCube } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { FaMicrochip } from "react-icons/fa";
import { GiForwardSun } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";

const AboutPage: React.FC = () => {
  return (
    <motion.div
      className="bg-[#F7FAFC] min-h-screen text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        className="flex flex-col justify-center items-center pt-20 px-4 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e0475e] via-[#c93f53] to-[#e0475e] mb-6 pb-10 text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to StarTrack Automation pvt ltd.
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-gray-900 max-w-7xl text-center mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          We, a group of Engineers, experience in Industrial Automation field to future Embeeded Technology (IOT & Robotics) for over a decade, stepped into building technologies. Our vision is predominantly focussed into bridging the GAP between Industrial Automation and IOT. We understand both. We are into making of both ready and customize; stand-alone embeeded system to smart IOT modules. We are into helping people and industries for smart control, monitoring, data logging and analyzing any system. 
        </motion.p>
        <motion.div
          className="bg-gradient-to-r from-[#e0475e] via-[#af3749] to-[#e0475e] h-1 w-40 rounded-full mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.a
          href="/about"
          className="bg-[#e0475e] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#ce4257] transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
        
      </motion.section>

      {/* Mission Statement Section */}
      <motion.section
        id="mission"
        className="flex flex-col items-center py-20 px-4 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#e0475e] mb-8">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-900 max-w-7xl text-center leading-relaxed">
        Our mission is to bridge the gap between Industrial Automation and IoT by leveraging over a decade of expertise in embedded technology and robotics. We are committed to creating innovative solutions, ranging from standalone embedded systems to smart IoT modules, tailored for seamless control, monitoring, and data analysis. We strive to accelerate industrial automation with smart, accurate, and efficient solutions designed to enhance productivity, ensure safety, minimize waste, manage energy effectively, and conduct comprehensive breakdown analysis. Additionally, our expertise extends to smart data monitoring, logging, and analysis across various platforms, enabling actionable insights and informed decision-making. Gaining customer trust through smart, honest, and dedicated work is our collective promise, as we empower industries and individuals with smarter, more efficient technologies.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }} className="relative w-full overflow-hidden" style={{ height: '450px', marginTop: '-150px' }}>
        <svg 
          viewBox="0 0 1440 320" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
          className="w-full h-full absolute bottom-0 left-0"
        >
          <path 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#e0475e"
          />
        </svg>
      </motion.div>

      {/* Core Values Section */}
      <motion.section
  className="relative flex flex-col items-center py-20 px-4 bg-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  
  <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-[#e0475e] mb-12">
    Our Core Values
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
    {[
      { title: "Innovation and Expertise", icon: FaLightbulb, description: "Bridging Industrial Automation and IoT with cutting-edge, tailored solutions backed by a decade of expertise." },
      { title: "Comprehensive Solutions", icon: BiCube, description: "Offering end-to-end services, from DCS and PLC to IoT-based systems, for diverse industries." },
      { title: "Customer-Centric Approach", icon: FiUsers, description: "Delivering reliable, efficient solutions for smart control, monitoring, and data analysis." },
      { title: "Technological Advancement", icon: FaMicrochip, description: "Driving progress with SCADA, VFD, intelligent MCC, and modern automation tools." },
      { title: "Sustainability and Future-Readiness", icon: GiForwardSun, description: "Promoting sustainable, smart technologies to meet evolving industry demands." },
      { title: "Collaboration", icon: AiOutlineTeam, description: "Partnering with industries to design and implement seamless, customized solutions that drive efficiency and growth." },
    ].map((value, index) => (
      <motion.div
        key={index}
        className="bg-white shadow-xl rounded-lg p-8 text-center"
        whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <value.icon className="text-5xl text-[#e0475e] mb-4 mx-auto" />
        <h3 className="text-2xl font-semibold text-[#e0475e] mb-4">{value.title}</h3>
        <p className="text-gray-700 text-lg">{value.description}</p>
      </motion.div>
    ))}
  </div>
</motion.section>




      {/* CTA Section */}
      <motion.section
        className="flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-r from-[#e0475e] via-[#af3749] to-[#e0475e] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-center mb-10 leading-relaxed">
        To bridge the gap between Industrial Automation and IoT with innovative embedded systems and smart IoT solutions for seamless control, monitoring, and data analysis.
        </p>
        <motion.a
          href="/contact"
          className="bg-white text-[#e0475e] px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </motion.section>
    </motion.div>
  )
}

export default AboutPage













// 'use client'

// import { motion } from "framer-motion"
// import React from "react"
// import { FaLightbulb, FaMicrochip } from 'react-icons/fa'
// import { BiCube } from "react-icons/bi"
// import { FiUsers } from "react-icons/fi"
// import { GiForwardSun } from "react-icons/gi"
// import { AiOutlineTeam } from "react-icons/ai"

// const AboutPage: React.FC = () => {
//   return (
//     <motion.div
//       className="bg-[#F7FAFC] min-h-screen text-gray-900"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Hero Section */}
//       <motion.section
//         className="flex flex-col justify-center items-center pt-20 px-4 pb-60"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <motion.h1 
//           className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e0475e] via-[#c93f53] to-[#e0475e] mb-6 pb-10 text-center"
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Welcome to StarTrack Automation pvt ltd.
//         </motion.h1>
//         <motion.p 
//           className="text-lg md:text-xl lg:text-2xl text-gray-900 max-w-7xl text-center mb-10 leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           We, a group of Engineers, experience in Industrial Automation field to future Embeeded Technology (IOT & Robotics) for over a decade, stepped into building technologies. Our vision is predominantly focussed into bridging the GAP between Industrial Automation and IOT. We understand both. We are into making of both ready and customize; stand-alone embeeded system to smart IOT modules. We are into helping people and industries for smart control, monitoring, data logging and analyzing any system. 
//         </motion.p>
//         <motion.div
//           className="bg-gradient-to-r from-[#e0475e] via-[#af3749] to-[#e0475e] h-1 w-40 rounded-full mb-10"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         />
//         <motion.a
//           href="/about"
//           className="bg-[#e0475e] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#ce4257] transition-all shadow-lg"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Learn More
//         </motion.a>
//       </motion.section>

//       {/* Wave SVG */}
      

//       {/* Mission Statement Section */}
//       <motion.section
//         id="mission"
//         className="relative flex flex-col items-center py-20 px-4"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <div className="relative z-10">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#e0475e] mb-8">
//             Our Mission
//           </h2>
//           <p className="text-lg md:text-xl lg:text-2xl text-gray-900 max-w-6xl text-center leading-relaxed">
//             Our mission is to bridge the gap between Industrial Automation and IoT by leveraging over a decade of expertise in embedded technology and robotics. We aim to create innovative solutions, from standalone embedded systems to smart IoT modules, tailored for seamless control, monitoring, and data analysis. Our goal is to empower industries and individuals with smarter, more efficient technologies.
//           </p>
//         </div>
//       </motion.section>
//       <div className="relative w-full overflow-hidden" style={{ height: '150px', marginTop: '-150px' }}>
//         <svg 
//           viewBox="0 0 1440 320" 
//           fill="none" 
//           xmlns="http://www.w3.org/2000/svg" 
//           preserveAspectRatio="none"
//           className="w-full h-full absolute bottom-0 left-0"
//         >
//           <path 
//             d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
//             fill="#FFE700"
//           />
//         </svg>
//       </div>

//       {/* Core Values Section */}
//       <motion.section
//         className="relative flex flex-col items-center py-20 px-4 bg-white"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#e0475e] mb-12">
//           Our Core Values
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
//           {[
//             { title: "Innovation and Expertise", icon: FaLightbulb, description: "Bridging Industrial Automation and IoT with cutting-edge, tailored solutions backed by a decade of expertise." },
//             { title: "Comprehensive Solutions", icon: BiCube, description: "Offering end-to-end services, from DCS and PLC to IoT-based systems, for diverse industries." },
//             { title: "Customer-Centric Approach", icon: FiUsers, description: "Delivering reliable, efficient solutions for smart control, monitoring, and data analysis." },
//             { title: "Technological Advancement", icon: FaMicrochip, description: "Driving progress with SCADA, VFD, intelligent MCC, and modern automation tools." },
//             { title: "Sustainability and Future-Readiness", icon: GiForwardSun, description: "Promoting sustainable, smart technologies to meet evolving industry demands." },
//             { title: "Collaboration", icon: AiOutlineTeam, description: "Partnering with industries to design and implement seamless, customized solutions that drive efficiency and growth." },
//           ].map((value, index) => (
//             <motion.div
//               key={index}
//               className="bg-white shadow-xl rounded-lg p-8 text-center"
//               whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)" }}
//               transition={{ duration: 0.3 }}
//             >
//               <value.icon className="text-5xl text-[#e0475e] mb-4 mx-auto" />
//               <h3 className="text-2xl font-semibold text-[#e0475e] mb-4">{value.title}</h3>
//               <p className="text-gray-700 text-lg">{value.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.section
//         className="flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-r from-[#e0475e] via-[#af3749] to-[#e0475e] text-white"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
//           Let&apos;s Work Together
//         </h2>
//         <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-center mb-10 leading-relaxed">
//           To bridge the gap between Industrial Automation and IoT with innovative embedded systems and smart IoT solutions for seamless control, monitoring, and data analysis.
//         </p>
//         <motion.a
//           href="/contact"
//           className="bg-white text-[#e0475e] px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-lg"
//           whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Contact Us
//         </motion.a>
//       </motion.section>
//     </motion.div>
//   )
// }

// export default AboutPage

