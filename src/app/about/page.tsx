"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Briefcase, GraduationCap, Award, BookOpen, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-12 md:py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-4 md:mb-6">
              About the Author
            </h1>
            <p className="text-lg sm:text-xl md:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8">
              Meet the expert behind this blockchain education platform
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 p-6 md:p-10 lg:p-12 xl:p-16"
          >
            {/* Profile Section */}
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <Image
                  src="/vivek.jpg"
                  alt="Vivek Dhandapani"
                  width={200}
                  height={200}
                  className="rounded-full shadow-2xl border-4 border-gradient-to-br from-blue-600 to-purple-600"
                  priority
                />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Vivek Dhandapani
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Gen AI & Business Solutions Architect
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/vivekdhandapani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#0A66C2] text-white font-semibold rounded-xl hover:bg-[#094d92] transition-all text-lg shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-6 h-6" />
                  Connect on LinkedIn
                </Link>
              </div>
            </div>

            {/* Expertise Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border-2 border-blue-200">
                <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-blue-900 mb-2">15+</p>
                <p className="text-blue-700 font-semibold text-lg">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border-2 border-purple-200">
                <GraduationCap className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-purple-900 mb-2">AI & ML</p>
                <p className="text-purple-700 font-semibold text-lg">Specialization</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 text-center border-2 border-indigo-200">
                <Award className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-indigo-900 mb-2">Blockchain</p>
                <p className="text-indigo-700 font-semibold text-lg">Expert</p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Vivek Dhandapani is a <strong className="text-gray-900">Gen AI and Business Solutions Architect</strong> with{" "}
                <strong className="text-blue-600">15+ years of experience</strong> in strategy, data, and AI-driven analytics. He specializes in leveraging
                Generative AI, AI Agents, and Machine Learning to drive digital transformation, enhance productivity, and generate business insights.
              </p>

              <p>
                His expertise spans <strong className="text-gray-900">predictive modeling, market intelligence, and strategic partnerships</strong>, delivering
                ROI-driven solutions across <strong className="text-purple-600">BFSI, Healthcare, Education, FMCG, and B2C sectors</strong>.
                By integrating traditional analytics with LLM-powered innovations, Vivek enhances operational efficiency, customer engagement,
                and data-driven decision-making to accelerate business growth.
              </p>

              <p className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 pl-6 py-4 rounded-r-xl">
                <strong className="text-blue-900">Blockchain Expertise:</strong> Vivek has deep experience in blockchain technology, specializing in
                decentralized systems architecture, smart contract development, and distributed ledger implementations. He has led multiple blockchain
                integration projects across financial services and supply chain management, bringing cutting-edge Web3 solutions to enterprise environments.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Generative AI & LLM Solutions",
                    "AI Agents & Automation",
                    "Blockchain & Web3 Technologies",
                    "Machine Learning & Predictive Analytics",
                    "Digital Transformation Strategy",
                    "Business Intelligence & Analytics",
                    "Smart Contract Development",
                    "Decentralized Applications (DApps)"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Courses Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Other Courses by Vivek
            </h2>
            <p className="text-xl text-gray-600">
              Explore more learning resources on AI and Machine Learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Mathematics Course */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://mathematicsdashboard-vivekdhandapani.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-400 transition-all hover:shadow-2xl h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Mathematics for Machine Learning
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Comprehensive course covering essential mathematical foundations for ML including linear algebra, calculus, and optimization.
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-semibold text-lg group-hover:gap-3 gap-2 transition-all">
                    Access Course
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Statistics Course */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://statisticsdashboard-vivekdhandapani.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-400 transition-all hover:shadow-2xl h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Statistics for Machine Learning
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Master statistical concepts essential for ML including probability theory, hypothesis testing, and statistical inference.
                  </p>
                  <div className="inline-flex items-center text-purple-600 font-semibold text-lg group-hover:gap-3 gap-2 transition-all">
                    Access Course
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Upcoming Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 shadow-2xl"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Rocket className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-4xl font-bold text-white">Upcoming Courses</h3>
            </div>
            <p className="text-blue-100 text-xl mb-10 text-center leading-relaxed">
              Stay tuned for these exciting new courses coming soon:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: "Machine Learning", gradient: "from-blue-500 to-cyan-500" },
                { name: "Gen AI", gradient: "from-purple-500 to-pink-500" },
                { name: "AI Agents", gradient: "from-orange-500 to-red-500" },
                { name: "FPGA Acceleration", gradient: "from-green-500 to-emerald-500" }
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl px-8 py-8 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-white/20"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${course.gradient} rounded-xl mx-auto mb-4 shadow-lg`}></div>
                  <p className="text-gray-900 font-bold text-xl">{course.name}</p>
                  <div className="mt-4 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
                    <span className="text-indigo-700 font-semibold text-sm">Coming Soon</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Connect with Vivek
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Follow his work and insights on AI, blockchain, and digital transformation
            </p>
            <Link
              href="https://www.linkedin.com/in/vivekdhandapani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 text-xl shadow-2xl"
            >
              <Linkedin className="w-6 h-6" />
              Follow on LinkedIn
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}