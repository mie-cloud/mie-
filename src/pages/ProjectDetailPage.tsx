import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Database, LineChart, ShoppingCart, Target, Users, Star, Award, CheckCircle, PlayCircle, Download, BookOpen, Code, ChevronDown, ChevronRight, Copy, Check, Terminal, XCircle, AlertCircle, Globe, FileText, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projectsData: Record<number, any> = {
  1: {
    id: 1,
    title: '零售业销售数据清洗与异常值修复',
    description: '处理真实零售数据，学习数据清洗技术，修复异常值和缺失值。',
    icon: <Database className="w-10 h-10" />,
    difficulty: '中级',
    tags: ['数据清洗', 'Pandas', '异常检测'],
    learners: 1234,
    rating: 4.8,
    duration: '6小时',
    skills: ['Pandas', 'NumPy', '数据清洗'],
    chapters: [
      {
        id: 1,
        title: '项目概述与数据理解',
        duration: '30分钟',
        content: ['项目背景介绍', '数据来源和格式说明', '初步探索数据'],
        exercises: [
          {
            type: 'code',
            question: '导入Pandas并读取销售数据文件',
            codeTemplate: 'import pandas as pd\n\ndf = pd.read_csv("sales_data.csv")\nprint("数据形状:", df.shape)\nprint(df.head())'
          }
        ]
      },
      {
        id: 2,
        title: '缺失值处理',
        duration: '1小时',
        content: ['缺失值检测方法', '缺失值处理策略', '使用fillna()填充'],
        exercises: [
          {
            type: 'code',
            question: '统计并处理缺失值',
            codeTemplate: 'missing_counts = df.isnull().sum()\nprint("缺失值数量:", missing_counts)\ndf = df.fillna(df.mean())'
          }
        ]
      },
      {
        id: 3,
        title: '异常值检测与处理',
        duration: '1.5小时',
        content: ['IQR方法检测异常值', 'Z-score方法', '异常值处理策略'],
        exercises: [
          {
            type: 'code',
            question: '使用IQR方法检测异常值',
            codeTemplate: 'Q1 = df["sales"].quantile(0.25)\nQ3 = df["sales"].quantile(0.75)\nIQR = Q3 - Q1\noutliers = (df["sales"] < Q1-1.5*IQR) | (df["sales"] > Q3+1.5*IQR)\nprint(f"检测到 {outliers.sum()} 个异常值")'
          }
        ]
      }
    ]
  },
  2: {
    id: 2,
    title: '电商平台用户行为日志特征工程',
    description: '分析用户行为数据，提取有价值的特征用于机器学习模型。',
    icon: <LineChart className="w-10 h-10" />,
    difficulty: '高级',
    tags: ['特征工程', '用户行为', '机器学习'],
    learners: 987,
    rating: 4.9,
    duration: '8小时',
    skills: ['特征工程', '用户行为分析'],
    chapters: [
      {
        id: 1,
        title: '用户行为日志数据探索',
        duration: '1小时',
        content: ['用户行为数据类型', '日志数据结构', '数据统计分析'],
        exercises: [
          {
            type: 'code',
            question: '加载并探索用户行为数据',
            codeTemplate: 'import pandas as pd\ndf = pd.read_csv("user_behavior.csv")\nprint(df.info())\nprint(df["behavior_type"].value_counts())'
          }
        ]
      },
      {
        id: 2,
        title: '用户基础特征提取',
        duration: '1.5小时',
        content: ['用户活跃度特征', '行为频次统计', '时间分布特征'],
        exercises: [
          {
            type: 'code',
            question: '提取用户基础统计特征',
            codeTemplate: 'user_features = df.groupby("user_id").agg({"behavior_type": "count", "item_id": "nunique"})\nprint(user_features.head())'
          }
        ]
      }
    ]
  },
  3: {
    id: 3,
    title: '超市购物篮关联规则挖掘',
    description: '使用Apriori算法挖掘商品间的关联规则，优化商品陈列。',
    icon: <ShoppingCart className="w-10 h-10" />,
    difficulty: '中级',
    tags: ['关联规则', '市场篮分析', 'Apriori'],
    learners: 876,
    rating: 4.7,
    duration: '5小时',
    skills: ['关联规则', 'Apriori', '数据挖掘'],
    chapters: [
      {
        id: 1,
        title: '购物篮数据理解',
        duration: '1小时',
        content: ['购物篮数据格式', '商品分类体系', '数据预处理'],
        exercises: [
          {
            type: 'code',
            question: '加载并探索购物篮数据',
            codeTemplate: 'import pandas as pd\ndf = pd.read_csv("market_basket.csv")\nprint(df.head())\nprint("订单数:", df["order_id"].nunique())'
          }
        ]
      },
      {
        id: 2,
        title: '关联规则挖掘',
        duration: '2小时',
        content: ['Apriori算法原理', '支持度、置信度、提升度', '规则生成'],
        exercises: [
          {
            type: 'code',
            question: '计算商品两两共现',
            codeTemplate: 'from itertools import combinations\npair_counts = {}\nfor basket in transactions:\n    for pair in combinations(basket, 2):\n        pair_counts[pair] = pair_counts.get(pair, 0) + 1\nprint("高频商品组合:", sorted(pair_counts.items(), key=lambda x: x[1], reverse=True)[:10])'
          }
        ]
      }
    ]
  },
  4: {
    id: 4,
    title: '客户流失预测模型构建',
    description: '构建机器学习模型预测客户流失，帮助企业提前干预。',
    icon: <Target className="w-10 h-10" />,
    difficulty: '高级',
    tags: ['分类', '预测', '机器学习'],
    learners: 765,
    rating: 4.9,
    duration: '10小时',
    skills: ['机器学习', '分类算法'],
    chapters: [
      {
        id: 1,
        title: '客户数据理解与探索',
        duration: '1.5小时',
        content: ['客户数据字段含义', '流失标签定义', '探索性数据分析'],
        exercises: [
          {
            type: 'code',
            question: '加载并探索客户数据',
            codeTemplate: 'import pandas as pd\ndf = pd.read_csv("customer_churn.csv")\nprint(df["churn"].value_counts())\nprint(f"流失率: {df["churn"].mean()*100:.2f}%")'
          }
        ]
      },
      {
        id: 2,
        title: '特征工程',
        duration: '2小时',
        content: ['特征分类', '缺失值处理', '类别变量编码'],
        exercises: [
          {
            type: 'code',
            question: '数据预处理',
            codeTemplate: 'X = df.drop("churn", axis=1)\ny = df["churn"]\nnumeric_cols = X.select_dtypes(include=["int64", "float64"]).columns\nprint(f"数值特征: {numeric_cols.tolist()}")'
          }
        ]
      }
    ]
  },
  5: {
    id: 5,
    title: '销售数据可视化报表制作',
    description: '使用Matplotlib和Seaborn创建专业的数据可视化报表。',
    icon: <BarChart3 className="w-10 h-10" />,
    difficulty: '初级',
    tags: ['数据可视化', 'Matplotlib', 'Seaborn'],
    learners: 1543,
    rating: 4.6,
    duration: '4小时',
    skills: ['Matplotlib', 'Seaborn', '数据可视化'],
    chapters: [
      {
        id: 1,
        title: '数据可视化基础',
        duration: '1小时',
        content: ['可视化的重要性', '图表类型选择', 'Matplotlib基础'],
        exercises: [
          {
            type: 'code',
            question: '创建基础折线图',
            codeTemplate: 'import matplotlib.pyplot as plt\nplt.figure(figsize=(10, 6))\nplt.plot(data["month"], data["sales"], marker="o")\nplt.title("月度销售额趋势")\nplt.show()'
          }
        ]
      },
      {
        id: 2,
        title: '常用图表类型',
        duration: '1.5小时',
        content: ['柱状图和条形图', '饼图和环形图', '散点图'],
        exercises: [
          {
            type: 'code',
            question: '创建柱状图',
            codeTemplate: 'plt.bar(data["month"], data["sales"], color="#4CAF50")\nplt.title("各月销售额对比")\nplt.xlabel("月份")\nplt.ylabel("销售额")\nplt.show()'
          }
        ]
      }
    ]
  },
  6: {
    id: 6,
    title: '股票数据分析与趋势预测',
    description: '分析股票历史数据，使用时间序列分析进行趋势预测。',
    icon: <LineChart className="w-10 h-10" />,
    difficulty: '高级',
    tags: ['时间序列', '金融分析', '趋势预测'],
    learners: 654,
    rating: 4.8,
    duration: '8小时',
    skills: ['时间序列', '金融数据'],
    chapters: [
      {
        id: 1,
        title: '股票数据获取与探索',
        duration: '1.5小时',
        content: ['股票数据来源', 'OHLCV数据格式', '收益率计算'],
        exercises: [
          {
            type: 'code',
            question: '加载并探索股票数据',
            codeTemplate: 'import pandas as pd\ndf = pd.read_csv("stock_data.csv")\nprint(df.head())\ndf["Daily_Return"] = df["Close"].pct_change()\nprint(f"总收益率: {(df["Close"].iloc[-1]/df["Close"].iloc[0]-1)*100:.2f}%")'
          }
        ]
      },
      {
        id: 2,
        title: '技术分析指标',
        duration: '2小时',
        content: ['移动平均线', 'RSI指标', 'MACD指标'],
        exercises: [
          {
            type: 'code',
            question: '计算移动平均线',
            codeTemplate: 'df["MA5"] = df["Close"].rolling(window=5).mean()\ndf["MA20"] = df["Close"].rolling(window=20).mean()\nprint(df[["Close", "MA5", "MA20"]].tail())'
          }
        ]
      }
    ]
  },
  7: {
    id: 7,
    title: 'Python爬虫实战：新闻网站数据采集',
    description: '学习使用Requests和BeautifulSoup爬取新闻网站数据。',
    icon: <Globe className="w-10 h-10" />,
    difficulty: '初级',
    tags: ['爬虫', 'Requests', 'BeautifulSoup'],
    learners: 1823,
    rating: 4.7,
    duration: '5小时',
    skills: ['Requests', 'BeautifulSoup', '爬虫'],
    chapters: [
      {
        id: 1,
        title: '爬虫基础与HTTP协议',
        duration: '1小时',
        content: ['网络爬虫原理', 'HTTP协议基础', 'Requests库介绍'],
        exercises: [
          {
            type: 'code',
            question: 'Requests基础使用',
            codeTemplate: 'import requests\nfrom bs4 import BeautifulSoup\n\nheaders = {"User-Agent": "Mozilla/5.0"}\nresponse = requests.get(url, headers=headers, timeout=10)\nprint(f"状态码: {response.status_code}")'
          }
        ]
      },
      {
        id: 2,
        title: 'BeautifulSoup解析HTML',
        duration: '1.5小时',
        content: ['HTML标签和属性', 'CSS选择器', '数据提取技巧'],
        exercises: [
          {
            type: 'code',
            question: '解析HTML提取数据',
            codeTemplate: 'soup = BeautifulSoup(html, "html.parser")\nnews_items = soup.find_all("div", class_="news-item")\nfor item in news_items:\n    title = item.find("h2").text\n    print(title)'
          }
        ]
      }
    ]
  },
  8: {
    id: 8,
    title: 'SQL数据库查询与优化',
    description: '深入学习SQL查询语句，掌握复杂查询、子查询和窗口函数。',
    icon: <Database className="w-10 h-10" />,
    difficulty: '中级',
    tags: ['SQL', '数据库', '查询优化'],
    learners: 1356,
    rating: 4.8,
    duration: '6小时',
    skills: ['SQL', 'MySQL', '查询优化'],
    chapters: [
      {
        id: 1,
        title: 'SQL基础回顾',
        duration: '1小时',
        content: ['基本SELECT查询', 'WHERE条件过滤', 'GROUP BY分组'],
        exercises: [
          {
            type: 'code',
            question: '基础SQL查询',
            codeTemplate: 'SELECT * FROM employees WHERE department = "技术部";\n\nSELECT department, COUNT(*) as emp_count, AVG(salary) as avg_salary\nFROM employees GROUP BY department;'
          }
        ]
      },
      {
        id: 2,
        title: '高级查询技巧',
        duration: '1.5小时',
        content: ['子查询', 'CTE公用表表达式', '窗口函数'],
        exercises: [
          {
            type: 'code',
            question: '使用窗口函数',
            codeTemplate: 'SELECT name, salary,\nROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as rank\nFROM employees;'
          }
        ]
      }
    ]
  },
  9: {
    id: 9,
    title: '数据报告撰写与汇报技巧',
    description: '学习如何撰写专业的数据报告，掌握数据故事化表达技巧。',
    icon: <FileText className="w-10 h-10" />,
    difficulty: '初级',
    tags: ['数据报告', '汇报技巧', '数据叙事'],
    learners: 1123,
    rating: 4.5,
    duration: '4小时',
    skills: ['报告撰写', '数据叙事'],
    chapters: [
      {
        id: 1,
        title: '数据报告结构设计',
        duration: '1小时',
        content: ['报告框架搭建', '核心信息提炼', '逻辑顺序安排'],
        exercises: [
          {
            type: 'code',
            question: '报告大纲设计',
            codeTemplate: 'print("数据报告结构:")\nprint("1. 封面页 - 标题、作者、日期")\nprint("2. 摘要 - 核心结论和建议")\nprint("3. 数据分析 - 核心发现")\nprint("4. 结论与建议")'
          }
        ]
      },
      {
        id: 2,
        title: '数据叙事技巧',
        duration: '1.5小时',
        content: ['故事化表达', '冲突-解决模式', '情感连接'],
        exercises: [
          {
            type: 'code',
            question: '数据叙事示例',
            codeTemplate: 'print("【发现问题】销售额下降5%")\nprint("【分析原因】用户反馈不理想")\nprint("【提出方案】优化用户体验")\nprint("【预期效果】销售额恢复增长")'
          }
        ]
      }
    ]
  },
  10: {
    id: 10,
    title: '机器学习算法实战：鸢尾花分类',
    description: '使用Scikit-learn实现经典机器学习算法，完成鸢尾花分类。',
    icon: <Code className="w-10 h-10" />,
    difficulty: '中级',
    tags: ['机器学习', 'Scikit-learn', '分类算法'],
    learners: 987,
    rating: 4.8,
    duration: '7小时',
    skills: ['Scikit-learn', '机器学习', '分类'],
    chapters: [
      {
        id: 1,
        title: '机器学习基础',
        duration: '1.5小时',
        content: ['机器学习基本概念', '监督学习与非监督学习', '工作流程'],
        exercises: [
          {
            type: 'code',
            question: 'Scikit-learn基础',
            codeTemplate: 'from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\n\niris = load_iris()\nX, y = iris.data, iris.target\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)\nprint(f"训练集大小: {X_train.shape}")'
          }
        ]
      },
      {
        id: 2,
        title: '模型训练与评估',
        duration: '2小时',
        content: ['K近邻算法', '逻辑回归', '模型评估指标'],
        exercises: [
          {
            type: 'code',
            question: '训练和评估模型',
            codeTemplate: 'from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.metrics import accuracy_score\n\nmodel = KNeighborsClassifier(n_neighbors=3)\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\nprint(f"准确率: {accuracy_score(y_test, y_pred):.4f}")'
          }
        ]
      }
    ]
  }
};

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData[parseInt(id || "1")] || projectsData[1];
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [userCode, setUserCode] = useState<Record<string, string>>({});
  const [codeOutput, setCodeOutput] = useState<Record<string, string>>({});
  const [codeResult, setCodeResult] = useState<Record<string, "correct" | "wrong" | null>>({});
  const [isRunning, setIsRunning] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const toggleChapter = (chapterId: number) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getExerciseKey = (chapterId: number, exerciseIdx: number) => {
    return `${id}-${chapterId}-${exerciseIdx}`;
  };

  const runCode = (chapterId: number, exerciseIdx: number, exercise: any) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const code = userCode[key] || "";
    
    setIsRunning(prev => ({ ...prev, [key]: true }));
    setCodeResult(prev => ({ ...prev, [key]: null }));
    setCodeOutput(prev => ({ ...prev, [key]: "" }));

    setTimeout(() => {
      let output = "";
      let isCorrect = true;
      let errors: string[] = [];

      try {
        // 基本语法检查
        if (!code || code.trim().length === 0) {
          errors.push("代码不能为空");
          isCorrect = false;
        } else {
          // 检查括号匹配
          const checkBalanced = (open: string, close: string) => {
            let count = 0;
            for (let i = 0; i < code.length; i++) {
              if (code[i] === open) count++;
              if (code[i] === close) count--;
              if (count < 0) return false;
            }
            return count === 0;
          };

          if (!checkBalanced("(", ")")) errors.push("括号()不匹配");
          if (!checkBalanced("{", "}")) errors.push("花括号{}不匹配");
          if (!checkBalanced("[", "]")) errors.push("方括号[]不匹配");
          
          // 检查引号匹配 - 更智能的检测
          let inQuote = null;
          for (let i = 0; i < code.length; i++) {
            const char = code[i];
            if (char === '"' && inQuote === null) {
              inQuote = '"';
            } else if (char === '"' && inQuote === '"') {
              inQuote = null;
            } else if (char === "'" && inQuote === null) {
              inQuote = "'";
            } else if (char === "'" && inQuote === "'") {
              inQuote = null;
            }
          }
          
          if (inQuote === '"') errors.push("双引号\"不匹配（缺少结束引号）");
          if (inQuote === "'") errors.push("单引号'不匹配（缺少结束引号）");

          // 检查与示范代码的匹配度（如果有示范代码）
          if (exercise.codeTemplate) {
            const templateCode = exercise.codeTemplate.trim();
            const userCode = code.trim();
            
            // 计算相似度 - 简单的方法是比较关键字段
            const extractKeywords = (s: string) => s.toLowerCase().replace(/\s+/g, "");
            const templateKeywords = extractKeywords(templateCode);
            const userKeywords = extractKeywords(userCode);
            
            // 检查示范代码中的关键内容是否在用户代码中出现
            let missingCount = 0;
            const keyElements = templateKeywords.slice(0, 50); // 取前50个字符做比较
            for (let i = 0; i < keyElements.length && i < userKeywords.length; i++) {
              if (keyElements[i] !== userKeywords[i]) missingCount++;
            }

            // 如果示范代码有 print，检查用户是否也有
            if (templateCode.toLowerCase().includes("print") && !userCode.toLowerCase().includes("print")) {
              errors.push("缺少 print 语句");
            }

            // 如果有明显错误，标记为不正确
            if (errors.length === 0) {
              // 检查代码是否包含了示范代码的核心逻辑
              const templateLines = templateCode.split("\n").filter(l => l.trim());
              const userLines = userCode.split("\n").filter(l => l.trim());
              let matchCount = 0;
              
              for (let tLine of templateLines) {
                for (let uLine of userLines) {
                  const cleanTL = tLine.toLowerCase().replace(/\s+/g, "");
                  const cleanUL = uLine.toLowerCase().replace(/\s+/g, "");
                  if (cleanUL.includes(cleanTL.slice(0, 10)) || cleanTL.includes(cleanUL.slice(0, 10))) {
                    matchCount++;
                    break;
                  }
                }
              }
              
              if (matchCount < templateLines.length * 0.5) {
                errors.push("代码与示范代码差异较大，请参考示范代码");
              }
            }
          } else {
            // 如果没有示范代码，简单检查一些常见问题
            if (code.trim().length < 10) {
              errors.push("代码太短，可能不完整");
            }
          }
        }

        if (errors.length > 0) {
          output = "❌ 语法错误！\n\n代码检查发现以下问题：\n\n";
          errors.forEach(err => output += "• " + err + "\n");
          output += "\n请修复错误后重新运行。";
          isCorrect = false;
        } else {
          output = "✅ 代码检查通过！\n\n在实际环境中，这里会显示代码的执行输出结果。";
          isCorrect = true;
        }
      } catch (error) {
        output = `分析错误: ${(error as Error).message}`;
        isCorrect = false;
      }

      setCodeOutput(prev => ({ ...prev, [key]: output }));
      setCodeResult(prev => ({ ...prev, [key]: isCorrect ? "correct" : "wrong" }));
      setIsRunning(prev => ({ ...prev, [key]: false }));
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/projects" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>返回项目列表</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                  {project.icon}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
                  <p className="text-green-100 text-lg max-w-2xl">{project.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4" />
                  {project.rating}
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${project.difficulty === "高级" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}>
                  {project.difficulty}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag: string, idx: number) => (
                <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" />
              技能提升
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.skills.map((skill: string, idx: number) => (
                <div key={idx} className="p-3 bg-green-50 rounded-lg border border-green-100 text-center text-green-800 font-medium text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-green-600" />
              项目章节
            </h2>
            
            {project.chapters.map((chapter: any) => (
              <div key={chapter.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${expandedChapter === chapter.id ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                      {chapter.id}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{chapter.title}</h3>
                      <p className="text-sm text-gray-500">{chapter.duration}</p>
                    </div>
                  </div>
                  {expandedChapter === chapter.id ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                </button>
                
                {expandedChapter === chapter.id && (
                  <div className="p-5 border-t border-gray-100 space-y-6">
                    {chapter.content && chapter.content.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-green-600" />
                          学习内容
                        </h4>
                        <ul className="space-y-2">
                          {chapter.content.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {chapter.exercises && chapter.exercises.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Code className="w-4 h-4 text-green-600" />
                          练习题
                        </h4>
                        <div className="space-y-6">
                          {chapter.exercises.map((exercise: any, exerciseIdx: number) => {
                            const key = getExerciseKey(chapter.id, exerciseIdx);
                            return (
                              <div key={exerciseIdx} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                                <p className="font-medium text-gray-900 mb-4">{exercise.question}</p>
                                
                                {exercise.codeTemplate && (
                                  <>
                                    <div className="mb-4">
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600 flex items-center gap-1">
                                          <BookOpen className="w-4 h-4" />
                                          示范代码
                                        </span>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            copyCode(exercise.codeTemplate);
                                            setUserCode(prev => ({ ...prev, [key]: exercise.codeTemplate }));
                                          }}
                                          className="p-1.5 bg-white rounded hover:bg-gray-100 transition-colors text-sm text-gray-600 flex items-center gap-1 border border-gray-300"
                                        >
                                          {copiedCode === exercise.codeTemplate ? (
                                            <><Check className="w-3.5 h-3.5 text-green-600" /> 已复制</>
                                          ) : (
                                            <><Copy className="w-3.5 h-3.5" /> 复制</>
                                          )}
                                        </button>
                                      </div>
                                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 max-h-48 overflow-y-auto">
                                        <pre className="text-sm text-blue-900 whitespace-pre-wrap font-mono">{exercise.codeTemplate}</pre>
                                      </div>
                                    </div>

                                    <div className="mb-4">
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600 flex items-center gap-1">
                                          <Terminal className="w-4 h-4" />
                                          你的代码
                                        </span>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            runCode(chapter.id, exerciseIdx, exercise);
                                          }}
                                          disabled={isRunning[key]}
                                          className="px-4 py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all disabled:opacity-50 flex items-center gap-1"
                                        >
                                          <PlayCircle className="w-3.5 h-3.5" />
                                          {isRunning[key] ? "运行中..." : "运行代码"}
                                        </button>
                                      </div>
                                      <textarea
                                        value={userCode[key] || ""}
                                        onChange={(e) => setUserCode(prev => ({ ...prev, [key]: e.target.value }))}
                                        className="w-full h-48 p-4 font-mono text-sm bg-gray-900 text-green-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 border-0"
                                        placeholder="在这里粘贴或编写你的代码..."
                                      />
                                    </div>

                                    {codeOutput[key] && (
                                      <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                          <span className="text-sm text-gray-600 flex items-center gap-1">
                                            <Terminal className="w-4 h-4" />
                                            运行结果
                                          </span>
                                          {codeResult[key] && (
                                            <span className={`text-sm font-medium flex items-center gap-1 ${codeResult[key] === "correct" ? "text-green-600" : "text-red-600"}`}>
                                              {codeResult[key] === "correct" ? (
                                                <><CheckCircle className="w-4 h-4" /> 代码正确！</>
                                              ) : (
                                                <><XCircle className="w-4 h-4" /> 需要改进</>
                                              )}
                                            </span>
                                          )}
                                        </div>
                                        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto max-h-32 overflow-y-auto">
                                          <pre className="whitespace-pre-wrap">{codeOutput[key]}</pre>
                                        </div>
                                        {codeResult[key] === "wrong" && (
                                          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800 flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                            <span>提示：请参考示范代码，检查语法和逻辑是否正确。</span>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-8">
              <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg p-6 text-white text-center mb-4">
                <PlayCircle className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">开始学习</h3>
                <p className="text-green-100 text-sm">共 {project.chapters.length} 个章节</p>
              </div>
              <div className="space-y-3">
                <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Target className="w-5 h-5" />
                  开始项目学习
                </button>
                <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  下载资料
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">相关课程</h3>
              <div className="space-y-3">
                <Link to="/course/python-basics" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">Python基础</div>
                  <div className="text-sm text-gray-500">打好编程基础</div>
                </Link>
                <Link to="/course/data-analysis" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">数据分析技术</div>
                  <div className="text-sm text-gray-500">掌握数据分析技能</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}