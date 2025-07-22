'use client'
import { motion } from 'framer-motion'
import { Award, Trophy, Heart, Users, Globe } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Mathematics Olympiad",
      description: "Successfully participated and achieved recognition in 2019",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "IoT Certification",
      description: "Certified in IoT-Based Systems from Thapar Institute",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Sports Achievements",
      description: "Regional-Level Kabaddi Player",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const hobbies = [
    { name: "Painting", icon: "🎨" },
    { name: "Cooking", icon: "👨‍🍳" },
    { name: "Cycling", icon: "🚴" },
    { name: "Craft Working", icon: "🛠️" }
  ]

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Telugu", level: "Native" }
  ]

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Computer Science Enthusiast & ECE Student
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                I am a passionate Computer Science enthusiast currently pursuing a B.E. in Electronics & Communication Engineering at Thapar University. My primary interests lie in Data Structures & Algorithms, frontend development, and Python programming. I enjoy building interactive web applications and solving challenging coding problems. While my academic background is in ECE, my career focus is on software development and technology.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey in technology has been driven by curiosity and a desire to solve complex problems. From designing PCB circuits to developing web and Python-based projects.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                Languages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-700 p-3 rounded-lg text-center"
                  >
                    <div className="font-semibold text-white">{lang.name}</div>
                    <div className="text-sm text-gray-400">{lang.level}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements and Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500" />
                Achievements
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-700 p-4 rounded-lg border-l-4 border-gradient-to-b from-blue-500 to-purple-600"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color} text-white`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{achievement.title}</h5>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-500" />
                Hobbies & Interests
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition-colors duration-200"
                  >
                    <div className="text-3xl mb-2">{hobby.icon}</div>
                    <div className="font-medium text-white">{hobby.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 