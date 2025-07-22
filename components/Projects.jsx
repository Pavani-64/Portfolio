'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Monitor, Code, Cpu, Zap } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Speed Typer",
      description: "A real-time typing speed test application with advanced metrics and intelligent feedback system.",
      features: [
        "Real-Time Typing Metrics – Dynamically calculates WPM, accuracy, and progress",
        "Intelligent Feedback System – Highlights correct and incorrect letters",
        "Engaging & Responsive UI – Modern, glassmorphic design with smooth animations"
      ],
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      github: "https://github.com/Pavani-64",
      demo: "#",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "PCB Fabrication & Design",
      description: "Designed and fabricated printed circuit boards with hands-on experience in circuit design and manufacturing.",
      features: [
        "Custom PCB Design and Layout",
        "Circuit Design and Analysis",
        "Manufacturing Process Optimization"
      ],
      technologies: ["PCB Design", "Circuit Analysis", "Manufacturing"],
      github: "#",
      demo: "#",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "DC Power Supply Design",
      description: "Developed and tested DC power supply circuits for enhanced power electronics knowledge.",
      features: [
        "Voltage Regulation Systems",
        "Power Electronics Design",
        "Circuit Testing and Validation"
      ],
      technologies: ["Power Electronics", "Voltage Regulation", "Circuit Design"],
      github: "#",
      demo: "#",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "IoT-Based Systems",
      description: "Certified IoT project focusing on sensor integration and smart system development.",
      features: [
        "IoT Sensor Integration",
        "Smart System Development",
        "Real-time Data Processing"
      ],
      technologies: ["IoT", "Sensors", "Embedded Systems"],
      github: "#",
      demo: "#",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    }
  ]

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

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
                  <h3 className="text-2xl font-bold">{project.title}</h3>
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
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
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