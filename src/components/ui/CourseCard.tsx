import Link from "next/link";
import { Clock, BarChart } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const difficultyColors = {
    Beginner: "text-green-700 bg-green-100 border-green-300",
    Intermediate: "text-amber-700 bg-amber-100 border-amber-300",
    Advanced: "text-red-700 bg-red-100 border-red-300",
  };

  return (
    <Link href={`/learn/${course.id}`}>
      <div className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl md:hover:-translate-y-2">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity`}
        />

        <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-8">{course.icon}</div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 group-hover:text-blue-600 transition-colors leading-tight">
            {course.title}
          </h3>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 md:mb-8 line-clamp-3 leading-relaxed">
            {course.description}
          </p>

          <div className="flex items-center flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
            <span
              className={`px-3 py-2 md:px-5 md:py-3 rounded-full text-sm md:text-base font-semibold border ${
                difficultyColors[course.difficulty]
              }`}
            >
              {course.difficulty}
            </span>
            <div className="flex items-center text-gray-600 text-sm sm:text-base md:text-lg">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
              {course.duration}
            </div>
            <div className="flex items-center text-gray-600 text-sm sm:text-base md:text-lg">
              <BarChart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
              Module {course.order}
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <p className="text-sm md:text-base text-gray-700 font-semibold mb-3 md:mb-4">
              Topics covered:
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {course.topics.slice(0, 3).map((topic, index) => (
                <span
                  key={index}
                  className="text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-200"
                >
                  {topic}
                </span>
              ))}
              {course.topics.length > 3 && (
                <span className="text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 text-gray-600 font-medium">
                  +{course.topics.length - 3} more
                </span>
              )}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </Link>
  );
}
