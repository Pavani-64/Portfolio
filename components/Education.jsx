'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Electronics & Communication Engineering",
      institution: "Thapar University",
      location: "Patiala, Punjab",
      period: "Nov 2022 - May 2026",
      description: "Currently pursuing my undergraduate degree with focus on embedded systems, IoT, and VLSI design.",
      achievements: [
        "Specializing in embedded systems and IoT",
        "Active participation in technical projects",
        "Strong foundation in electronics and communication",
        "Hands-on experience with microcontrollers and FPGA design"
      ],
      gpa: "In Progress"
    },
    {
      degree: "12th Standard",
      institution: "Narayana Junior College",
      location: "Visakhapatnam, Andhra Pradesh",
      period: "Jun 2020 - May 2022",
      description: "Completed higher secondary education with focus on science and mathematics.",
      achievements: [
        "Strong foundation in physics, chemistry, and mathematics",
        "Developed analytical and problem-solving skills",
        "Participated in academic competitions",
        "Prepared for engineering entrance examinations"
      ],
      gpa: "Completed"
    },
    {
      degree: "10th Standard",
      institution: "KV School",
      location: "Visakhapatnam, Andhra Pradesh",
      period: "Apr 2019 - Mar 2020",
      description: "Completed secondary education with excellent academic performance.",
      achievements: [
        "Excellent academic performance",
        "Strong foundation in core subjects",
        "Active participation in school activities",
        "Developed leadership and teamwork skills"
      ],
      gpa: "Completed"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-800"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-blue-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-gray-300"
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Status:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.gpa === "In Progress" 
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-green-500/20 text-green-400 border border-green-500/30"
                      }`}>
                        {edu.gpa}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 p-8 rounded-lg border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Academic Focus Areas
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Embedded Systems",
                description: "Microcontrollers, RTOS, Firmware Development",
                icon: "🔧"
              },
              {
                title: "IoT & VLSI",
                description: "FPGA Design, Sensor Integration, Tanner EDA",
                icon: "🌐"
              },
              {
                title: "Programming",
                description: "C, C++, Python, JavaScript, Data Structures",
                icon: "💻"
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="text-4xl mb-3">{area.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{area.title}</h4>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 