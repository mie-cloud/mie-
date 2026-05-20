import { Link } from 'react-router-dom';
import { ArrowLeft, Database, LineChart, ShoppingCart, Target, Users, Star, Clock, CheckCircle, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  {
    id: 1,
    title: '零售业销售数据清洗与异常值修复',
    description: '处理真实零售数据，学习数据清洗技术，修复异常值和缺失值。通过这个项目，你将学会使用Pandas进行数据清洗、处理缺失值、检测异常值等关键技能。',
    icon: <Database className="w-10 h-10" />,
    difficulty: '中级',
    tags: ['数据清洗', 'Pandas', '异常检测', '数据预处理'],
    learners: 1234,
    rating: 4.8,
    duration: '6小时',
    level: '中级',
    skills: ['Pandas', 'NumPy', '数据清洗', '异常检测']
  },
  {
    id: 2,
    title: '电商平台用户行为日志特征工程',
    description: '分析用户行为数据，提取有价值的特征用于机器学习模型。学习如何从原始日志数据中提取有意义的特征，为后续的机器学习建模做准备。',
    icon: <LineChart className="w-10 h-10" />,
    difficulty: '高级',
    tags: ['特征工程', '用户行为', '时间序列', '机器学习'],
    learners: 987,
    rating: 4.9,
    duration: '8小时',
    level: '高级',
    skills: ['特征工程', '用户行为分析', '时间序列', 'Python']
  },
  {
    id: 3,
    title: '超市购物篮关联规则挖掘',
    description: '使用Apriori算法挖掘商品间的关联规则，优化商品陈列。通过真实的购物篮数据，学习关联规则挖掘的原理和实现方法。',
    icon: <ShoppingCart className="w-10 h-10" />,
    difficulty: '中级',
    tags: ['关联规则', '市场篮分析', '推荐系统', 'Apriori'],
    learners: 876,
    rating: 4.7,
    duration: '5小时',
    level: '中级',
    skills: ['关联规则', 'Apriori', '数据挖掘', '推荐系统']
  },
  {
    id: 4,
    title: '客户流失预测模型构建',
    description: '构建机器学习模型预测客户流失，帮助企业提前干预。学习如何使用分类算法预测客户流失，并评估模型性能。',
    icon: <Target className="w-10 h-10" />,
    difficulty: '高级',
    tags: ['分类', '预测', '机器学习', '客户分析'],
    learners: 765,
    rating: 4.9,
    duration: '10小时',
    level: '高级',
    skills: ['机器学习', '分类算法', '模型评估', '特征选择']
  },
  {
    id: 5,
    title: '销售数据可视化报表制作',
    description: '使用Matplotlib和Seaborn创建专业的数据可视化报表。学习如何将数据转化为直观的图表，帮助业务人员快速理解数据。',
    icon: <LineChart className="w-10 h-10" />,
    difficulty: '初级',
    tags: ['数据可视化', 'Matplotlib', 'Seaborn', '报表制作'],
    learners: 1543,
    rating: 4.6,
    duration: '4小时',
    level: '初级',
    skills: ['Matplotlib', 'Seaborn', '数据可视化', '报表设计']
  },
  {
    id: 6,
    title: '股票数据分析与趋势预测',
    description: '分析股票历史数据，使用时间序列分析进行趋势预测。学习如何获取金融数据，进行技术分析，并构建预测模型。',
    icon: <Target className="w-10 h-10" />,
    difficulty: '高级',
    tags: ['时间序列', '金融分析', '趋势预测', '技术分析'],
    learners: 654,
    rating: 4.8,
    duration: '8小时',
    level: '高级',
    skills: ['时间序列', '金融数据', '趋势分析', '预测模型']
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link
              to="/"
              className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>返回首页</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">训练项目</h1>
            <p className="text-gray-600 mt-2">探索各种实战项目，提升你的数据分析技能</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
            创建新项目
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600">6</div>
            <div className="text-gray-600">实战项目</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600">5,000+</div>
            <div className="text-gray-600">学员参与</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600">4.8</div>
            <div className="text-gray-600">平均评分</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600">41小时</div>
            <div className="text-gray-600">总课时</div>
          </div>
        </div>
        
        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="px-4 py-2 bg-green-600 text-white rounded-full font-medium">全部</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">初级</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">中级</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200">高级</button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-xl p-4 mb-4 ${
                  project.level === '高级' ? 'bg-purple-100 text-purple-600' :
                  project.level === '中级' ? 'bg-green-100 text-green-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {project.learners}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                    {project.rating}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {project.duration}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  project.level === '高级' ? 'bg-purple-100 text-purple-700' :
                  project.level === '中级' ? 'bg-green-100 text-green-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {project.level}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
