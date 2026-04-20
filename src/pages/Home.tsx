import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { BookOpen, GraduationCap, Sparkles, Briefcase, Database, BarChart3 } from 'lucide-react';

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
            <span className="text-5xl">🐑</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            许小烁
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            广东科学技术学院 · 商学院
          </p>
          <p className="text-lg text-green-600 font-medium bg-green-50 px-6 py-2 rounded-full inline-block mb-8">
            商务数据分析与应用专业
          </p>
        </div>

        {/* 个人简介 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Sparkles className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">个人简介</h2>
          </div>
          
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              👋 嗨！我是许小烁，一个对数据充满好奇的大二学生，就读于广东科学技术学院商学院。
              我的专业是商务数据分析与应用，简单来说就是用数据讲故事的魔法师！
            </p>
            <p>
              🐍 我每天和Python打交道，和Pandas、NumPy做朋友，喜欢从一堆混乱的数据中找出隐藏的规律。
              想象一下，把枯燥的数字变成漂亮的图表，再从中发现商机，这是不是超酷的事情？
            </p>
            <p>
              📊 除了敲代码，我还喜欢爬爬网页收集数据，用SQL在数据库里寻宝，
              甚至会用数据预测一下奶茶店的销量趋势（这可是实战经验哦！）。
            </p>
            <p>
              🌟 我的目标是成为一名数据分析师，用数据帮助企业做出聪明的决策。
              虽然现在还是个小萌新，但我相信通过不断学习和实践，
              未来一定能成为数据世界的超级英雄！
            </p>
          </div>
        </div>

        {/* 技能展示 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">技能展示</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <div className="text-4xl mb-3">🐍</div>
              <h3 className="font-bold text-gray-800 mb-2">Python编程</h3>
              <p className="text-sm text-gray-600">掌握Python基础语法和常用库</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-gray-800 mb-2">数据分析</h3>
              <p className="text-sm text-gray-600">熟练使用Pandas、NumPy等工具</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <div className="text-4xl mb-3">🕸️</div>
              <h3 className="font-bold text-gray-800 mb-2">数据采集</h3>
              <p className="text-sm text-gray-600">掌握网络爬虫和API数据获取</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <div className="text-4xl mb-3">🗄️</div>
              <h3 className="font-bold text-gray-800 mb-2">数据库</h3>
              <p className="text-sm text-gray-600">掌握SQL和关系型数据库</p>
            </div>
          </div>
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