"use client";

import { motion } from "framer-motion";
import { ArrowRight,Activity,Grid,Factory,Wrench } from 'lucide-react';
import { useRouter } from "next/navigation";

const serviceData = [
  {
    icon: <Activity className="h-8 w-8 text-[#e0475e]" />,
    title: "Project Execution",
    description:
      "Discover a wide range of cutting-edge solutions for industrial automation and control. From DCS, PLC, and SCADA/HMI systems to advanced instrumentation, control panels, and energy management, we provide reliable and efficient products to meet all your automation needs.",
    link: "/webapp",
  },
  {
    icon: <Grid className="h-8 w-8 text-[#e0475e]" />,
    title: "Applications",
    description:
      "We offer tailored solutions for various industries, including power plants, process controls, batch automation, and specialized machinery. Our expertise extends to applications such as boilers, water treatment plants, and furnace systems, ensuring optimized performance and reliability across diverse sectors.",
    link: "/webapp",
  },
  {
    icon: <Factory className="h-8 w-8 text-[#e0475e]" />,
    title: "Industries",
    description:
      "We serve a wide range of industries, including steel, FMCG, power, aluminum, and pharmaceuticals. Our expertise also spans oil & gas, chemicals, automotive, and cement, delivering innovative solutions tailored to each sector's unique needs.",
    link: "/ecommercesolutions",
  },
  {
    icon: <Wrench className="h-8 w-8 text-[#e0475e]" />,
    title: "Our Field Services",
    description:
      "From turnkey project execution to advanced system integration, we specialize in SCADA, PLC, and DCS implementation, VFD commissioning, and IoT-based solutions. Our services include data acquisition, dashboard reporting, and AMC for automation to ensure seamless operations.",
    link: "/mobileapp",
  },
//   {
//     icon: <Rocket className="h-8 w-8 text-primary" />,
//     title: "Digital Strategy & Consulting",
//     description:
//       "Navigate the digital landscape with our strategy and consulting services, providing insights to optimize your presence and achieve business goals.",
//     link: "/digitalstrategy",
//   },
];

export default function OurServices() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/ourservices");
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between px-2">
      <div className="flex-grow flex flex-col p-4 md:p-8">
        <div className="flex flex-col items-end mb-8 md:mb-16">
          <div className="flex items-center justify-end space-x-2">
            <p className="text-right text-[#e0475e] text-sm font-semibold leading-snug">
              We focus on helping your business grow <br /> and move forward
            </p>
            <div className="bg-gradient-to-r from-black to-muted h-px w-24 md:w-48 rounded-full" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow text-center mb-8 md:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-8 space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-gradient-to-r from-[#e0475e] to-[#e0475e] w-24 h-8 md:w-64 md:h-24 rounded-full" />
            <h1 className="text-3xl md:text-8xl font-bold">
              <span className="text-[#e0475e]">Unique</span> <span className="text-[#343131]">Ideas</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <h1 className="text-3xl md:text-8xl font-bold">
              <span className="text-[#e0475e]">For Your</span> <span className="text-[#343131]">Business.</span>
            </h1>
            <button
              onClick={handleClick}
              className="bg-gradient-to-r from-[#e0475e] to-[#e0475e] group gap-3 md:text-2xl text-white hover:bg-zinc-900 px-4 py-2 sm:px-8 sm:py-4 md:pr-14 md:py-6 rounded-full text-base sm:text-lg font-medium flex items-center justify-center transition-colors duration-200"
            >
              What We Do?
              <div className="bg-white text-black rounded-full p-2 sm:p-3 md:p-4 transition-transform duration-300 group-hover:translate-x-3 sm:group-hover:translate-x-4 md:group-hover:translate-x-7 group-hover:scale-125">
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary transform transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="w-full pb-8">
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[80vw] sm:w-[300px] flex-shrink-0 group relative"
            >
              <div className="bg-card text-card-foreground border border-border h-full flex flex-col p-6 group rounded-lg">
                <div className="absolute top-0 left-0 h-1 w-full bg-[#e0475e] transform scale-x-0 transition-transform duration-700 rounded-t-full origin-left group-hover:scale-x-100" />
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#e0475e]">{service.title}</h3>
                <p className="text-sm mb-4 text-muted-foreground flex-grow">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="text-primary hover:text-primary/80 transition-colors duration-200 flex items-center"
                >
                  <div className=" bg-[#e0475e] rounded-full p-4 transition-transform duration-300 group-hover:translate-x-5">
                    <ArrowRight className="h-5 w-5  text-white" />
                  </div>
                  <span className="sr-only">
                    Learn more about {service.title}
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
