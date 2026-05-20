import { Link } from 'react-router-dom';
import { ArrowLeft, Database, LineChart, ShoppingCart, Target, Users, Star, Clock, CheckCircle, BookOpen, BarChart3, Code, Globe, FileText } from 'lucide-react';
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
    icon: <BarChart3 className="w-10 h-10" />,
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
    icon: <LineChart className="w-10 h-10" />,
    difficulty: '高级',
    tags: ['时间序列', '金融分析', '趋势预测', '技术分析'],
    learners: 654,
    rating: 4.8,
    duration: '8小时',
    level: '高级',
    skills: ['时间序列', '金融数据', '趋势分析', '预测模型']
  },
  {
    id: 7,
    title: 'Python爬虫实战：新闻网站数据采集',
    description: '学习使用Requests和BeautifulSoup爬取新闻网站数据。掌握网页解析、数据提取和存储的完整流程。',
    icon: <Globe className="w-10 h-10" />,
    difficulty: '初级',
    tags: ['爬虫', 'Requests', 'BeautifulSoup', '数据采集'],
    learners: 1823,
    rating: 4.7,
    duration: '5小时',
    level: '初级',
    skills: ['Requests', 'BeautifulSoup', '爬虫', '数据存储']
  },
  {
    id: 8,
    title: 'SQL数据库查询与优化',
    description: '深入学习SQL查询语句，掌握复杂查询、子查询和窗口函数的使用。学习数据库性能优化技巧，提升查询效率。',
    icon: <Database className="w-10 h-10" />,
    difficulty: '中级',
    tags: ['SQL', '数据库', '查询优化', '窗口函数'],
    learners: 1356,
    rating: 4.8,
    duration: '6小时',
    level: '中级',
    skills: ['SQL', 'MySQL', '查询优化', '数据库设计']
  },
  {
    id: 9,
    title: '数据报告撰写与汇报技巧',
    description: '学习如何撰写专业的数据报告，掌握数据故事化表达技巧。提升数据汇报能力，让你的分析结果更有说服力。',
    icon: <FileText className="w-10 h-10" />,
    difficulty: '初级',
    tags: ['数据报告', '汇报技巧', '数据叙事', 'PPT制作'],
    learners: 1123,
    rating: 4.5,
    duration: '4小时',
    level: '初级',
    skills: ['报告撰写', '数据叙事', '可视化汇报', '演讲技巧']
  },
  {
    id: 10,
    title: '机器学习算法实战：鸢尾花分类',
    description: '使用Scikit-learn实现经典机器学习算法，完成鸢尾花数据集的分类任务。学习数据预处理、模型训练和评估的完整流程。',
    icon: <Code className="w-10 h-10" />,
    difficulty: '中级',
    tags: ['机器学习', 'Scikit-learn', '分类算法', '模型评估'],
    learners: 987,
    rating: 4.8,
    duration: '7小时',
    level: '中级',
    skills: ['Scikit-learn', '机器学习', '分类', '特征工程']
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
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
            <div className="text-3xl md:text-4xl font-bold">10</div>
            <div className="text-green-100 mt-1">实战项目</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-green-600">10,000+</div>
            <div className="text-gray-600 mt-1">学员参与</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-green-600">4.7</div>
            <div className="text-gray-600 mt-1">平均评分</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-green-600">57小时</div>
            <div className="text-gray-600 mt-1">总课时</div>
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
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-green-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className={`p-6 ${
                project.level === '高级' ? 'bg-gradient-to-br from-purple-500 to-purple-700' :
                project.level === '中级' ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                'bg-gradient-to-br from-blue-500 to-cyan-600'
              }`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{project.icon}</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.level === '高级' ? 'bg-purple-100 text-purple-700' :
                    project.level === '中级' ? 'bg-green-100 text-green-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {project.level}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.learners.toLocaleString()} 人</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{project.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium group-hover:bg-green-100 transition-colors">
                      {tag}
                    </span>
                  ))}
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
