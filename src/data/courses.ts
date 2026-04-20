export interface Chapter {
  id: string;
  title: string;
  content: string[];
  exercises: {
    type: 'multiple-choice' | 'code';
    question: string;
    options?: string[];
    correctAnswer?: string;
    codeTemplate?: string;
  }[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  shortDesc: string;
  objectives: string[];
  chapters: Chapter[];
  assessment: {
    type: string;
    weight: number;
  }[];
  learningCenter: {
    resources: string[];
    progress: number;
  };
  skills: string[];
}

export const courses: Course[] = [
  {
    id: 'python-basics',
    title: 'Python基础',
    shortDesc: 'Python编程语言入门',
    description: '学习 Python 编程语言的核心概念和基础语法，包括变量、数据类型、控制流、函数、模块等。为后续的数据分析课程打下坚实的编程基础。',
    icon: '🐍',
    objectives: [
      '掌握 Python 编程语言的核心概念',
      '熟练运用 Python 基础语法和数据结构',
      '具备 Python 编程的基本能力',
      '能够编写简单的 Python 程序解决实际问题'
    ],
    chapters: [
      {
        id: 'chapter1',
        title: 'Python 环境搭建和基础语法',
        content: [
          'Python 简介和安装',
          'IDE 的选择和配置',
          '基本语法和代码结构',
          '注释和代码风格'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Python 中用于单行注释的符号是？',
            options: ['//', '#', '/* */', '--'],
            correctAnswer: '#'
          },
          {
            type: 'multiple-choice',
            question: 'Python 是一种什么类型的语言？',
            options: ['编译型', '解释型', '机器语言', '汇编语言'],
            correctAnswer: '解释型'
          },
          {
            type: 'multiple-choice',
            question: 'Python 代码块是通过什么来划分的？',
            options: ['大括号', '缩进', '分号', '关键字'],
            correctAnswer: '缩进'
          },
          {
            type: 'code',
            question: '编写一个程序，输出 "Hello, Python!"',
            codeTemplate: 'print("Hello, Python!")'
          },
          {
            type: 'code',
            question: '编写一个程序，分别输出你的姓名、年龄和专业',
            codeTemplate: 'name = "你的姓名"\nage = "你的年龄"\nmajor = "你的专业"\nprint("姓名：", name)\nprint("年龄：", age)\nprint("专业：", major)'
          },
          {
            type: 'code',
            question: '使用多行注释写一段关于你学习 Python 目标的说明',
            codeTemplate: '"""\n这是多行注释\n在这里写下你学习 Python 的目标\n"""'
          }
        ]
      },
      {
        id: 'chapter2',
        title: '变量、数据类型和运算符',
        content: [
          '变量的定义和使用',
          '基本数据类型（整数、浮点数、字符串、布尔值）',
          '运算符（算术、比较、逻辑）',
          '类型转换'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪个不是 Python 的基本数据类型？',
            options: ['int', 'float', 'string', 'double'],
            correctAnswer: 'double'
          },
          {
            type: 'multiple-choice',
            question: '在 Python 中，如何将字符串 "123" 转换为整数？',
            options: ['int("123")', 'str(123)', 'float("123")', 'bool("123")'],
            correctAnswer: 'int("123")'
          },
          {
            type: 'multiple-choice',
            question: '以下哪个运算符用于判断相等？',
            options: ['=', '==', '===', '!='],
            correctAnswer: '=='
          },
          {
            type: 'code',
            question: '编写一个程序，计算并输出两个数的和',
            codeTemplate: 'a = 10\nb = 20\nsum = a + b\nprint("和为：", sum)'
          },
          {
            type: 'code',
            question: '创建三个变量分别存储你的身高、体重，然后计算 BMI 指数',
            codeTemplate: 'height = 1.75  # 单位：米\nweight = 65    # 单位：千克\nbmi = weight / (height ** 2)\nprint("BMI指数：", round(bmi, 2))'
          },
          {
            type: 'code',
            question: '将一个字符串和一个数字拼接在一起并输出',
            codeTemplate: 'name = "小明"\nage = 20\nprint("我叫" + name + "，今年" + str(age) + "岁")'
          },
          {
            type: 'code',
            question: '使用逻辑运算符判断一个数是否在 10 到 20 之间',
            codeTemplate: 'num = 15\nif num >= 10 and num <= 20:\n    print(num, "在10到20之间")\nelse:\n    print(num, "不在10到20之间")'
          }
        ]
      },
      {
        id: 'chapter3',
        title: '控制流（条件语句、循环语句）',
        content: [
          'if 语句和条件表达式',
          'for 循环和 range() 函数',
          'while 循环',
          '循环控制语句（break、continue）'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Python 中用于遍历序列的循环语句是？',
            options: ['while', 'for', 'do-while', 'loop'],
            correctAnswer: 'for'
          },
          {
            type: 'multiple-choice',
            question: '以下哪个语句用于跳出循环？',
            options: ['continue', 'break', 'pass', 'return'],
            correctAnswer: 'break'
          },
          {
            type: 'multiple-choice',
            question: 'range(5) 会生成哪些数字？',
            options: ['0-5', '0-4', '1-5', '1-4'],
            correctAnswer: '0-4'
          },
          {
            type: 'code',
            question: '编写一个程序，使用循环输出 1 到 10 的数字',
            codeTemplate: 'for i in range(1, 11):\n    print(i)'
          },
          {
            type: 'code',
            question: '判断一个年份是否是闰年（能被4整除但不能被100整除，或者能被400整除）',
            codeTemplate: 'year = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print(year, "是闰年")\nelse:\n    print(year, "不是闰年")'
          },
          {
            type: 'code',
            question: '使用 while 循环计算 1 到 100 的和',
            codeTemplate: 'sum = 0\ni = 1\nwhile i <= 100:\n    sum += i\n    i += 1\nprint("1到100的和：", sum)'
          },
          {
            type: 'code',
            question: '输出九九乘法表',
            codeTemplate: `for i in range(1, 10):
    for j in range(1, i + 1):
        print("{j}x{i}={product}".format(j=j, i=i, product=i*j), end="\\t")
    print()`
          }
        ]
      },
      {
        id: 'chapter4',
        title: '函数和模块',
        content: [
          '函数的定义和调用',
          '参数和返回值',
          '模块的导入和使用',
          '内置函数和标准库'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Python 中定义函数的关键字是？',
            options: ['def', 'function', 'func', 'define'],
            correctAnswer: 'def'
          },
          {
            type: 'multiple-choice',
            question: '如何导入 math 模块？',
            options: ['include math', 'import math', 'use math', 'require math'],
            correctAnswer: 'import math'
          },
          {
            type: 'multiple-choice',
            question: '以下哪个是正确的函数定义？',
            options: ['function add(a, b)', 'def add(a, b):', 'add(a, b) = def', 'a, b: def add'],
            correctAnswer: 'def add(a, b):'
          },
          {
            type: 'code',
            question: '编写一个函数，计算并返回两个数的乘积',
            codeTemplate: 'def multiply(a, b):\n    return a * b\n\nresult = multiply(5, 3)\nprint("乘积为：", result)'
          },
          {
            type: 'code',
            question: '编写一个函数，判断一个数是否是素数',
            codeTemplate: 'def is_prime(n):\n    if n <= 1:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprint(is_prime(17))  # 应该输出 True'
          },
          {
            type: 'code',
            question: '使用 math 模块计算圆的面积和周长',
            codeTemplate: 'import math\n\nradius = 5\narea = math.pi * radius ** 2\ncircumference = 2 * math.pi * radius\nprint("圆的面积：", round(area, 2))\nprint("圆的周长：", round(circumference, 2))'
          },
          {
            type: 'code',
            question: '编写一个函数，接收一个列表，返回列表中的最大值和最小值',
            codeTemplate: 'def find_min_max(numbers):\n    return min(numbers), max(numbers)\n\nnums = [3, 7, 2, 9, 5]\nmin_val, max_val = find_min_max(nums)\nprint("最小值：", min_val)\nprint("最大值：", max_val)'
          }
        ]
      },
      {
        id: 'chapter5',
        title: '列表、字典、元组等数据结构',
        content: [
          '列表的创建和操作',
          '字典的创建和操作',
          '元组的特点和使用',
          '集合的基本操作'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪个数据结构是可变的？',
            options: ['元组', '列表', '字符串', '整数'],
            correctAnswer: '列表'
          },
          {
            type: 'multiple-choice',
            question: '如何访问字典中的值？',
            options: ['dict[index]', 'dict.key', 'dict["key"]', 'dict.key()'],
            correctAnswer: 'dict["key"]'
          },
          {
            type: 'multiple-choice',
            question: '以下哪个方法用于向列表末尾添加元素？',
            options: ['append()', 'insert()', 'extend()', 'add()'],
            correctAnswer: 'append()'
          },
          {
            type: 'code',
            question: '编写一个程序，创建一个字典并访问其中的元素',
            codeTemplate: 'student = {"name": "张三", "age": 18, "grade": "大二"}\nprint(student["name"])\nprint(student["age"])'
          },
          {
            type: 'code',
            question: '创建一个包含多个数字的列表，找出其中的偶数',
            codeTemplate: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = [num for num in numbers if num % 2 == 0]\nprint("偶数列表：", evens)'
          },
          {
            type: 'code',
            question: '统计一个字符串中每个字符出现的次数，使用字典存储',
            codeTemplate: 'text = "hello world"\nchar_count = {}\nfor char in text:\n    char_count[char] = char_count.get(char, 0) + 1\nprint(char_count)'
          },
          {
            type: 'code',
            question: '使用集合求两个列表的交集和并集',
            codeTemplate: 'list1 = [1, 2, 3, 4, 5]\nlist2 = [4, 5, 6, 7, 8]\nset1 = set(list1)\nset2 = set(list2)\nintersection = set1 & set2\nunion = set1 | set2\nprint("交集：", intersection)\nprint("并集：", union)'
          },
          {
            type: 'code',
            question: '对一个列表进行排序，分别实现升序和降序',
            codeTemplate: 'numbers = [5, 2, 8, 1, 9, 3]\nnumbers_sorted_asc = sorted(numbers)\nnumbers_sorted_desc = sorted(numbers, reverse=True)\nprint("升序：", numbers_sorted_asc)\nprint("降序：", numbers_sorted_desc)'
          }
        ]
      },
      {
        id: 'chapter6',
        title: '文件操作',
        content: [
          '文件的打开和关闭',
          '文件的读取和写入',
          '异常处理',
          'with 语句的使用'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Python 中打开文件的函数是？',
            options: ['open()', 'file()', 'read()', 'write()'],
            correctAnswer: 'open()'
          },
          {
            type: 'multiple-choice',
            question: '文件打开模式 "w" 表示什么？',
            options: ['只读', '写入', '追加', '读写'],
            correctAnswer: '写入'
          },
          {
            type: 'multiple-choice',
            question: '使用 try-except 的主要目的是什么？',
            options: ['提高性能', '处理异常', '简化代码', '增加功能'],
            correctAnswer: '处理异常'
          },
          {
            type: 'code',
            question: '编写一个程序，将 "Hello, File!" 写入到文件中',
            codeTemplate: 'with open("test.txt", "w") as f:\n    f.write("Hello, File!")\n\nwith open("test.txt", "r") as f:\n    print(f.read())'
          },
          {
            type: 'code',
            question: '读取一个文件的内容，统计其中有多少行',
            codeTemplate: 'with open("test.txt", "r") as f:\n    lines = f.readlines()\nprint("文件行数：", len(lines))'
          },
          {
            type: 'code',
            question: '使用异常处理，尝试打开一个不存在的文件',
            codeTemplate: 'try:\n    with open("not_exist.txt", "r") as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print("文件不存在！")'
          },
          {
            type: 'code',
            question: '创建一个 CSV 文件，写入学生信息（姓名、年龄、成绩）',
            codeTemplate: 'import csv\n\nstudents = [\n    ["张三", 18, 85],\n    ["李四", 19, 90],\n    ["王五", 20, 88]\n]\n\nwith open("students.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["姓名", "年龄", "成绩"])\n    writer.writerows(students)\n\nprint("CSV文件已创建！")'
          }
        ]
      }
    ],
    assessment: [
      { type: '平时作业', weight: 30 },
      { type: '实验报告', weight: 20 },
      { type: '期中考试', weight: 20 },
      { type: '期末考试', weight: 30 }
    ],
    learningCenter: {
      resources: [
        '《Python编程：从入门到实践》',
        'Python官方文档',
        '在线编程平台：LeetCode、Codewars',
        'Python基础教程视频'
      ],
      progress: 0
    },
    skills: ['Python编程', '逻辑思维', '问题解决', '代码调试']
  },
  {
    id: 'data-analysis',
    title: '数据分析技术',
    shortDesc: '数据分析方法与工具',
    description: '学习数据分析的基本方法和常用工具，掌握数据清洗、数据可视化、统计分析等技能，使用 Pandas、NumPy、Matplotlib 等库进行数据分析。',
    icon: '📊',
    objectives: [
      '掌握数据分析的基本概念和方法',
      '熟练使用 Pandas、NumPy 等数据分析库',
      '学习数据可视化技术，使用 Matplotlib、Seaborn 等工具',
      '掌握统计分析方法在商务决策中的应用',
      '培养数据分析思维和解决实际商务问题的能力'
    ],
    chapters: [
      {
        id: 'chapter1',
        title: '数据分析概述',
        content: [
          '数据分析的定义和重要性',
          '数据分析的流程和方法',
          '数据分析在商务领域的应用',
          '数据分析工具介绍'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项不是数据分析的基本步骤？',
            options: ['数据收集', '数据清洗', '数据可视化', '数据删除'],
            correctAnswer: '数据删除'
          },
          {
            type: 'multiple-choice',
            question: '数据分析的主要目标是什么？',
            options: ['数据存储', '数据可视化', '发现数据中的规律和趋势', '数据备份'],
            correctAnswer: '发现数据中的规律和趋势'
          },
          {
            type: 'multiple-choice',
            question: '以下哪个不是常用的数据分析库？',
            options: ['Pandas', 'NumPy', 'React', 'Matplotlib'],
            correctAnswer: 'React'
          },
          {
            type: 'code',
            question: '编写一个程序，导入 Pandas 库并创建一个简单的 DataFrame',
            codeTemplate: 'import pandas as pd\n\ndata = {"name": ["张三", "李四", "王五"], "age": [18, 19, 20], "score": [85, 90, 95]}\ndf = pd.DataFrame(data)\nprint(df)'
          },
          {
            type: 'code',
            question: '创建一个简单的数据描述表，包含产品名、价格、销量',
            codeTemplate: 'import pandas as pd\n\ndata = {\n    "product": ["苹果", "香蕉", "橙子", "西瓜"],\n    "price": [5.5, 3.0, 4.0, 2.5],\n    "sales": [100, 150, 80, 50]\n}\ndf = pd.DataFrame(data)\nprint(df)'
          },
          {
            type: 'code',
            question: '计算上一题中所有产品的总销售额',
            codeTemplate: 'import pandas as pd\n\ndata = {\n    "product": ["苹果", "香蕉", "橙子", "西瓜"],\n    "price": [5.5, 3.0, 4.0, 2.5],\n    "sales": [100, 150, 80, 50]\n}\ndf = pd.DataFrame(data)\ndf["revenue"] = df["price"] * df["sales"]\ntotal_revenue = df["revenue"].sum()\nprint("总销售额：", total_revenue)'
          }
        ]
      },
      {
        id: 'chapter2',
        title: 'NumPy 基础',
        content: [
          'NumPy 数组的创建和操作',
          '数组的索引和切片',
          'NumPy 的数学运算',
          '广播机制'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'NumPy 中创建数组的函数是？',
            options: ['array()', 'list()', 'tuple()', 'dict()'],
            correctAnswer: 'array()'
          },
          {
            type: 'multiple-choice',
            question: '如何获取 NumPy 数组的形状？',
            options: ['array.size', 'array.shape', 'array.length', 'array.dim'],
            correctAnswer: 'array.shape'
          },
          {
            type: 'multiple-choice',
            question: 'np.zeros(5) 创建的数组包含什么内容？',
            options: ['五个0', '五个1', '零到五的数', '空数组'],
            correctAnswer: '五个0'
          },
          {
            type: 'code',
            question: '创建一个形状为 (3, 4) 的 NumPy 数组，并填充随机值',
            codeTemplate: 'import numpy as np\n\narr = np.random.rand(3, 4)\nprint(arr)'
          },
          {
            type: 'code',
            question: '创建一个 5x5 的单位矩阵',
            codeTemplate: 'import numpy as np\n\nidentity_matrix = np.eye(5)\nprint("单位矩阵：")\nprint(identity_matrix)'
          },
          {
            type: 'code',
            question: '创建一个包含 1 到 10 数字的数组，并计算它们的平方',
            codeTemplate: 'import numpy as np\n\narr = np.arange(1, 11)\nsquares = arr ** 2\nprint("原数组：", arr)\nprint("平方值：", squares)'
          },
          {
            type: 'code',
            question: '对两个数组进行元素级别的加法、减法和乘法运算',
            codeTemplate: 'import numpy as np\n\narr1 = np.array([1, 2, 3, 4])\narr2 = np.array([5, 6, 7, 8])\nprint("加法：", arr1 + arr2)\nprint("减法：", arr1 - arr2)\nprint("乘法：", arr1 * arr2)'
          }
        ]
      },
      {
        id: 'chapter3',
        title: 'Pandas 数据处理',
        content: [
          'Series 和 DataFrame 的创建',
          '数据的读取和写入',
          '数据清洗和预处理',
          '数据分组和聚合',
          '数据合并和连接'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Pandas 中用于读取 CSV 文件的函数是？',
            options: ['read_csv()', 'load_csv()', 'import_csv()', 'get_csv()'],
            correctAnswer: 'read_csv()'
          },
          {
            type: 'multiple-choice',
            question: '如何获取 DataFrame 的行数？',
            options: ['len(df)', 'df.count()', 'df.size', 'df.shape[0]'],
            correctAnswer: 'df.shape[0]'
          },
          {
            type: 'multiple-choice',
            question: '以下哪个方法用于检查数据框中的缺失值？',
            options: ['isnull()', 'empty()', 'missing()', 'nan()'],
            correctAnswer: 'isnull()'
          },
          {
            type: 'code',
            question: '使用 Pandas 读取 CSV 文件并显示前 5 行数据',
            codeTemplate: 'import pandas as pd\n\ndf = pd.read_csv("data.csv")\nprint(df.head())'
          },
          {
            type: 'code',
            question: '创建一个 DataFrame 并添加一列新数据',
            codeTemplate: 'import pandas as pd\n\ndata = {"name": ["小明", "小红", "小华"], "age": [18, 19, 20]}\ndf = pd.DataFrame(data)\ndf["city"] = ["北京", "上海", "广州"]\nprint(df)'
          },
          {
            type: 'code',
            question: '对 DataFrame 按某一列进行排序',
            codeTemplate: 'import pandas as pd\n\ndata = {\n    "name": ["小明", "小红", "小华", "小李"],\n    "score": [85, 92, 78, 95]\n}\ndf = pd.DataFrame(data)\ndf_sorted = df.sort_values("score", ascending=False)\nprint("按成绩排序：")\nprint(df_sorted)'
          },
          {
            type: 'code',
            question: '计算 DataFrame 中各列的统计信息（均值、最小值、最大值等）',
            codeTemplate: 'import pandas as pd\n\ndata = {\n    "math": [85, 90, 78, 95, 88],\n    "english": [75, 85, 80, 90, 82],\n    "chinese": [80, 88, 85, 92, 86]\n}\ndf = pd.DataFrame(data)\nprint(df.describe())'
          }
        ]
      },
      {
        id: 'chapter4',
        title: '数据可视化',
        content: [
          'Matplotlib 基础',
          '折线图、柱状图、散点图等基本图表',
          'Seaborn 高级可视化',
          '交互式可视化工具介绍'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Matplotlib 中用于创建图形的函数是？',
            options: ['plot()', 'figure()', 'graph()', 'chart()'],
            correctAnswer: 'figure()'
          },
          {
            type: 'multiple-choice',
            question: '以下哪个图表类型适合显示数据的变化趋势？',
            options: ['饼图', '折线图', '散点图', '直方图'],
            correctAnswer: '折线图'
          },
          {
            type: 'multiple-choice',
            question: '如何在 Matplotlib 中添加图例？',
            options: ['plt.legend()', 'plt.title()', 'plt.xlabel()', 'plt.grid()'],
            correctAnswer: 'plt.legend()'
          },
          {
            type: 'code',
            question: '使用 Matplotlib 创建一个简单的折线图',
            codeTemplate: 'import matplotlib.pyplot as plt\n\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\n\nplt.plot(x, y)\nplt.title("折线图示例")\nplt.xlabel("X轴")\nplt.ylabel("Y轴")\nplt.show()'
          },
          {
            type: 'code',
            question: '创建一个柱状图，展示不同科目的平均成绩',
            codeTemplate: 'import matplotlib.pyplot as plt\n\nsubjects = ["语文", "数学", "英语", "物理", "化学"]\nscores = [85, 90, 78, 88, 82]\n\nplt.bar(subjects, scores, color="skyblue")\nplt.title("各科平均成绩")\nplt.xlabel("科目")\nplt.ylabel("成绩")\nplt.ylim(60, 100)\nplt.show()'
          },
          {
            type: 'code',
            question: '创建一个散点图，展示学习时间与考试成绩的关系',
            codeTemplate: 'import matplotlib.pyplot as plt\nimport numpy as np\n\nstudy_time = [2, 3, 1, 4, 5, 3, 2, 6, 4, 5]\ntest_score = [60, 75, 50, 85, 90, 70, 65, 95, 80, 88]\n\nplt.scatter(study_time, test_score, color="red", alpha=0.6)\nplt.title("学习时间与成绩关系")\nplt.xlabel("学习时间（小时）")\nplt.ylabel("考试成绩")\nplt.show()'
          },
          {
            type: 'code',
            question: '创建一个饼图，展示不同类别的销售占比',
            codeTemplate: 'import matplotlib.pyplot as plt\n\ncategories = ["电子产品", "服装", "食品", "家居", "其他"]\nsales = [30, 25, 20, 15, 10]\ncolors = ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99", "#c2c2f0"]\n\nplt.pie(sales, labels=categories, colors=colors, autopct="%1.1f%%", startangle=90)\nplt.title("各类商品销售占比")\nplt.axis("equal")  # 确保饼图是圆形\nplt.show()'
          }
        ]
      },
      {
        id: 'chapter5',
        title: '统计分析方法',
        content: [
          '描述性统计分析',
          '假设检验',
          '相关分析和回归分析',
          '聚类分析'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项是描述性统计分析的指标？',
            options: ['均值', '方差', '标准差', '以上都是'],
            correctAnswer: '以上都是'
          },
          {
            type: 'multiple-choice',
            question: '相关系数的取值范围是？',
            options: ['0到1', '-1到1', '-∞到+∞', '0到∞'],
            correctAnswer: '-1到1'
          },
          {
            type: 'multiple-choice',
            question: '中位数的主要特点是什么？',
            options: ['受极端值影响大', '不受极端值影响', '是最常见的值', '等于均值'],
            correctAnswer: '不受极端值影响'
          },
          {
            type: 'code',
            question: '计算一组数据的均值、中位数和标准差',
            codeTemplate: 'import numpy as np\n\ndata = [10, 15, 20, 25, 30]\nmean = np.mean(data)\nmedian = np.median(data)\nstd = np.std(data)\n\nprint("均值:", mean)\nprint("中位数:", median)\nprint("标准差:", std)'
          },
          {
            type: 'code',
            question: '计算两组数据的相关系数',
            codeTemplate: 'import numpy as np\n\nx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\ny = [2, 4, 5, 7, 9, 10, 12, 14, 15, 18]\ncorr_matrix = np.corrcoef(x, y)\ncorr = corr_matrix[0, 1]\nprint("相关系数：", corr)'
          },
          {
            type: 'code',
            question: '使用 Pandas 计算 DataFrame 各列之间的相关矩阵',
            codeTemplate: 'import pandas as pd\nimport numpy as np\n\ndata = {\n    "a": np.random.rand(10),\n    "b": np.random.rand(10),\n    "c": np.random.rand(10)\n}\ndf = pd.DataFrame(data)\ncorr_matrix = df.corr()\nprint("相关矩阵：")\nprint(corr_matrix)'
          },
          {
            type: 'code',
            question: '进行简单的线性回归分析',
            codeTemplate: 'import numpy as np\nfrom scipy import stats\n\nx = np.array([1, 2, 3, 4, 5])\ny = np.array([2, 4, 5, 7, 8])\n\nslope, intercept, r_value, p_value, std_err = stats.linregress(x, y)\n\nprint("回归方程：y =", slope, "* x +", intercept)\nprint("R值：", r_value)'
          }
        ]
      },
      {
        id: 'chapter6',
        title: '商务数据分析案例',
        content: [
          '销售数据分析',
          '客户行为分析',
          '市场趋势分析',
          '供应链数据分析'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项不是商务数据分析的常见应用场景？',
            options: ['销售预测', '客户分群', '员工考勤', '市场分析'],
            correctAnswer: '员工考勤'
          },
          {
            type: 'multiple-choice',
            question: 'RFM模型中M代表什么？',
            options: ['最近购买时间', '购买频率', '购买金额', '购买类型'],
            correctAnswer: '购买金额'
          },
          {
            type: 'multiple-choice',
            question: 'A/B测试的主要目的是什么？',
            options: ['提高系统性能', '验证假设', '数据可视化', '数据存储'],
            correctAnswer: '验证假设'
          },
          {
            type: 'code',
            question: '使用 Pandas 分析销售数据，计算月销售额',
            codeTemplate: 'import pandas as pd\n\ndf = pd.read_csv("sales_data.csv")\ndf["date"] = pd.to_datetime(df["date"])\ndf["month"] = df["date"].dt.month\nmonthly_sales = df.groupby("month")["sales"].sum()\nprint(monthly_sales)'
          },
          {
            type: 'code',
            question: '分析销售数据，找出销量最好的产品',
            codeTemplate: 'import pandas as pd\n\ndata = {\n    "product": ["产品A", "产品B", "产品C", "产品D", "产品E"],\n    "sales": [1500, 2000, 1200, 3000, 1800]\n}\ndf = pd.DataFrame(data)\nproduct_sales = df.groupby("product")["sales"].sum()\ntop_product = product_sales.idxmax()\nprint("销量最好的产品：", top_product)\nprint("其销量：", product_sales.max())'
          },
          {
            type: 'code',
            question: '对客户进行简单的分群分析（按消费金额）',
            codeTemplate: 'import pandas as pd\n\ndata = {\n    "customer": ["客户A", "客户B", "客户C", "客户D", "客户E", "客户F"],\n    "total_spent": [500, 2000, 100, 800, 1500, 300]\n}\ndf = pd.DataFrame(data)\n\n# 定义分群函数\ndef segment(amount):\n    if amount >= 1000:\n        return "高价值客户"\n    elif amount >= 500:\n        return "中价值客户"\n    else:\n        return "低价值客户"\n\ndf["segment"] = df["total_spent"].apply(segment)\nprint(df)\nprint("\\n客户分群统计：")\nprint(df["segment"].value_counts())'
          },
          {
            type: 'code',
            question: '使用移动平均预测未来的销售趋势',
            codeTemplate: 'import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# 创建示例销售数据\nmonths = range(1, 13)\nsales = [100, 120, 110, 130, 150, 140, 160, 170, 180, 200, 190, 210]\ndf = pd.DataFrame({"month": months, "sales": sales})\n\n# 计算3个月的移动平均\ndf["moving_avg"] = df["sales"].rolling(window=3).mean()\n\nprint("销售数据和移动平均：")\nprint(df)\n\n# 可视化\nplt.plot(df["month"], df["sales"], marker="o", label="实际销售")\nplt.plot(df["month"], df["moving_avg"], marker="s", label="3个月移动平均")\nplt.title("销售趋势与移动平均")\nplt.xlabel("月份")\nplt.ylabel("销售额")\nplt.legend()\nplt.show()'
          }
        ]
      }
    ],
    assessment: [
      { type: '平时作业', weight: 30 },
      { type: '实验报告', weight: 20 },
      { type: '小组项目', weight: 30 },
      { type: '期末考试', weight: 20 }
    ],
    learningCenter: {
      resources: [
        '《Python数据分析》，Wes McKinney',
        '《利用Python进行数据分析》，Wes McKinney',
        'Pandas官方文档',
        'Matplotlib官方文档',
        'Seaborn官方文档'
      ],
      progress: 0
    },
    skills: ['数据清洗', '数据可视化', '统计分析', 'Pandas', 'NumPy', 'Matplotlib']
  },
  {
    id: 'data-collection',
    title: '数据采集与处理',
    shortDesc: '网络爬虫与数据清洗',
    description: '学习如何从互联网采集数据，包括网络爬虫技术、API 数据获取、数据清洗和预处理方法。掌握 BeautifulSoup、Scrapy 等爬虫框架的使用。',
    icon: '🕸️',
    objectives: [
      '掌握网络爬虫的基本原理和方法',
      '学会使用 Python 进行网络数据采集',
      '掌握数据清洗和预处理的基本方法',
      '能够将采集的数据存储到合适的格式中'
    ],
    chapters: [
      {
        id: 'chapter1',
        title: 'HTML 和 CSS 基础',
        content: [
          'HTML 基本结构和标签',
          'CSS 选择器和样式',
          '网页结构分析',
          '浏览器开发者工具的使用'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪个是 HTML 标签？',
            options: ['<div>', '.class', '#id', 'function()'],
            correctAnswer: '<div>'
          },
          {
            type: 'multiple-choice',
            question: '以下哪个不是 HTML 的标题标签？',
            options: ['<h1>', '<h2>', '<h6>', '<h7>'],
            correctAnswer: '<h7>'
          },
          {
            type: 'multiple-choice',
            question: 'CSS 选择器中 # 表示什么？',
            options: ['类选择器', 'ID选择器', '标签选择器', '属性选择器'],
            correctAnswer: 'ID选择器'
          },
          {
            type: 'code',
            question: '编写一个简单的 HTML 页面，包含标题和段落',
            codeTemplate: '<!DOCTYPE html>\n<html>\n<head>\n    <title>测试页面</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n    <p>这是一个测试段落</p>\n</body>\n</html>'
          },
          {
            type: 'code',
            question: '创建一个包含列表的 HTML 页面',
            codeTemplate: '<!DOCTYPE html>\n<html>\n<head>\n    <title>列表示例</title>\n</head>\n<body>\n    <h2>无序列表</h2>\n    <ul>\n        <li>第一项</li>\n        <li>第二项</li>\n        <li>第三项</li>\n    </ul>\n    \n    <h2>有序列表</h2>\n    <ol>\n        <li>第一项</li>\n        <li>第二项</li>\n        <li>第三项</li>\n    </ol>\n</body>\n</html>'
          },
          {
            type: 'code',
            question: '创建一个包含表格的 HTML 页面',
            codeTemplate: '<!DOCTYPE html>\n<html>\n<head>\n    <title>表格示例</title>\n</head>\n<body>\n    <table border="1">\n        <tr>\n            <th>姓名</th>\n            <th>年龄</th>\n            <th>班级</th>\n        </tr>\n        <tr>\n            <td>张三</td>\n            <td>18</td>\n            <td>一班</td>\n        </tr>\n        <tr>\n            <td>李四</td>\n            <td>19</td>\n            <td>二班</td>\n        </tr>\n    </table>\n</body>\n</html>'
          }
        ]
      },
      {
        id: 'chapter2',
        title: 'requests 库的使用',
        content: [
          'HTTP 请求的基本概念',
          'requests 库的安装和使用',
          'GET 和 POST 请求',
          '处理响应和状态码'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'requests 库中用于发送 GET 请求的函数是？',
            options: ['get()', 'post()', 'put()', 'delete()'],
            correctAnswer: 'get()'
          },
          {
            type: 'multiple-choice',
            question: 'HTTP 状态码 200 表示什么？',
            options: ['未找到', '成功', '服务器错误', '禁止访问'],
            correctAnswer: '成功'
          },
          {
            type: 'multiple-choice',
            question: '以下哪个不是常用的 HTTP 请求方法？',
            options: ['GET', 'POST', 'SEND', 'DELETE'],
            correctAnswer: 'SEND'
          },
          {
            type: 'code',
            question: '使用 requests 库获取一个网页的内容',
            codeTemplate: 'import requests\n\nresponse = requests.get("https://www.example.com")\nprint(response.text)'
          },
          {
            type: 'code',
            question: '获取网页响应的状态码和响应头',
            codeTemplate: 'import requests\n\nresponse = requests.get("https://www.example.com")\nprint("状态码:", response.status_code)\nprint("响应头:", response.headers)'
          },
          {
            type: 'code',
            question: '发送 POST 请求',
            codeTemplate: 'import requests\n\ndata = {\'username\': \'test\', \'password\': \'123456\'}\nresponse = requests.post(\'https://httpbin.org/post\', data=data)\nprint(response.text)'
          }
        ]
      },
      {
        id: 'chapter3',
        title: 'BeautifulSoup 网页解析',
        content: [
          'BeautifulSoup 的安装和使用',
          '解析 HTML 和 XML',
          '使用选择器提取数据',
          '处理嵌套结构'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'BeautifulSoup 中用于查找元素的方法是？',
            options: ['find()', 'search()', 'locate()', 'get()'],
            correctAnswer: 'find()'
          },
          {
            type: 'multiple-choice',
            question: 'BeautifulSoup 中用于查找所有元素的方法是？',
            options: ['find_all()', 'search_all()', 'find()', 'get_all()'],
            correctAnswer: 'find_all()'
          },
          {
            type: 'multiple-choice',
            question: '使用 CSS 选择器查找元素的方法是？',
            options: ['select()', 'css()', 'selector()', 'find_css()'],
            correctAnswer: 'select()'
          },
          {
            type: 'code',
            question: '使用 BeautifulSoup 解析 HTML 并提取所有链接',
            codeTemplate: 'from bs4 import BeautifulSoup\nimport requests\n\nresponse = requests.get("https://www.example.com")\nsoup = BeautifulSoup(response.text, "html.parser")\nlinks = soup.find_all("a")\nfor link in links:\n    print(link.get("href"))'
          },
          {
            type: 'code',
            question: '提取所有段落文本',
            codeTemplate: 'from bs4 import BeautifulSoup\nimport requests\n\nresponse = requests.get("https://www.example.com")\nsoup = BeautifulSoup(response.text, "html.parser")\nparagraphs = soup.find_all("p")\nfor p in paragraphs:\n    print(p.text)'
          },
          {
            type: 'code',
            question: '查找所有 class 属性为 "title" 的元素',
            codeTemplate: 'from bs4 import BeautifulSoup\nimport requests\n\nresponse = requests.get("https://www.example.com")\nsoup = BeautifulSoup(response.text, "html.parser")\ntitles = soup.find_all(class_="title")\nfor title in titles:\n    print(title.text)'
          }
        ]
      },
      {
        id: 'chapter4',
        title: 'API 数据获取',
        content: [
          'API 的基本概念',
          'RESTful API 的使用',
          'API 认证和授权',
          '处理 JSON 数据'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪个是常用的 API 数据格式？',
            options: ['JSON', 'XML', 'CSV', '以上都是'],
            correctAnswer: '以上都是'
          },
          {
            type: 'multiple-choice',
            question: 'RESTful API 中获取资源的 HTTP 方法是？',
            options: ['GET', 'POST', 'PUT', 'DELETE'],
            correctAnswer: 'GET'
          },
          {
            type: 'multiple-choice',
            question: 'JSON 数据中表示对象的符号是？',
            options: ['[]', '{}', '<>', '()'],
            correctAnswer: '{}'
          },
          {
            type: 'code',
            question: '使用 requests 库调用一个公开的 API 并解析 JSON 响应',
            codeTemplate: 'import requests\n\nresponse = requests.get("https://api.github.com/users/octocat")\ndata = response.json()\nprint(data["name"])\nprint(data["bio"])' 
          },
          {
            type: 'code',
            question: '解析 JSON 数据并提取多个字段',
            codeTemplate: 'import requests\n\nresponse = requests.get("https://api.github.com/users/octocat")\ndata = response.json()\n\nprint("用户名:", data["login"])\nprint("姓名:", data["name"])\nprint("位置:", data["location"])\nprint("公开仓库数量:", data["public_repos"])'
          },
          {
            type: 'code',
            question: '将 JSON 数据保存到文件',
            codeTemplate: 'import requests\nimport json\n\nresponse = requests.get("https://api.github.com/users/octocat")\ndata = response.json()\n\nwith open("user_data.json", "w") as f:\n    json.dump(data, f, ensure_ascii=False, indent=2)\n\nprint("数据已保存到 user_data.json")'
          }
        ]
      },
      {
        id: 'chapter5',
        title: '数据清洗和预处理',
        content: [
          '数据清洗的基本概念',
          '处理缺失值和异常值',
          '数据标准化和归一化',
          '文本数据处理'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项不是数据清洗的常见操作？',
            options: ['处理缺失值', '去除重复值', '数据标准化', '数据加密'],
            correctAnswer: '数据加密'
          },
          {
            type: 'multiple-choice',
            question: 'Pandas 中检查缺失值的函数是？',
            options: ['isnull()', 'missing()', 'empty()', 'nan()'],
            correctAnswer: 'isnull()'
          },
          {
            type: 'multiple-choice',
            question: 'Pandas 中删除重复值的方法是？',
            options: ['drop_duplicates()', 'remove_duplicates()', 'delete_duplicates()', 'duplicates()'],
            correctAnswer: 'drop_duplicates()'
          },
          {
            type: 'code',
            question: '使用 Pandas 处理缺失值',
            codeTemplate: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({"A": [1, 2, np.nan, 4], "B": [5, np.nan, 7, 8]})\nprint("原始数据:")\nprint(df)\n\n# 填充缺失值\ndf_filled = df.fillna(0)\nprint("\n填充后的数据:")\nprint(df_filled)' 
          },
          {
            type: 'code',
            question: '删除含有缺失值的行',
            codeTemplate: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({"A": [1, 2, np.nan, 4], "B": [5, np.nan, 7, 8]})\nprint("原始数据:")\nprint(df)\n\n# 删除含有缺失值的行\ndf_dropped = df.dropna()\nprint("\n删除缺失值后的数据:")\nprint(df_dropped)'
          },
          {
            type: 'code',
            question: '去除重复数据',
            codeTemplate: 'import pandas as pd\n\ndf = pd.DataFrame({"A": [1, 2, 2, 3, 3, 3], "B": [4, 5, 5, 6, 6, 6]})\nprint("原始数据:")\nprint(df)\n\n# 去除重复值\ndf_unique = df.drop_duplicates()\nprint("\n去除重复值后的数据:")\nprint(df_unique)'
          }
        ]
      },
      {
        id: 'chapter6',
        title: '数据存储（CSV、JSON、数据库）',
        content: [
          'CSV 文件的读写',
          'JSON 文件的读写',
          '数据库的连接和操作',
          '数据存储的最佳实践'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Pandas 中用于将数据写入 CSV 文件的函数是？',
            options: ['to_csv()', 'write_csv()', 'save_csv()', 'export_csv()'],
            correctAnswer: 'to_csv()'
          },
          {
            type: 'multiple-choice',
            question: 'JSON 中表示数组的符号是？',
            options: ['{}', '[]', '<>', '()'],
            correctAnswer: '[]'
          },
          {
            type: 'multiple-choice',
            question: '以下哪个不是关系型数据库？',
            options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
            correctAnswer: 'MongoDB'
          },
          {
            type: 'code',
            question: '使用 Pandas 将数据写入 CSV 文件',
            codeTemplate: 'import pandas as pd\n\ndata = {"name": ["张三", "李四", "王五"], "age": [18, 19, 20], "score": [85, 90, 95]}\ndf = pd.DataFrame(data)\ndf.to_csv("students.csv", index=False)\nprint("数据已写入 students.csv 文件")' 
          },
          {
            type: 'code',
            question: '读取 CSV 文件并显示基本信息',
            codeTemplate: 'import pandas as pd\n\ndf = pd.read_csv("students.csv")\nprint("数据形状:", df.shape)\nprint("前 5 行数据:")\nprint(df.head())'
          },
          {
            type: 'code',
            question: '读写 JSON 文件',
            codeTemplate: 'import pandas as pd\nimport json\n\n# 准备数据\ndata = {"name": ["张三", "李四", "王五"], "age": [18, 19, 20]}\ndf = pd.DataFrame(data)\n\n# 写入 JSON 文件\ndf.to_json("students.json")\nprint("数据已写入 students.json 文件")\n\n# 读取 JSON 文件\ndf_read = pd.read_json("students.json")\nprint("\n读取的数据:")\nprint(df_read)'
          }
        ]
      }
    ],
    assessment: [
      { type: '平时作业', weight: 25 },
      { type: '爬虫项目', weight: 35 },
      { type: '数据清洗报告', weight: 20 },
      { type: '期末考试', weight: 20 }
    ],
    learningCenter: {
      resources: [
        '《Python网络爬虫实战》',
        'BeautifulSoup官方文档',
        'Scrapy官方文档',
        'HTTP协议详解',
        'RESTful API设计指南'
      ],
      progress: 0
    },
    skills: ['网络爬虫', '数据采集', '数据清洗', 'API调用', 'HTML解析', '数据存储']
  },
  {
    id: 'supply-chain',
    title: '供应链数据分析',
    shortDesc: '供应链管理与优化',
    description: '将数据分析应用于供应链管理领域，学习供应链数据的分析方法、库存优化、需求预测、供应商评估等内容，提升供应链运营效率。',
    icon: '🚚',
    objectives: [
      '了解供应链管理的基本概念',
      '掌握供应链数据分析的方法和工具',
      '能够运用数据分析优化供应链运营',
      '具备供应链决策支持的能力'
    ],
    chapters: [
      {
        id: 'chapter1',
        title: '供应链管理概述',
        content: [
          '供应链的基本概念和组成',
          '供应链管理的重要性',
          '供应链管理的目标和挑战',
          '供应链管理的发展趋势'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项不是供应链的组成部分？',
            options: ['供应商', '制造商', '零售商', '消费者'],
            correctAnswer: '消费者'
          },
          {
            type: 'multiple-choice',
            question: '供应链管理的目标不包括？',
            options: ['提高效率', '降低成本', '增加库存', '提升客户满意度'],
            correctAnswer: '增加库存'
          },
          {
            type: 'multiple-choice',
            question: '供应链的 "牛鞭效应" 是指？',
            options: ['需求放大', '成本增加', '质量下降', '速度减慢'],
            correctAnswer: '需求放大'
          },
          {
            type: 'code',
            question: '编写一个简单的供应链模拟程序',
            codeTemplate: `# 供应链模拟
suppliers = ["供应商A", "供应商B"]
manufacturer = "制造商"
distributors = ["分销商1", "分销商2"]
retailers = ["零售商A", "零售商B", "零售商C"]

print("供应链流程:")
for supplier in suppliers:
    print("{supplier} → {manufacturer}".format(supplier=supplier, manufacturer=manufacturer))

for distributor in distributors:
    print("{manufacturer} → {distributor}".format(manufacturer=manufacturer, distributor=distributor))

for retailer in retailers:
    print("分销商1 → {retailer}".format(retailer=retailer))
    print("分销商2 → {retailer}".format(retailer=retailer))`
          },
          {
            type: 'code',
            question: '创建供应链数据并可视化供应链结构',
            codeTemplate: '# 供应链数据可视化\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 供应链数据\nsc_data = {\n    "阶段": ["供应商", "制造商", "分销商", "零售商"],\n    "数量": [2, 1, 2, 3],\n    "平均交付天数": [5, 7, 3, 2]\n}\n\ndf = pd.DataFrame(sc_data)\nprint(df)\n\n# 可视化\nfig, ax1 = plt.subplots(figsize=(10, 5))\n\nax2 = ax1.twinx()\nax1.bar(df["阶段"], df["数量"], color="skyblue", alpha=0.5)\nax2.plot(df["阶段"], df["平均交付天数"], color="orange", marker="o")\n\nax1.set_ylabel("数量")\nax2.set_ylabel("平均交付天数")\nplt.title("供应链结构和交付绩效")\nplt.show()'
          },
          {
            type: 'code',
            question: '计算供应链总交付时间',
            codeTemplate: `# 计算供应链总交付时间
# 各阶段的交付时间（天）
supplier_lead_time = 5
manufacturing_time = 7
distributor_lead_time = 3
retailer_delivery = 2

total_lead_time = supplier_lead_time + manufacturing_time + distributor_lead_time + retailer_delivery

print("各阶段交付时间:")
print("供应商: {supplier_lead_time} 天".format(supplier_lead_time=supplier_lead_time))
print("制造商: {manufacturing_time} 天".format(manufacturing_time=manufacturing_time))
print("分销商: {distributor_lead_time} 天".format(distributor_lead_time=distributor_lead_time))
print("零售商: {retailer_delivery} 天".format(retailer_delivery=retailer_delivery))
print("\\n总交付时间: {total_lead_time} 天".format(total_lead_time=total_lead_time))`
          }
        ]
      },
      {
        id: 'chapter2',
        title: '供应链数据来源和指标',
        content: [
          '供应链数据的类型和来源',
          '关键绩效指标（KPI）',
          '数据收集和管理',
          '数据质量控制'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项是供应链的关键绩效指标？',
            options: ['库存周转率', '客户满意度', '订单交付周期', '以上都是'],
            correctAnswer: '以上都是'
          },
          {
            type: 'multiple-choice',
            question: 'KPI 是什么的缩写？',
            options: ['Key Performance Indicator', 'Key Process Input', 'Knowledge Performance Index', 'Key Product Information'],
            correctAnswer: 'Key Performance Indicator'
          },
          {
            type: 'multiple-choice',
            question: '订单完成率是指？',
            options: ['按时完成的订单比例', '订单总金额', '订单数量', '客户数量'],
            correctAnswer: '按时完成的订单比例'
          },
          {
            type: 'code',
            question: '计算库存周转率',
            codeTemplate: `# 计算库存周转率\ncost_of_goods_sold = 1000000  # 销货成本\naverage_inventory = 200000  # 平均库存\n\ninventory_turnover = cost_of_goods_sold / average_inventory\nprint("库存周转率: {:.2f}".format(inventory_turnover))` 
          },
          {
            type: 'code',
            question: '计算并分析多个 KPI',
            codeTemplate: `# 计算供应链 KPI\nimport pandas as pd\n\n# 模拟数据\ndata = {\n    "月份": ["1月", "2月", "3月", "4月", "5月", "6月"],\n    "订单总数": [100, 120, 110, 130, 140, 150],\n    "准时完成订单": [95, 108, 100, 124, 133, 142],\n    "平均库存": [500, 520, 480, 510, 490, 505],\n    "销售成本": [80000, 90000, 85000, 95000, 100000, 105000]\n}\n\ndf = pd.DataFrame(data)\n\n# 计算 KPI\ndf["订单完成率"] = df["准时完成订单"] / df["订单总数"] * 100\ndf["库存周转率"] = df["销售成本"] / df["平均库存"]\n\nprint("KPI 数据表:")\nprint(df)\n\nprint("\\n平均 KPI:")\nprint("平均订单完成率: {:.2f}%".format(df["订单完成率"].mean()))\nprint("平均库存周转率: {:.2f}".format(df["库存周转率"].mean()))`
          },
          {
            type: 'code',
            question: '可视化 KPI 趋势',
            codeTemplate: `# KPI 趋势可视化\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 模拟数据\ndata = {\n    "月份": ["1月", "2月", "3月", "4月", "5月", "6月"],\n    "订单完成率": [95, 90, 91, 95, 95, 95],\n    "库存周转率": [160, 173, 177, 186, 204, 208]\n}\n\ndf = pd.DataFrame(data)\n\n# 可视化\nfig, axes = plt.subplots(1, 2, figsize=(12, 5))\n\naxes[0].plot(df["月份"], df["订单完成率"], marker="o", color="green")\naxes[0].set_title("订单完成率趋势")\naxes[0].set_ylim(85, 100)\n\naxes[1].plot(df["月份"], df["库存周转率"], marker="s", color="blue")\naxes[1].set_title("库存周转率趋势")\n\nplt.tight_layout()\nplt.show()`
          }
        ]
      },
      {
        id: 'chapter3',
        title: '库存分析与优化',
        content: [
          '库存管理的基本概念',
          '库存成本分析',
          '库存优化模型',
          '安全库存和再订货点'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项不是库存成本的组成部分？',
            options: ['持有成本', '订购成本', '缺货成本', '运输成本'],
            correctAnswer: '运输成本'
          },
          {
            type: 'multiple-choice',
            question: '安全库存的主要目的是？',
            options: ['增加销售', '应对需求波动', '降低成本', '提高质量'],
            correctAnswer: '应对需求波动'
          },
          {
            type: 'multiple-choice',
            question: 'ABC 分类法中，A 类物料通常是？',
            options: ['价值高、数量少', '价值低、数量多', '价值中等、数量中等', '以上都不是'],
            correctAnswer: '价值高、数量少'
          },
          {
            type: 'code',
            question: '计算经济订货批量（EOQ）',
            codeTemplate: `# 计算经济订货批量（EOQ）
annual_demand = 10000  # 年需求量
ordering_cost = 50  # 每次订购成本
holding_cost = 10  # 单位年持有成本

eoq = (2 * annual_demand * ordering_cost / holding_cost) ** 0.5
print("经济订货批量: {eoq:.2f}".format(eoq=eoq))`
          },
          {
            type: 'code',
            question: '计算安全库存',
            codeTemplate: `# 计算安全库存
import math

# 参数
z_score = 1.96  # 95% 服务水平的 Z 值
std_demand = 10  # 日需求标准差
lead_time = 7  # 交付提前期（天）

# 安全库存计算
safety_stock = z_score * std_demand * math.sqrt(lead_time)

print("安全库存计算:")
print("Z 值 (95% 服务水平): {z_score}".format(z_score=z_score))
print("日需求标准差: {std_demand}".format(std_demand=std_demand))
print("交付提前期: {lead_time} 天".format(lead_time=lead_time))
print("安全库存: {safety_stock:.2f}".format(safety_stock=safety_stock))`
          },
          {
            type: 'code',
            question: '计算再订货点',
            codeTemplate: `# 计算再订货点
import math

# 参数
average_daily_demand = 20  # 平均日需求
lead_time = 7  # 交付提前期（天）
z_score = 1.96  # 95% 服务水平
std_demand = 5  # 日需求标准差

# 再订货点计算
demand_during_lead_time = average_daily_demand * lead_time
safety_stock = z_score * std_demand * math.sqrt(lead_time)
reorder_point = demand_during_lead_time + safety_stock

print("再订货点计算:")
print("平均日需求: {average_daily_demand}".format(average_daily_demand=average_daily_demand))
print("交付提前期: {lead_time} 天".format(lead_time=lead_time))
print("提前期内需求量: {demand_during_lead_time}".format(demand_during_lead_time=demand_during_lead_time))
print("安全库存: {safety_stock:.2f}".format(safety_stock=safety_stock))
print("再订货点: {reorder_point:.2f}".format(reorder_point=reorder_point))`
          }
        ]
      },
      {
        id: 'chapter4',
        title: '需求预测方法',
        content: [
          '需求预测的基本概念',
          '时间序列分析',
          '回归分析',
          '预测模型的评估'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项是时间序列分析的方法？',
            options: ['移动平均', '指数平滑', 'ARIMA', '以上都是'],
            correctAnswer: '以上都是'
          },
          {
            type: 'multiple-choice',
            question: '适合短期预测的方法是？',
            options: ['移动平均', '线性回归', '专家判断', '以上都不是'],
            correctAnswer: '移动平均'
          },
          {
            type: 'multiple-choice',
            question: '预测误差的衡量指标不包括？',
            options: ['MSE', 'MAE', 'MAPE', 'GDP'],
            correctAnswer: 'GDP'
          },
          {
            type: 'code',
            question: '使用移动平均法进行需求预测',
            codeTemplate: '# 移动平均法预测\ndemand = [100, 120, 110, 130, 140, 150, 160]\nn = 3  # 移动平均窗口\n\nmoving_averages = []\nfor i in range(len(demand) - n + 1):\n    window = demand[i:i+n]\n    avg = sum(window) / n\n    moving_averages.append(avg)\n\nprint("移动平均预测结果:")\nprint(moving_averages)' 
          },
          {
            type: 'code',
            question: '计算指数平滑预测',
            codeTemplate: '# 指数平滑预测\ndemand = [100, 120, 110, 130, 140, 150, 160]\nalpha = 0.3  # 平滑系数\n\n# 初始化预测\npredictions = [demand[0]]  # 第一个值作为初始预测\n\nfor i in range(1, len(demand)):\n    next_pred = alpha * demand[i-1] + (1 - alpha) * predictions[-1]\n    predictions.append(next_pred)\n\nprint("实际需求:", demand)\nprint("指数平滑预测:", [round(p, 2) for p in predictions])'
          },
          {
            type: 'code',
            question: '可视化预测结果并计算误差',
            codeTemplate: `# 需求预测可视化和误差分析
import matplotlib.pyplot as plt
import numpy as np

# 数据
months = [1, 2, 3, 4, 5, 6]
actual = [100, 120, 110, 130, 140, 150]
predicted = [100, 100, 106, 115, 123, 131]

# 计算误差
errors = np.array(actual) - np.array(predicted)
mse = np.mean(errors ** 2)
mae = np.mean(np.abs(errors))

print("均方误差 (MSE): {mse:.2f}".format(mse=mse))
print("平均绝对误差 (MAE): {mae:.2f}".format(mae=mae))

# 可视化
plt.figure(figsize=(10, 6))
plt.plot(months, actual, marker="o", label="实际需求", color="blue")
plt.plot(months, predicted, marker="s", label="预测需求", color="red", linestyle="--")
plt.xlabel("月份")
plt.ylabel("需求量")
plt.title("需求预测对比")
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`
          }
        ]
      },
      {
        id: 'chapter5',
        title: '供应商评估与选择',
        content: [
          '供应商评估的指标体系',
          '供应商选择的方法',
          '供应商关系管理',
          '供应商绩效监控'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项不是供应商评估的指标？',
            options: ['价格', '质量', '交货时间', '供应商员工数量'],
            correctAnswer: '供应商员工数量'
          },
          {
            type: 'multiple-choice',
            question: '供应商选择的常用方法不包括？',
            options: ['加权评分法', 'AHP层次分析法', '随机选择法', '成本分析法'],
            correctAnswer: '随机选择法'
          },
          {
            type: 'multiple-choice',
            question: '质量管理中常用的指标是？',
            options: ['缺陷率', '利润率', '周转率', '产量'],
            correctAnswer: '缺陷率'
          },
          {
            type: 'code',
            question: '使用加权评分法评估供应商',
            codeTemplate: `# 供应商评估
suppliers = ["供应商A", "供应商B", "供应商C"]
criteria = {"价格": 0.3, "质量": 0.4, "交货时间": 0.3}

# 评分（1-5分）
scores = {
    "供应商A": {"价格": 4, "质量": 5, "交货时间": 3},
    "供应商B": {"价格": 3, "质量": 4, "交货时间": 5},
    "供应商C": {"价格": 5, "质量": 3, "交货时间": 4}
}

# 计算加权总分
results = {}
for supplier in suppliers:
    total_score = 0
    for crit, weight in criteria.items():
        total_score += scores[supplier][crit] * weight
    results[supplier] = total_score
    print("{supplier} 的加权总分: {total_score:.2f}".format(supplier=supplier, total_score=total_score))

# 找出最佳供应商
best_supplier = max(results, key=results.get)
print("\\n推荐选择: {best_supplier}".format(best_supplier=best_supplier))`
          },
          {
            type: 'code',
            question: '可视化供应商评分对比',
            codeTemplate: '# 供应商评分可视化\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# 数据\nsuppliers = ["供应商A", "供应商B", "供应商C"]\ncriteria = ["价格", "质量", "交货时间"]\nscores = np.array([\n    [4, 5, 3],   # 供应商A\n    [3, 4, 5],   # 供应商B\n    [5, 3, 4]    # 供应商C\n])\nweights = [0.3, 0.4, 0.3]  # 权重\n\n# 可视化雷达图\nfig, ax = plt.subplots(figsize=(10, 6))\nangles = np.linspace(0, 2 * np.pi, len(criteria), endpoint=False)\nangles = np.concatenate((angles, [angles[0]]))  # 闭合\n\nfor i, supplier in enumerate(suppliers):\n    score = np.concatenate((scores[i], [scores[i][0]]))  # 闭合\n    ax.plot(angles, score, marker="o", label=supplier)\n    ax.fill(angles, score, alpha=0.25)\n\nax.set_xticks(angles[:-1])\nax.set_xticklabels(criteria)\nax.set_ylim(0, 6)\nax.set_title("供应商评分对比")\nax.legend(loc="upper right")\nax.grid(True)\n\nplt.tight_layout()\nplt.show()'
          },
          {
            type: 'code',
            question: '分析供应商历史绩效数据',
            codeTemplate: '# 供应商历史绩效分析\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 模拟数据\nmonths = ["1月", "2月", "3月", "4月", "5月", "6月"]\nsupplier_a_qc = [98, 97, 99, 98, 97, 99]  # 质量合格率\nsupplier_a_ot = [95, 94, 96, 98, 97, 98]    # 准时交付率\n\ndf = pd.DataFrame({\n    "月份": months,\n    "质量合格率": supplier_a_qc,\n    "准时交付率": supplier_a_ot\n})\n\nprint("供应商A历史绩效:")\nprint(df)\nprint("\\n平均绩效:")\nprint(df.mean())\n\n# 可视化\nplt.figure(figsize=(10, 6))\nplt.plot(df["月份"], df["质量合格率"], marker="o", label="质量合格率", color="green")\nplt.plot(df["月份"], df["准时交付率"], marker="s", label="准时交付率", color="blue")\nplt.title("供应商A绩效趋势")\nplt.ylim(90, 100)\nplt.ylabel("百分比")\nplt.legend()\nplt.grid(True, alpha=0.3)\nplt.show()'
          }
        ]
      },
      {
        id: 'chapter6',
        title: '供应链可视化',
        content: [
          '供应链数据可视化的重要性',
          '常用的可视化工具',
          '供应链网络可视化',
          '绩效 dashboard 设计'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项不是常用的数据可视化工具？',
            options: ['Excel', 'Tableau', 'Power BI', 'Word'],
            correctAnswer: 'Word'
          },
          {
            type: 'multiple-choice',
            question: '用于展示数据变化趋势的图表是？',
            options: ['饼图', '折线图', '直方图', '散点图'],
            correctAnswer: '折线图'
          },
          {
            type: 'multiple-choice',
            question: 'Dashboard 的主要特点是？',
            options: ['详细的报告', '实时监控', '数据存储', '数据收集'],
            correctAnswer: '实时监控'
          },
          {
            type: 'code',
            question: '使用 Matplotlib 可视化供应链绩效数据',
            codeTemplate: 'import matplotlib.pyplot as plt\n\nmonths = ["1月", "2月", "3月", "4月", "5月", "6月"]\norder_fulfillment_rate = [95, 92, 94, 96, 98, 97]\ninventory_turnover = [4.2, 3.8, 4.0, 4.5, 4.8, 4.6]\n\nplt.figure(figsize=(10, 5))\nplt.subplot(1, 2, 1)\nplt.plot(months, order_fulfillment_rate, marker="o")\nplt.title("订单履行率")\nplt.ylim(90, 100)\n\nplt.subplot(1, 2, 2)\nplt.plot(months, inventory_turnover, marker="o")\nplt.title("库存周转率")\n\nplt.tight_layout()\nplt.show()' 
          },
          {
            type: 'code',
            question: '创建供应链绩效 dashboard',
            codeTemplate: '# 供应链绩效 Dashboard\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# 模拟数据\n# 1. 各供应商订单数量\nsuppliers = ["供应商A", "供应商B", "供应商C", "供应商D"]\norder_counts = [120, 95, 85, 70]\n\n# 2. 月度订单完成率\nmonths = ["1月", "2月", "3月", "4月", "5月", "6月"]\nfulfillment_rates = [95, 92, 94, 96, 98, 97]\n\n# 3. 库存分类\ninventory_categories = ["原材料", "在制品", "成品", "备品"]\ninventory_values = [35, 25, 30, 10]\n\n# 4. 产品销售量分布\nproducts = ["产品1", "产品2", "产品3", "产品4", "产品5"]\nsales = [250, 200, 180, 150, 120]\n\n# 创建 Dashboard\nfig = plt.figure(figsize=(14, 10))\nfig.suptitle("供应链绩效 Dashboard", fontsize=16, fontweight="bold")\n\n# 子图1：供应商订单分布\nax1 = plt.subplot(2, 2, 1)\nax1.bar(suppliers, order_counts, color="skyblue")\nax1.set_title("供应商订单数量")\nax1.set_ylabel("订单数")\n\n# 子图2：订单完成率趋势\nax2 = plt.subplot(2, 2, 2)\nax2.plot(months, fulfillment_rates, marker="o", color="green", linewidth=2)\nax2.set_title("月度订单完成率")\nax2.set_ylim(90, 100)\nax2.grid(True, alpha=0.3)\n\n# 子图3：库存价值分布\nax3 = plt.subplot(2, 2, 3)\nax3.pie(inventory_values, labels=inventory_categories, autopct="%1.1f%%", colors=["#ff9999","#66b3ff","#99ff99","#ffcc99"])\nax3.set_title("库存价值分布")\n\n# 子图4：产品销售分布\nax4 = plt.subplot(2, 2, 4)\nax4.barh(products, sales, color="coral")\nax4.set_title("产品销售量")\nax4.set_xlabel("销售量")\n\nplt.tight_layout(rect=[0, 0, 1, 0.96])\nplt.show()'
          },
          {
            type: 'code',
            question: '使用热力图可视化供应链绩效矩阵',
            codeTemplate: '# 供应链绩效矩阵可视化\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport seaborn as sns\n\n# 数据\nproducts = ["产品A", "产品B", "产品C", "产品D", "产品E"]\nsuppliers = ["供应商1", "供应商2", "供应商3", "供应商4", "供应商5"]\n\n# 绩效评分（1-10）\nperformance_matrix = np.array([\n    [8, 7, 9, 6, 8],\n    [7, 9, 8, 7, 6],\n    [9, 8, 7, 8, 9],\n    [6, 7, 8, 9, 7],\n    [8, 6, 9, 7, 8]\n])\n\n# 创建热力图\nplt.figure(figsize=(10, 8))\nsns.heatmap(performance_matrix, annot=True, cmap="YlGnBu", cbar=True,\n            xticklabels=products, yticklabels=suppliers,\n            vmin=5, vmax=10, linewidths=0.5, fmt="d")\n\nplt.title("供应商-产品绩效矩阵")\nplt.tight_layout()\nplt.show()'
          }
        ]
      }
    ],
    assessment: [
      { type: '平时作业', weight: 20 },
      { type: '案例分析', weight: 30 },
      { type: '供应链优化项目', weight: 30 },
      { type: '期末考试', weight: 20 }
    ],
    learningCenter: {
      resources: [
        '《供应链管理》',
        '《供应链数据分析》',
        '《库存管理与控制》',
        '《需求预测与管理》',
        '供应链管理软件教程'
      ],
      progress: 0
    },
    skills: ['供应链管理', '库存优化', '需求预测', '供应商管理', '数据分析', '可视化']
  },
  {
    id: 'database-principles',
    title: '数据库原理与应用',
    shortDesc: '数据库设计与SQL',
    description: '学习数据库系统的基本原理、关系型数据库设计、SQL 语言、数据库管理系统的使用等内容。掌握 MySQL、PostgreSQL 等数据库的基本操作。',
    icon: '🗄️',
    objectives: [
      '理解数据库系统的基本原理',
      '掌握关系型数据库的设计方法',
      '熟练使用 SQL 语言进行数据操作',
      '能够设计和管理数据库系统'
    ],
    chapters: [
      {
        id: 'chapter1',
        title: '数据库系统概述',
        content: [
          '数据库的基本概念',
          '数据库系统的组成',
          '数据库管理系统（DBMS）',
          '数据库的发展历程'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项不是数据库系统的组成部分？',
            options: ['数据库', '数据库管理系统', '应用程序', '操作系统'],
            correctAnswer: '操作系统'
          },
          {
            type: 'multiple-choice',
            question: '以下哪种数据库是关系型数据库？',
            options: ['MongoDB', 'MySQL', 'Redis', 'HBase'],
            correctAnswer: 'MySQL'
          },
          {
            type: 'multiple-choice',
            question: '数据库管理系统的英文缩写是？',
            options: ['DBMS', 'DBS', 'DB', 'SQL'],
            correctAnswer: 'DBMS'
          },
          {
            type: 'code',
            question: '编写一个 SQL 语句，创建一个简单的学生表',
            codeTemplate: 'CREATE TABLE students (\n    id INT PRIMARY KEY,\n    name VARCHAR(50) NOT NULL,\n    age INT,\n    grade VARCHAR(20)\n);' 
          },
          {
            type: 'code',
            question: '创建课程表和选课表',
            codeTemplate: '-- 创建课程表\nCREATE TABLE courses (\n    course_id INT PRIMARY KEY,\n    course_name VARCHAR(100) NOT NULL,\n    teacher VARCHAR(50),\n    credit DECIMAL(3,1),\n    hours INT\n);\n\n-- 创建选课表\nCREATE TABLE enrollments (\n    enrollment_id INT PRIMARY KEY,\n    student_id INT,\n    course_id INT,\n    enrollment_date DATE,\n    grade CHAR(2)\n);'
          },
          {
            type: 'code',
            question: '创建包含主键和外键的订单数据库',
            codeTemplate: '-- 创建客户表\nCREATE TABLE customers (\n    customer_id INT PRIMARY KEY,\n    name VARCHAR(50) NOT NULL,\n    email VARCHAR(100),\n    phone VARCHAR(20)\n);\n\n-- 创建订单表\nCREATE TABLE orders (\n    order_id INT PRIMARY KEY,\n    customer_id INT,\n    order_date DATE,\n    total_amount DECIMAL(10,2),\n    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)\n);'
          }
        ]
      },
      {
        id: 'chapter2',
        title: '关系模型和关系代数',
        content: [
          '关系模型的基本概念',
          '关系的性质',
          '关系代数运算',
          '关系完整性约束'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '关系代数中用于选择操作的符号是？',
            options: ['σ', 'π', '⋈', '∪'],
            correctAnswer: 'σ'
          },
          {
            type: 'multiple-choice',
            question: '关系代数中投影操作的符号是？',
            options: ['σ', 'π', '⋈', '∪'],
            correctAnswer: 'π'
          },
          {
            type: 'multiple-choice',
            question: '关系代数中连接操作的符号是？',
            options: ['σ', 'π', '⋈', '∪'],
            correctAnswer: '⋈'
          },
          {
            type: 'code',
            question: '使用关系代数表示查询：选择年龄大于 18 的学生',
            codeTemplate: 'σ age > 18 (students)' 
          },
          {
            type: 'code',
            question: '使用关系代数表示查询：选择学生姓名和班级',
            codeTemplate: 'π name, grade (students)'
          },
          {
            type: 'code',
            question: '使用关系代数表示查询：学生和课程的连接',
            codeTemplate: 'students ⋈ enrollments ⋈ courses'
          }
        ]
      },
      {
        id: 'chapter3',
        title: 'SQL 基础（查询、插入、更新、删除）',
        content: [
          'SQL 的基本语法',
          'SELECT 语句',
          'INSERT、UPDATE、DELETE 语句',
          'WHERE 子句和条件表达式'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'SQL 中用于插入数据的语句是？',
            options: ['INSERT', 'UPDATE', 'DELETE', 'SELECT'],
            correctAnswer: 'INSERT'
          },
          {
            type: 'multiple-choice',
            question: 'SQL 中用于查询数据的语句是？',
            options: ['INSERT', 'UPDATE', 'DELETE', 'SELECT'],
            correctAnswer: 'SELECT'
          },
          {
            type: 'multiple-choice',
            question: 'SQL 中用于从表中删除数据的语句是？',
            options: ['INSERT', 'UPDATE', 'DELETE', 'SELECT'],
            correctAnswer: 'DELETE'
          },
          {
            type: 'code',
            question: '编写 SQL 语句，向学生表插入一条记录',
            codeTemplate: 'INSERT INTO students (id, name, age, grade) VALUES (1, "张三", 19, "大二");' 
          },
          {
            type: 'code',
            question: '查询所有学生信息',
            codeTemplate: 'SELECT * FROM students;'
          },
          {
            type: 'code',
            question: '查询年龄大于20岁的学生姓名',
            codeTemplate: 'SELECT name FROM students WHERE age > 20;'
          },
          {
            type: 'code',
            question: '更新学生年龄',
            codeTemplate: 'UPDATE students SET age = 20 WHERE name = "张三";'
          },
          {
            type: 'code',
            question: '删除指定学生记录',
            codeTemplate: 'DELETE FROM students WHERE name = "李四";'
          }
        ]
      },
      {
        id: 'chapter4',
        title: '数据库设计（ER 图、规范化）',
        content: [
          '实体-关系（ER）模型',
          'ER 图的绘制',
          '关系模式的规范化',
          '范式理论'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '以下哪项不是规范化的范式？',
            options: ['第一范式', '第二范式', '第三范式', '第四范式'],
            correctAnswer: '第四范式'
          },
          {
            type: 'multiple-choice',
            question: '第一范式的要求是？',
            options: ['属性原子性', '消除部分依赖', '消除传递依赖', '消除多值依赖'],
            correctAnswer: '属性原子性'
          },
          {
            type: 'multiple-choice',
            question: '第二范式是在第一范式基础上消除了？',
            options: ['传递依赖', '部分依赖', '多值依赖', '函数依赖'],
            correctAnswer: '部分依赖'
          },
          {
            type: 'code',
            question: '设计一个简单的图书馆数据库，包含图书和读者表',
            codeTemplate: '-- 创建图书表\nCREATE TABLE books (\n    book_id INT PRIMARY KEY,\n    title VARCHAR(100) NOT NULL,\n    author VARCHAR(50),\n    isbn VARCHAR(20),\n    quantity INT\n);\n\n-- 创建读者表\nCREATE TABLE readers (\n    reader_id INT PRIMARY KEY,\n    name VARCHAR(50) NOT NULL,\n    student_id VARCHAR(20),\n    phone VARCHAR(15)\n);' 
          },
          {
            type: 'code',
            question: '创建借阅记录表',
            codeTemplate: '-- 创建借阅记录表\nCREATE TABLE borrow_records (\n    borrow_id INT PRIMARY KEY,\n    book_id INT,\n    reader_id INT,\n    borrow_date DATE,\n    return_date DATE,\n    FOREIGN KEY (book_id) REFERENCES books(book_id),\n    FOREIGN KEY (reader_id) REFERENCES readers(reader_id)\n);'
          },
          {
            type: 'code',
            question: '创建产品和订单的规范化设计',
            codeTemplate: '-- 产品表\nCREATE TABLE products (\n    product_id INT PRIMARY KEY,\n    product_name VARCHAR(100) NOT NULL,\n    price DECIMAL(8,2),\n    stock INT\n);\n\n-- 订单表\nCREATE TABLE orders (\n    order_id INT PRIMARY KEY,\n    order_date DATE,\n    customer_name VARCHAR(50)\n);\n\n-- 订单详情表\nCREATE TABLE order_items (\n    order_id INT,\n    product_id INT,\n    quantity INT,\n    PRIMARY KEY (order_id, product_id),\n    FOREIGN KEY (order_id) REFERENCES orders(order_id),\n    FOREIGN KEY (product_id) REFERENCES products(product_id)\n);'
          }
        ]
      },
      {
        id: 'chapter5',
        title: '索引和视图',
        content: [
          '索引的基本概念',
          '索引的类型和创建',
          '视图的定义和使用',
          '索引和视图的优化'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: 'SQL 中创建索引的语句是？',
            options: ['CREATE INDEX', 'CREATE VIEW', 'CREATE TABLE', 'CREATE INDEXES'],
            correctAnswer: 'CREATE INDEX'
          },
          {
            type: 'multiple-choice',
            question: 'SQL 中创建视图的语句是？',
            options: ['CREATE INDEX', 'CREATE VIEW', 'CREATE TABLE', 'CREATE INDEXES'],
            correctAnswer: 'CREATE VIEW'
          },
          {
            type: 'multiple-choice',
            question: '索引的主要作用是？',
            options: ['提高查询速度', '提高数据安全性', '减少存储空间', '简化数据查询'],
            correctAnswer: '提高查询速度'
          },
          {
            type: 'code',
            question: '为学生表的 name 列创建索引',
            codeTemplate: 'CREATE INDEX idx_student_name ON students (name);' 
          },
          {
            type: 'code',
            question: '创建视图：查看所有大二学生的信息',
            codeTemplate: 'CREATE VIEW view_sophomore_students AS\nSELECT id, name, age\nFROM students\nWHERE grade = "大二";'
          },
          {
            type: 'code',
            question: '创建复合索引',
            codeTemplate: 'CREATE INDEX idx_student_name_grade ON students (name, grade);'
          },
          {
            type: 'code',
            question: '查看视图',
            codeTemplate: 'SELECT * FROM view_sophomore_students;'
          }
        ]
      },
      {
        id: 'chapter6',
        title: '事务和并发控制',
        content: [
          '事务的基本概念和特性',
          '并发控制的必要性',
          '锁机制',
          '事务隔离级别'
        ],
        exercises: [
          {
            type: 'multiple-choice',
            question: '事务的 ACID 特性不包括？',
            options: ['原子性', '一致性', '隔离性', '可扩展性'],
            correctAnswer: '可扩展性'
          },
          {
            type: 'multiple-choice',
            question: '事务的 ACID 特性中，I 代表什么？',
            options: ['原子性', '一致性', '隔离性', '持久性'],
            correctAnswer: '隔离性'
          },
          {
            type: 'multiple-choice',
            question: '用于提交事务的语句是？',
            options: ['COMMIT', 'ROLLBACK', 'START', 'STOP'],
            correctAnswer: 'COMMIT'
          },
          {
            type: 'code',
            question: '编写一个包含事务的 SQL 语句',
            codeTemplate: 'START TRANSACTION;\n\n-- 扣除账户 A 的余额\nUPDATE accounts SET balance = balance - 100 WHERE account_id = 1;\n\n-- 增加账户 B 的余额\nUPDATE accounts SET balance = balance + 100 WHERE account_id = 2;\n\nCOMMIT;' 
          },
          {
            type: 'code',
            question: '事务回滚示例',
            codeTemplate: 'START TRANSACTION;\n\nUPDATE inventory SET stock = stock - 10 WHERE product_id = 1;\n\n-- 发生错误，回滚事务\nROLLBACK;'
          },
          {
            type: 'code',
            question: '银行转账事务',
            codeTemplate: 'START TRANSACTION;\n\n-- 从账户A转1000元到账户B\nUPDATE accounts SET balance = balance - 1000 WHERE account_number = "A";\nUPDATE accounts SET balance = balance + 1000 WHERE account_number = "B";\n\n-- 记录交易记录\nINSERT INTO transaction_logs (from_account, to_account, amount, transaction_date)\nVALUES ("A", "B", 1000, CURDATE());\n\nCOMMIT;\n'
          }
        ]
      }
    ],
    assessment: [
      { type: '平时作业', weight: 25 },
      { type: '实验报告', weight: 25 },
      { type: '数据库设计项目', weight: 30 },
      { type: '期末考试', weight: 20 }
    ],
    learningCenter: {
      resources: [
        '《数据库系统概论》',
        '《SQL必知必会》',
        'MySQL官方文档',
        'PostgreSQL官方文档',
        '数据库设计教程'
      ],
      progress: 0
    },
    skills: ['SQL', '数据库设计', '数据库管理', '数据建模', '事务处理']
  },
];
