import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Database, Clock, Users, Star, Award, Target, CheckCircle, PlayCircle, Download, Share2, BookOpen, Code } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projectsData = {
  1: {
    id: 1,
    title: '零售业销售数据清洗与异常值修复',
    description: '处理真实零售数据，学习数据清洗技术，修复异常值和缺失值。通过这个项目，你将学会使用Pandas进行数据清洗、处理缺失值、检测异常值等关键技能。',
    icon: <Database className="w-10 h-10" />,
    difficulty: '中级',
    tags: ['数据清洗', 'Pandas', '异常检测', '数据预处理'],
    learners: 1234,
    rating: 4.8,
    duration: '6小时',
    skills: ['Pandas', 'NumPy', '数据清洗', '异常检测'],
    chapters: [
      { id: 1, title: '项目概述与数据理解', duration: '30分钟' },
      { id: 2, title: '缺失值处理', duration: '1小时' },
      { id: 3, title: '异常值检测', duration: '1.5小时' },
      { id: 4, title: '数据类型转换', duration: '1小时' },
      { id: 5, title: '数据验证与导出', duration: '1.5小时' },
      { id: 6, title: '项目总结与扩展', duration: '30分钟' }
    ],
    resources: ['销售数据样本CSV', '代码模板', '参考资料'],
    learningObjectives: [
      '掌握数据清洗的基本流程',
      '学会使用Pandas处理缺失值',
      '了解常用的异常值检测方法',
      '能够进行数据验证和质量控制'
    ]
  },
  2: {
    id: 2,
    title: '电商平台用户行为日志特征工程',
    description: '分析用户行为数据，提取有价值的特征用于机器学习模型。学习如何从原始日志数据中提取有意义的特征，为后续的机器学习建模做准备。',
    icon: <Clock className="w-10 h-10" />,
    difficulty: '高级',
    tags: ['特征工程', '用户行为', '时间序列', '机器学习'],
    learners: 987,
    rating: 4.9,
    duration: '8小时',
    skills: ['特征工程', '用户行为分析', '时间序列', 'Python'],
    chapters: [
      { id: 1, title: '用户行为数据理解', duration: '1小时' },
      { id: 2, title: '时间特征提取', duration: '1.5小时' },
      { id: 3, title: '行为特征构建', duration: '1.5小时' },
      { id: 4, title: '统计特征计算', duration: '1.5小时' },
      { id: 5, title: '特征选择与优化', duration: '1.5小时' },
      { id: 6, title: '特征存储与使用', duration: '1小时' }
    ],
    resources: ['用户行为日志样本', '特征工程工具', '参考论文'],
    learningObjectives: [
      '理解用户行为数据的特点',
      '掌握常见的特征提取方法',
      '学会时间序列特征工程',
      '能够构建有效的机器学习特征'
    ]
  }
};

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData[parseInt(id)] || projectsData[1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* 项目头部 */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-green-400 hover:text-green-300 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回项目列表</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                  {project.icon}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {project.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {project.learners} 学习者
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  {project.rating} 评分
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.difficulty === '高级' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                  project.difficulty === '中级' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                  'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                }`}>
                  {project.difficulty}
                </span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all mb-4 flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" />
                开始项目
              </button>
              <div className="flex items-center justify-center gap-4 text-sm">
                <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                  分享
                </button>
                <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <BookOpen className="w-4 h-4" />
                  收藏
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 主内容区 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 项目章节 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                项目章节
              </h2>
              <div className="space-y-3">
                {project.chapters.map((chapter, index) => (
                  <div key={chapter.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
                        index === 0 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{chapter.title}</div>
                        <div className="text-sm text-gray-500">{chapter.duration}</div>
                      </div>
                    </div>
                    {index === 0 ? (
                      <PlayCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <div className="text-gray-400">🔒</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 学习目标 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                学习目标
              </h2>
              <div className="space-y-3">
                {project.learningObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 技能标签 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-green-600" />
                你将学到的技能
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 项目资源 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-green-600" />
                项目资源
              </h3>
              <div className="space-y-3">
                {project.resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-green-600" />
                      <span className="text-gray-900">{resource}</span>
                    </div>
                    <Download className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* 相关课程 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">相关课程</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="text-lg mb-1">🐍 Python基础</div>
                  <div className="text-sm text-gray-600">打好编程基础</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="text-lg mb-1">📊 数据分析技术</div>
                  <div className="text-sm text-gray-600">掌握数据分析技能</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
