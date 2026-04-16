import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowLeft, ChevronDown, ChevronUp, BookOpen, GraduationCap, Briefcase, Database, BarChart3, Network } from 'lucide-react';
import { useState } from 'react';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});

  const toggleChapter = (chapter: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapter]: !prev[chapter]
    }));
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">课程未找到</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  // 根据课程类型选择不同的图标
  let CourseIcon = BookOpen;
  if (course.id === 'python-basics') CourseIcon = GraduationCap;
  if (course.id === 'data-analysis') CourseIcon = BarChart3;
  if (course.id === 'data-collection') CourseIcon = Network;
  if (course.id === 'supply-chain') CourseIcon = Briefcase;
  if (course.id === 'database-principles') CourseIcon = Database;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-indigo-300 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">返回首页</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6">
              <CourseIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">{course.description}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">课程内容</h2>
          
          {course.id === 'data-analysis' ? (
            <div className="space-y-8">
              {/* 课程目标 */}
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程目标</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    掌握数据分析的基本概念和方法
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    熟练使用 Pandas、NumPy 等数据分析库
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    学习数据可视化技术，使用 Matplotlib、Seaborn 等工具
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    掌握统计分析方法在商务决策中的应用
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    培养数据分析思维和解决实际商务问题的能力
                  </li>
                </ul>
              </div>

              {/* 课程大纲 */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程大纲</h3>
                
                <div className="space-y-6">
                  {/* 第1章 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => toggleChapter('chapter1')}
                    >
                      <h4 className="font-bold text-gray-800">第1章：数据分析概述</h4>
                      {expandedChapters['chapter1'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    <div className="p-4">
                      <ul className="pl-6 space-y-1 text-gray-600 list-disc mb-4">
                        <li>数据分析的定义和重要性</li>
                        <li>数据分析的流程和方法</li>
                        <li>数据分析在商务领域的应用</li>
                      </ul>
                      
                      {expandedChapters['chapter1'] && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-gray-800 mb-3">练习题</h5>
                          <ol className="pl-5 space-y-2 text-gray-600 list-decimal">
                            <li>请简述数据分析的定义和重要性。</li>
                            <li>描述数据分析的基本流程。</li>
                            <li>举例说明数据分析在商务决策中的应用场景。</li>
                            <li>你认为一个好的数据分析报告应该包含哪些内容？</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* 第2章 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => toggleChapter('chapter2')}
                    >
                      <h4 className="font-bold text-gray-800">第2章：NumPy 基础</h4>
                      {expandedChapters['chapter2'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    <div className="p-4">
                      <ul className="pl-6 space-y-1 text-gray-600 list-disc mb-4">
                        <li>NumPy 数组的创建和操作</li>
                        <li>数组的索引和切片</li>
                        <li>NumPy 的数学运算</li>
                        <li>广播机制</li>
                      </ul>
                      
                      {expandedChapters['chapter2'] && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-gray-800 mb-3">练习题</h5>
                          <ol className="pl-5 space-y-2 text-gray-600 list-decimal">
                            <li>创建一个形状为 (3, 4) 的 NumPy 数组，并填充随机值。</li>
                            <li>使用索引和切片操作获取数组的特定元素。</li>
                            <li>实现两个数组的加法、乘法运算。</li>
                            <li>解释 NumPy 的广播机制，并举例说明。</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* 第3章 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => toggleChapter('chapter3')}
                    >
                      <h4 className="font-bold text-gray-800">第3章：Pandas 数据处理</h4>
                      {expandedChapters['chapter3'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    <div className="p-4">
                      <ul className="pl-6 space-y-1 text-gray-600 list-disc mb-4">
                        <li>Series 和 DataFrame 的创建</li>
                        <li>数据的读取和写入</li>
                        <li>数据清洗和预处理</li>
                        <li>数据分组和聚合</li>
                        <li>数据合并和连接</li>
                      </ul>
                      
                      {expandedChapters['chapter3'] && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-gray-800 mb-3">练习题</h5>
                          <ol className="pl-5 space-y-2 text-gray-600 list-decimal">
                            <li>创建一个包含学生信息的 DataFrame，包括姓名、年龄、成绩等字段。</li>
                            <li>从 CSV 文件读取数据，并进行基本的数据清洗。</li>
                            <li>使用 groupby 对数据进行分组统计。</li>
                            <li>实现两个 DataFrame 的合并操作。</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* 第4章 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => toggleChapter('chapter4')}
                    >
                      <h4 className="font-bold text-gray-800">第4章：数据可视化</h4>
                      {expandedChapters['chapter4'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    <div className="p-4">
                      <ul className="pl-6 space-y-1 text-gray-600 list-disc mb-4">
                        <li>Matplotlib 基础</li>
                        <li>折线图、柱状图、散点图等基本图表</li>
                        <li>Seaborn 高级可视化</li>
                        <li>交互式可视化工具介绍</li>
                      </ul>
                      
                      {expandedChapters['chapter4'] && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-gray-800 mb-3">练习题</h5>
                          <ol className="pl-5 space-y-2 text-gray-600 list-decimal">
                            <li>使用 Matplotlib 创建一个折线图，展示月度销售数据。</li>
                            <li>使用 Seaborn 创建一个热力图，展示相关性矩阵。</li>
                            <li>为图表添加标题、坐标轴标签和图例。</li>
                            <li>尝试使用交互式可视化库创建一个可交互的图表。</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* 第5章 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => toggleChapter('chapter5')}
                    >
                      <h4 className="font-bold text-gray-800">第5章：统计分析方法</h4>
                      {expandedChapters['chapter5'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    <div className="p-4">
                      <ul className="pl-6 space-y-1 text-gray-600 list-disc mb-4">
                        <li>描述性统计分析</li>
                        <li>假设检验</li>
                        <li>相关分析和回归分析</li>
                        <li>聚类分析</li>
                      </ul>
                      
                      {expandedChapters['chapter5'] && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-gray-800 mb-3">练习题</h5>
                          <ol className="pl-5 space-y-2 text-gray-600 list-decimal">
                            <li>计算一组数据的均值、中位数、标准差等描述性统计量。</li>
                            <li>使用 t 检验进行假设检验。</li>
                            <li>计算两个变量之间的相关系数，并解释结果。</li>
                            <li>使用 K-means 算法对数据进行聚类分析。</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* 第6章 */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => toggleChapter('chapter6')}
                    >
                      <h4 className="font-bold text-gray-800">第6章：商务数据分析案例</h4>
                      {expandedChapters['chapter6'] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    <div className="p-4">
                      <ul className="pl-6 space-y-1 text-gray-600 list-disc mb-4">
                        <li>销售数据分析</li>
                        <li>客户行为分析</li>
                        <li>市场趋势分析</li>
                        <li>供应链数据分析</li>
                      </ul>
                      
                      {expandedChapters['chapter6'] && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h5 className="font-semibold text-gray-800 mb-3">练习题</h5>
                          <ol className="pl-5 space-y-2 text-gray-600 list-decimal">
                            <li>分析销售数据，找出销售趋势和季节性模式。</li>
                            <li>基于客户购买行为，进行客户分群分析。</li>
                            <li>分析市场数据，预测未来市场趋势。</li>
                            <li>分析供应链数据，找出优化供应链的机会。</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 学习方法 */}
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">学习方法</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    理论学习与实践相结合，每章都有相应的实践练习
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    利用 Jupyter Notebook 进行代码练习和实验
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    小组合作完成数据分析项目
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    定期进行案例分析和讨论
                  </li>
                </ul>
              </div>

              {/* 评估方式 */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">评估方式</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    平时作业：30%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    实验报告：20%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    小组项目：30%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    期末考试：20%
                  </li>
                </ul>
              </div>

              {/* 参考资料 */}
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">参考资料</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    《Python数据分析》，Wes McKinney，机械工业出版社
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    《利用Python进行数据分析》，Wes McKinney，人民邮电出版社
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    《Python数据可视化》，Kirthi Raman，人民邮电出版社
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    在线资源：Pandas官方文档、Matplotlib官方文档
                  </li>
                </ul>
              </div>
            </div>
          ) : course.id === 'python-basics' ? (
            <div className="space-y-8">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程目标</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    掌握 Python 编程语言的核心概念
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    熟练运用 Python 基础语法和数据结构
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    具备 Python 编程的基本能力
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程大纲</h3>
                <ul className="pl-6 space-y-2 text-gray-600 list-disc">
                  <li>Python 环境搭建和基础语法</li>
                  <li>变量、数据类型和运算符</li>
                  <li>控制流（条件语句、循环语句）</li>
                  <li>函数和模块</li>
                  <li>列表、字典、元组等数据结构</li>
                  <li>文件操作</li>
                </ul>
              </div>
            </div>
          ) : course.id === 'data-collection' ? (
            <div className="space-y-8">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程目标</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    掌握网络爬虫的基本原理和方法
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    学会使用 Python 进行网络数据采集
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    掌握数据清洗和预处理的基本方法
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程大纲</h3>
                <ul className="pl-6 space-y-2 text-gray-600 list-disc">
                  <li>HTML 和 CSS 基础</li>
                  <li>requests 库的使用</li>
                  <li>BeautifulSoup 网页解析</li>
                  <li>API 数据获取</li>
                  <li>数据清洗和预处理</li>
                  <li>数据存储（CSV、JSON、数据库）</li>
                </ul>
              </div>
            </div>
          ) : course.id === 'supply-chain' ? (
            <div className="space-y-8">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程目标</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    了解供应链管理的基本概念
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    掌握供应链数据分析的方法和工具
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    能够运用数据分析优化供应链运营
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程大纲</h3>
                <ul className="pl-6 space-y-2 text-gray-600 list-disc">
                  <li>供应链管理概述</li>
                  <li>供应链数据来源和指标</li>
                  <li>库存分析与优化</li>
                  <li>需求预测方法</li>
                  <li>供应商评估与选择</li>
                  <li>供应链可视化</li>
                </ul>
              </div>
            </div>
          ) : course.id === 'database-principles' ? (
            <div className="space-y-8">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程目标</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    理解数据库系统的基本原理
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    掌握关系型数据库的设计方法
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    熟练使用 SQL 语言进行数据操作
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">课程大纲</h3>
                <ul className="pl-6 space-y-2 text-gray-600 list-disc">
                  <li>数据库系统概述</li>
                  <li>关系模型和关系代数</li>
                  <li>SQL 基础（查询、插入、更新、删除）</li>
                  <li>数据库设计（ER 图、规范化）</li>
                  <li>索引和视图</li>
                  <li>事务和并发控制</li>
                </ul>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}
