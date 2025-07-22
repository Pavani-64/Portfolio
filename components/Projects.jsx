'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Monitor, Code, Cpu, Zap } from 'lucide-react'

const Projects = () => {
  // CSE Projects
  const cseProjects = [
    {
      title: "Voting System",
      level: "Advanced",
      description: "A secure, region-based online voting platform with real-time stats and admin controls.",
      features: [
        "Secure & Region-Based Voting – Voter login, region-wise candidate filtering, and one-vote enforcement.",
        "Admin Panel – Add candidates, close elections, and track suspicious activity.",
        "Live Stats & Receipts – Real-time vote count, winner declaration, and timestamped vote receipts."
      ],
      technologies: ["C++"],
      github: "https://github.com/Pavani-64/Voting-System",
      demo: null,
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Speed Typer",
      level: "Intermediate",
      description: "A real-time typing speed test application with advanced metrics and intelligent feedback system.",
      features: [
        "Real-Time Typing Metrics – Dynamically calculates WPM, accuracy, and progress",
        "Intelligent Feedback System – Highlights correct and incorrect letters",
        "Engaging & Responsive UI – Modern, glassmorphic design with smooth animations"
      ],
      technologies: ["JavaScript", "CSS3", "HTML5"],
      github: "https://github.com/Pavani-64/SpeedTyper",
      demo: "https://pavani-64.github.io/SpeedTyper/",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DSA Practice Scripts",
      level: "Intermediate",
      description: "A collection of C++ scripts and notebooks solving classic Data Structures & Algorithms problems.",
      features: [
        "Solutions to LeetCode and other coding challenges",
        "Well-documented code for learning and reference",
        "Focus on clean, efficient algorithms"
      ],
      technologies: ["C++", "Algorithms"],
      github: null,
        demo: null,
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Core (ECE/Hardware) Projects
  const coreProjects = [
    {
      title: "Fire Detection System",
      level: "Beginner",
      description: "A simple fire detection system using a flame sensor and buzzer for alerts.",
      features: [
        "Detects fire using a flame sensor",
        "Activates buzzer and LED on fire detection",
        "Beginner-friendly breadboard project"
      ],
      technologies: ["ESP32", "Flame Sensor", "Buzzer", "LED", "Resistors", "Breadboard"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Smart Irrigation System",
      level: "Medium",
      description: "Automated irrigation system that waters plants based on soil moisture and weather conditions.",
      features: [
        "Soil moisture and rain sensors for smart watering",
        "Remote control and monitoring via Wi-Fi",
        "Manual override and local display (optional)"
      ],
      technologies: [
        "Soil Moisture Sensor",
        "Temperature & Humidity Sensor (DHT11/DHT22)",
        "Water Pump",
        "Relay Module",
        "Wi-Fi Module (ESP8266/NodeMCU)",
        "Microcontroller (Arduino/ESP32)",
        "Rain Sensor"
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-700 to-blue-400"
    },
    {
      title: "RF Energy Harvester–Based Fire Detection System",
      level: "Advanced",
      description: "A self-powered smart fire detection system using RF energy harvesting and LoRa communication.",
      features: [
        "Self-Powered Smart Sensing – Detects fire using flame and temperature sensors; powered by RF energy harvesting for autonomous operation.",
        "RAK3172 & STM32 Integration – Utilized STM32-based RAK3172 LoRa module for ultra-low-power, long-range wireless communication.",
        "Edge Monitoring & Alerts – Enables real-time fire alerts in off-grid locations without dependence on external power sources."
      ],
      technologies: ["RF Energy Harvesting", "STM32", "RAK3172", "LoRa", "Sensors"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "IoT-Based Systems",
      level: "Intermediate",
      description: "Certified IoT project focusing on sensor integration and smart system development.",
      features: [
        "IoT Sensor Integration",
        "Smart System Development",
        "Real-time Data Processing"
      ],
      technologies: ["IoT", "Sensors", "Embedded Systems"],
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* CSE Projects Section */}
        <h3 className="text-2xl font-bold text-white mb-8 mt-8">CSE Projects</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {cseProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className={`p-6 bg-gradient-to-r ${project.color} text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-2xl font-bold flex items-center gap-2">{project.title}
                    <span className={`ml-2 px-3 py-2 rounded-full text-xs font-semibold
                      ${project.level === 'Beginner' ? 'bg-green-700 text-green-200' :
                        project.level === 'Medium' || project.level === 'Intermediate' ? 'bg-yellow-700 text-yellow-200' :
                        'bg-blue-700 text-blue-200'}`}>{project.level}</span>
                  </h3>
                </div>
                <p className="text-gray-100">{project.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies / Main Components:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.github && (
                   <motion.a
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   href={project.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
                 >
                   <Github size={16} />
                   View Code
                 </motion.a> 
                  )}
                  
                  {project.demo && (
                   <motion.a
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   href={project.demo}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                 >
                   <ExternalLink size={16} />
                   Live Demo
                 </motion.a> 
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Projects Section */}
        <h3 className="text-2xl font-bold text-white mb-8 mt-16">Core (ECE/Hardware) Projects</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {coreProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className={`p-6 bg-gradient-to-r ${project.color} text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-2xl font-bold flex items-center gap-2">{project.title}
                    <span className={`ml-2 px-3 py-2 rounded-full text-xs font-semibold
                      ${project.level === 'Beginner' ? 'bg-green-700 text-green-200' :
                        project.level === 'Medium' || project.level === 'Intermediate' ? 'bg-yellow-700 text-yellow-200' :
                        'bg-blue-700 text-blue-200'}`}>{project.level}</span>
                  </h3>
                </div>
                <p className="text-gray-100">{project.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Main Components:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to see more projects?
          </h3>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Pavani-64"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 