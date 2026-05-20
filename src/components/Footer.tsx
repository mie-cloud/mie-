import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, BarChart3 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                DataLearn
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              专业的数据分析学习平台，帮助你掌握数据技能，开启职业新篇章。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">课程</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/course/python-basics" className="text-gray-400 hover:text-green-400 transition-colors">
                  Python基础
                </Link>
              </li>
              <li>
                <Link to="/course/data-analysis" className="text-gray-400 hover:text-green-400 transition-colors">
                  数据分析
                </Link>
              </li>
              <li>
                <Link to="/course/data-visualization" className="text-gray-400 hover:text-green-400 transition-colors">
                  数据可视化
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-green-400 transition-colors">
                  实战项目
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">资源</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  学习指南
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  常见问题
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  社区讨论
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  开发者文档
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                support@datalearn.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                400-123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                北京市海淀区中关村科技园
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© 2026 DataLearn · 数据分析学习平台</p>
        </div>
      </div>
    </footer>
  );
}
