import { Link } from 'react-router-dom';
import { Search, User, BarChart3, BookOpen, Target, Clock, Trophy, Users, GraduationCap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                DataLearn
              </span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                首页
              </Link>
              <Link to="/projects" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                训练项目
              </Link>
              <Link to="/practice" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                练习
              </Link>
              <Link to="/wrong-answers" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                错题本
              </Link>
              <Link to="/plan" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                学习计划
              </Link>
              <Link to="/leaderboard" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                排行榜
              </Link>
              <Link to="/community" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                社区
              </Link>
              <Link to="/my-learning" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                我的学习
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="搜索课程、知识点..."
                className="bg-transparent border-none focus:outline-none text-sm w-48"
              />
            </div>
            <button className="text-gray-700 hover:text-green-600 font-medium">
              登录
            </button>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all">
              免费注册
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
