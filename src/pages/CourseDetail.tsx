import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowLeft } from 'lucide-react';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">课程未找到</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回首页
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-6xl mb-4">{course.icon}</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{course.title}</h1>
          <p className="text-gray-600 text-lg">{course.description}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">课程内容</h2>
          <div className="space-y-4">
            <div className="p-6 bg-blue-50 rounded-xl border-2 border-dashed border-blue-200">
              <p className="text-gray-600 text-center">
                课程内容待补充...
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-600 text-center">
                课程内容待补充...
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-600 text-center">
                课程内容待补充...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
