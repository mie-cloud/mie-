import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <span className="text-4xl">👨‍🎓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            许小烁
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            广东科学技术学院 · 商学院
          </p>
          <p className="text-lg text-blue-600 font-medium">
            商务数据分析与应用专业
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">我的课程</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {course.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-12">
          <p>© 2026 许小烁 · 个人页面</p>
        </div>
      </div>
    </div>
  );
}