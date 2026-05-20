import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { BookOpen, GraduationCap, Sparkles, BarChart3, Target, TrendingUp, Users, Star, ArrowRight, CheckCircle, Code, Database, LineChart, ShoppingCart, Award, MessageCircle, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const trainingProjects = [
  {
    id: 1,
    title: '零售业销售数据清洗与异常值修复',
    description: '处理真实零售数据，学习数据清洗技术，修复异常值和缺失值',
    icon: <Database className="w-8 h-8" />,
    difficulty: '中级',
    tags: ['数据清洗', 'Pandas', '异常检测'],
    learners: 1234
  },
  {
    id: 2,
    title: '电商平台用户行为日志特征工程',
    description: '分析用户行为数据，提取有价值的特征用于机器学习模型',
    icon: <LineChart className="w-8 h-8" />,
    difficulty: '高级',
    tags: ['特征工程', '用户行为', '时间序列'],
    learners: 987
  },
  {
    id: 3,
    title: '超市购物篮关联规则挖掘',
    description: '使用Apriori算法挖掘商品间的关联规则，优化商品陈列',
    icon: <ShoppingCart className="w-8 h-8" />,
    difficulty: '中级',
    tags: ['关联规则', '市场篮分析', '推荐系统'],
    learners: 876
  },
  {
    id: 4,
    title: '客户流失预测模型构建',
    description: '构建机器学习模型预测客户流失，帮助企业提前干预',
    icon: <Target className="w-8 h-8" />,
    difficulty: '高级',
    tags: ['分类', '预测', '机器学习'],
    learners: 765
  }
];

const testimonials = [
  {
    id: 1,
    name: '李明',
    role: '数据分析师',
    avatar: '李',
    content: '通过DataLearn的课程，我成功转型为数据分析师，现在在一家科技公司工作！',
    rating: 5
  },
  {
    id: 2,
    name: '王芳',
    role: '大三学生',
    avatar: '王',
    content: '课程内容非常实用，项目实战让我在面试中脱颖而出，拿到了心仪的实习offer！',
    rating: 5
  },
  {
    id: 3,
    name: '张伟',
    role: '产品经理',
    avatar: '张',
    content: '作为产品经理，学习数据分析让我更好地理解用户行为，做出更明智的产品决策。',
    rating: 5
  }
];

const learningPaths = [
  {
    id: 1,
    number: '01',
    title: 'Python基础',
    description: '掌握Python编程基础',
    icon: '🐍',
    active: true
  },
  {
    id: 2,
    number: '02',
    title: '数据分析',
    description: '使用Pandas处理数据',
    icon: '📊',
    active: false
  },
  {
    id: 3,
    number: '03',
    title: '数据可视化',
    description: '创建专业图表',
    icon: '📈',
    active: false
  },
  {
    id: 4,
    number: '04',
    title: '实战项目',
    description: '综合技能提升',
    icon: '🎯',
    active: false
  }
];

const skills = [
  { icon: '🐍', name: 'Python编程', desc: '掌握Python基础语法和常用库' },
  { icon: '📊', name: '数据分析', desc: '熟练使用Pandas、NumPy等工具' },
  { icon: '🕸️', name: '数据采集', desc: '掌握网络爬虫和API数据获取' },
  { icon: '🗄️', name: '数据库', desc: '掌握SQL和关系型数据库' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navbar />
      
      {/* Hero Section - Personal Introduction First */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500 rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Personal Avatar */}
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-8 shadow-2xl border-4 border-white/20">
              <span className="text-6xl">🐑</span>
            </div>
            
            {/* Personal Introduction */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              许小烁
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              广东科学技术学院 · 商学院
            </p>
            <p className="text-lg text-green-400 font-medium mb-8">
              商务数据分析与应用专业
            </p>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              👋 嗨！我是许小烁，一个对数据充满好奇的大二学生。
              我的专业是商务数据分析与应用，简单来说就是用数据讲故事的魔法师！
              我每天和Python打交道，喜欢从混乱的数据中找出隐藏的规律。
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/course/python-basics" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center">
                开始学习
              </Link>
              <Link to="/community" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all inline-flex items-center justify-center">
                加入社区
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
                <div className="text-gray-400">精品课程</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-gray-400">练习题</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                <div className="text-gray-400">好评率</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-gray-400">学习项目</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Display */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">技能展示</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-600">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Learning Paths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">学习路径</h2>
            <p className="text-gray-600 text-lg">循序渐进，从入门到精通</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {learningPaths.map((path) => (
              <Link
                key={path.id}
                to={path.id === 1 ? "/course/python-basics" : "#"}
                className={`p-8 rounded-2xl cursor-pointer transition-all relative ${
                  path.active
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {path.active && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-green-500 rotate-45"></div>
                  </div>
                )}
                <div className="text-5xl mb-4">{path.icon}</div>
                <div className={`text-4xl font-bold mb-2 ${path.active ? 'text-white/30' : 'text-gray-400'}`}>
                  {path.number}
                </div>
                <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                <p className={path.active ? 'text-white/80' : 'text-gray-600'}>
                  {path.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Training Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">热门训练项目</h2>
              <p className="text-gray-600">点击项目开始学习和练习</p>
            </div>
            <Link to="/projects" className="flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors">
              查看全部
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-xl ${
                    project.difficulty === '高级' 
                      ? 'bg-purple-100 text-purple-600' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.difficulty === '高级' 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  {project.learners} 人已学习
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">学员评价</h2>
            <p className="text-gray-600 text-lg">看看他们是如何通过学习改变职业轨迹的</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">我的课程</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-400 p-8 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
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
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            准备好开始你的数据学习之旅了吗？
          </h2>
          <p className="text-xl text-green-100 mb-8">
            加入我们，和10,000+学员一起学习，开启你的数据分析职业道路
          </p>
          <Link to="/course/python-basics" className="inline-block bg-white text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
            立即开始
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
