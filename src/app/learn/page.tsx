"use client";

import { courses } from "@/data/courses";
import { CourseCard } from "@/components/ui/CourseCard";
import { BookOpen, Trophy, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold mb-10 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text">
                All Courses
              </span>
            </h1>
            <p className="text-3xl md:text-4xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Choose your learning path and master blockchain technology at your own pace
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center p-10 rounded-2xl bg-white shadow-xl border border-gray-200">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <div className="text-4xl font-extrabold text-gray-900 mb-2">6 Modules</div>
              <div className="text-gray-600 text-lg">Comprehensive Curriculum</div>
            </div>
            <div className="text-center p-10 rounded-2xl bg-white shadow-xl border border-gray-200">
              <Target className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <div className="text-4xl font-extrabold text-gray-900 mb-2">15+ Hours</div>
              <div className="text-gray-600 text-lg">Quality Content</div>
            </div>
            <div className="text-center p-10 rounded-2xl bg-white shadow-xl border border-gray-200">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <div className="text-4xl font-extrabold text-gray-900 mb-2">100% Free</div>
              <div className="text-gray-600 text-lg">No Hidden Costs</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
          {/* Course Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}