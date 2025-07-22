"use client";
import { motion } from "framer-motion";
import { Code, Computer, Cpu, Database, Globe, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Structures & Algorithms",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "React (basics)", level: 70 },
      ],
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 80 },
        { name: "C", level: 90 },
        { name: "C++", level: 95 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      title: "Computer Fundamentals",
      icon: <Computer className="w-6 h-6" />,
      skills: [
        { name: "OOPS", level: 90 },
        { name: "Operating Systems", level: 85 },
        { name: "Computer Networks", level: 80 },
        { name: "DBMS", level: 80 },
      ],
    },
    {
      title: "Core Electronics (Hardware + Software)",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "Analog Electronics", level: 95 },
        { name: "MOSFET", level: 90 },
        { name: "Digital Electronics", level: 90 },
        { name: "Verilog", level: 85 },
        { name: "Microcontrollers (ARM, PIC, AVR)", level: 85 },
        { name: "Firmware Development", level: 85 },
        { name: "SystemVerilog", level: 80 },
        { name: "Tanner EDA", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-500 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                        }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Additional Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "📡 IoT Systems",
              "🔌 Circuit Analysis",
              "🧾 PCB Design",
              "📶 Sensor Networks",
              "🔧 Hardware Testing",
              "🎬 Video Editing (DaVinci Resolve)",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-200 border border-gray-700"
              >
                <span className="text-gray-300 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
