"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code,
  Award,
  Sparkles,
  Users,
  Timer,
  ChevronRight,
} from "lucide-react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { motion } from "framer-motion";

export default function HomePage() {
  const stats = [
    { value: "6", label: "Comprehensive Modules" },
    { value: "15+", label: "Hours of Content" },
    { value: "50+", label: "Interactive Examples" },
    { value: "100%", label: "Practical Focus" },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Structured Learning Path",
      description:
        "Progress from basics to advanced concepts with our carefully designed curriculum",
    },
    {
      icon: Code,
      title: "Interactive Playground",
      description:
        "Practice with live code examples and blockchain simulations",
    },
    {
      icon: Sparkles,
      title: "Real-World Applications",
      description: "Learn through practical use cases and industry examples",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-12 md:py-24 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold mb-6 md:mb-12 leading-tight px-2">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Master Blockchain
              </span>
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8 mb-8 md:mb-16 leading-relaxed">
              Interactive learning platform with comprehensive courses covering
              <span className="text-blue-600 font-semibold">
                {" "}
                blockchain fundamentals
              </span>
              ,
              <span className="text-purple-600 font-semibold">
                {" "}
                cryptography
              </span>
              , and
              <span className="text-indigo-600 font-semibold">
                {" "}
                Web3 concepts
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <Link
                href="/learn"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl md:rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-base md:text-xl shadow-xl shadow-blue-500/25"
              >
                Start Learning Journey
                <ArrowRight className="ml-3 w-5 md:w-7 h-5 md:h-7" />
              </Link>
              <Link
                href="/playground"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-6 bg-white text-gray-900 font-bold rounded-xl md:rounded-2xl hover:bg-gray-50 transition-all border-2 border-gray-300 hover:border-gray-400 text-base md:text-xl shadow-lg"
              >
                Try Interactive Tools
                <Code className="ml-3 w-5 md:w-7 h-5 md:h-7" />
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-24 px-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 md:p-10 rounded-xl md:rounded-2xl bg-white shadow-xl border border-gray-200 hover:shadow-2xl transition-all"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2 md:mb-4">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Built for learners who want to understand blockchain deeply and
              practically
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl md:rounded-2xl p-6 md:p-10 hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-blue-300"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 md:mb-10 px-4">
              Course Curriculum
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4">
              Six comprehensive modules designed to take you from beginner to
              blockchain expert
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16 px-4"
          >
            <Link
              href="/learn"
              className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-base md:text-xl shadow-xl"
            >
              View All Courses
              <ChevronRight className="ml-2 w-5 md:w-6 h-5 md:h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
              Ready to Start Your Blockchain Journey?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 leading-relaxed px-4">
              Join thousands of learners mastering blockchain technology
            </p>
            <Link
              href="/learn"
              className="inline-flex items-center px-8 md:px-12 py-4 md:py-6 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 text-base md:text-xl shadow-2xl"
            >
              Get Started Now
              <ArrowRight className="ml-3 w-5 md:w-6 h-5 md:h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
