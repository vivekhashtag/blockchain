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
      <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity`}
        />

        <div className="relative p-12">
          <div className="text-6xl mb-8">{course.icon}</div>

          <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight">
            {course.title}
          </h3>

          <p className="text-gray-600 text-xl mb-8 line-clamp-3 leading-relaxed">
            {course.description}
          </p>

          <div className="flex items-center flex-wrap gap-4 mb-8">
            <span
              className={`px-5 py-3 rounded-full text-base font-semibold border ${
                difficultyColors[course.difficulty]
              }`}
            >
              {course.difficulty}
            </span>
            <div className="flex items-center text-gray-600 text-lg">
              <Clock className="w-6 h-6 mr-2" />
              {course.duration}
            </div>
            <div className="flex items-center text-gray-600 text-lg">
              <BarChart className="w-6 h-6 mr-2" />
              Module {course.order}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base text-gray-700 font-semibold mb-4">
              Topics covered:
            </p>
            <div className="flex flex-wrap gap-3">
              {course.topics.slice(0, 3).map((topic, index) => (
                <span
                  key={index}
                  className="text-base px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-200"
                >
                  {topic}
                </span>
              ))}
              {course.topics.length > 3 && (
                <span className="text-base px-4 py-2 text-gray-600 font-medium">
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
