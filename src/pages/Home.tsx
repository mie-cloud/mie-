import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-green-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-emerald-300 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-8 shadow-xl">
            <span className="text-5xl">🧑‍🎓</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            许小烁
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            广东科学技术学院 · 商学院
          </p>
          <p className="text-lg text-green-600 font-medium bg-green-50 px-6 py-2 rounded-full inline-block">
            商务数据分析与应用专业
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">我的课程</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              return (
                <Link
                  key={course.id}
                  to={`/course/${course.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-400 p-8 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {course.shortDesc}
                  </p>
                  <div className="inline-flex items-center text-green-600 font-medium group-hover:text-green-800 transition-colors">
                    <span>查看详情</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-16">
          <p className="flex items-center justify-center">
            <GraduationCap className="w-4 h-4 mr-2 text-green-600" />
            © 2026 许小烁 · 个人页面
          </p>
        </div>
      </div>
    </div>
  );
}