import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { ArrowLeft, ChevronDown, ChevronUp, BookOpen, Book, BarChart3, FileText, CheckCircle, XCircle, Code, ListChecks, Clock, Award, Target, Users } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({});
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, { 
    selectedAnswer: number | null; 
    showResult: boolean;
    codeAnswer: string;
    codeShowResult: boolean;
    codeIsCorrect: boolean;
    codeOutput: string;
  }>>({});

  type ExerciseState = {
    selectedAnswer: number | null; 
    showResult: boolean;
    codeAnswer: string;
    codeShowResult: boolean;
    codeIsCorrect: boolean;
    codeOutput: string;
  };

  const toggleChapter = (chapter: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapter]: !prev[chapter]
    }));
  };

  const getExerciseKey = (chapterId: string, exerciseIdx: number) => `${chapterId}-${exerciseIdx}`;

  const handleSelectAnswer = (chapterId: string, exerciseIdx: number, answerIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const current = exerciseAnswers[key] || { codeAnswer: '', codeShowResult: false, codeIsCorrect: false, codeOutput: '' };
    setExerciseAnswers(prev => ({
      ...prev,
      [key]: { 
        selectedAnswer: answerIdx, 
        showResult: prev[key]?.showResult || false,
        codeAnswer: current.codeAnswer,
        codeShowResult: current.codeShowResult,
        codeIsCorrect: current.codeIsCorrect,
        codeOutput: current.codeOutput
      }
    }));
  };

  const handleSubmitAnswer = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const current = exerciseAnswers[key];
    if (current?.selectedAnswer !== null) {
      setExerciseAnswers(prev => ({
        ...prev,
        [key]: { 
          ...current, 
          showResult: true,
          codeAnswer: current.codeAnswer || '',
          codeShowResult: current.codeShowResult || false,
          codeIsCorrect: current.codeIsCorrect || false,
          codeOutput: current.codeOutput || ''
        }
      }));
    }
  };

  const resetAnswer = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const current = exerciseAnswers[key] || { codeAnswer: '', codeShowResult: false, codeIsCorrect: false, codeOutput: '' };
    setExerciseAnswers(prev => ({
      ...prev,
      [key]: { 
        selectedAnswer: null, 
        showResult: false,
        codeAnswer: current.codeAnswer,
        codeShowResult: current.codeShowResult,
        codeIsCorrect: current.codeIsCorrect,
        codeOutput: current.codeOutput
      }
    }));
  };

  const getExerciseState = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    return exerciseAnswers[key] || { 
      selectedAnswer: null, 
      showResult: false,
      codeAnswer: '',
      codeShowResult: false,
      codeIsCorrect: false,
      codeOutput: ''
    };
  };

  const handleCodeChange = (chapterId: string, exerciseIdx: number, code: string) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    setExerciseAnswers(prev => ({
      ...prev,
      [key]: { ...prev[key], codeAnswer: code }
    }));
  };

  const handleCodeSubmit = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const exercise = course?.chapters.find(c => c.id === chapterId)?.exercises[exerciseIdx];
    if (!exercise) return;

    const code = exerciseAnswers[key]?.codeAnswer || '';
    let output = '';
    let isCorrect = false;
    const errors: string[] = [];

    // 首先进行严格的语法检查
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

      // 如果有语法错误，直接返回错误
      if (errors.length > 0) {
        output = "❌ 语法错误！\n\n代码检查发现以下问题：\n\n";
        errors.forEach(err => output += "• " + err + "\n");
        output += "\n请修复错误后重新运行。";
        isCorrect = false;
      } else {
        // 语法检查通过后，再检查输出
        if (exercise.expectedOutput) {
          const mockOutput = simulateCodeExecution(code);
          output = mockOutput.output;
          isCorrect = mockOutput.isCorrect(exercise.expectedOutput);
          if (!isCorrect) {
            output = `❌ 输出不匹配\n\n你的输出:\n${output || '(无输出)'}\n\n期望输出:\n${exercise.expectedOutput}`;
          } else {
            output = "✅ 代码执行正确！\n\n输出结果：\n" + output;
          }
        } else {
          const validation = validateCodeStructure(code);
          isCorrect = validation.isValid;
          output = validation.message;
        }
      }
    }

    setExerciseAnswers(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        codeShowResult: true,
        codeIsCorrect: isCorrect,
        codeOutput: output
      }
    }));
  };

  const simulateCodeExecution = (code: string) => {
    let output = '';
    let variableValues: Record<string, string | number> = {};
    const lines = code.split('\n');
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('print(')) {
        const match = line.match(/print\(['"]?(.+?)['"]?\)/);
        if (match) {
          let value = match[1];
          if (variableValues[value] !== undefined) {
            value = String(variableValues[value]);
          }
          output += value + '\n';
        } else {
          const exprMatch = line.match(/print\((.+)\)/);
          if (exprMatch) {
            try {
              const result = evaluateExpression(exprMatch[1], variableValues);
              output += String(result) + '\n';
            } catch {
              output += exprMatch[1] + '\n';
            }
          }
        }
      } else if (trimmedLine.includes('=')) {
        const parts = trimmedLine.split('=');
        if (parts.length === 2) {
          const varName = parts[0].trim();
          const varValue = parts[1].trim();
          if (!isNaN(Number(varValue))) {
            variableValues[varName] = Number(varValue);
          } else if (varValue.startsWith('"') && varValue.endsWith('"')) {
            variableValues[varName] = varValue.slice(1, -1);
          } else if (varValue.startsWith("'") && varValue.endsWith("'")) {
            variableValues[varName] = varValue.slice(1, -1);
          } else {
            variableValues[varName] = varValue;
          }
        }
      }
    });

    return {
      output: output.trim(),
      isCorrect: (expected: string) => {
        const normalizedOutput = output.trim().replace(/\s+/g, ' ');
        const normalizedExpected = expected.trim().replace(/\s+/g, ' ');
        return normalizedOutput.includes(normalizedExpected) || normalizedExpected.includes(normalizedOutput);
      }
    };
  };

  const evaluateExpression = (expr: string, variables: Record<string, string | number>): number => {
    let exprValue = expr;
    for (const [key, value] of Object.entries(variables)) {
      if (typeof value === 'number') {
        exprValue = exprValue.replace(new RegExp(`\\b${key}\\b`, 'g'), String(value));
      }
    }
    try {
      return new Function(`return ${exprValue}`)();
    } catch {
      return NaN;
    }
  };

  const validateCodeStructure = (code: string) => {
    const lines = code.trim().split('\n');
    if (lines.length === 0 || code.trim().length === 0) {
      return { isValid: false, message: '代码不能为空' };
    }
    
    let indentLevel = 0;
    const errors: string[] = [];
    
    // 首先检查括号和引号匹配
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
    
    // 然后检查缩进和结构
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      const lineNum = index + 1;
      
      if (trimmed === '') return;
      
      const leadingSpaces = line.length - trimmed.length;
      const currentIndent = Math.floor(leadingSpaces / 4);
      
      if (trimmed.endsWith(':')) {
        indentLevel++;
      } else if (currentIndent > indentLevel) {
        errors.push(`第 ${lineNum} 行：缩进层级错误`);
      } else if (currentIndent < indentLevel && !trimmed.startsWith('return') && !trimmed.startsWith('break') && !trimmed.startsWith('continue')) {
        indentLevel = currentIndent;
      }
      
      if (trimmed.startsWith('def ') && !trimmed.includes('(')) {
        errors.push(`第 ${lineNum} 行：函数定义缺少括号`);
      }
      
      if ((trimmed.startsWith('if ') || trimmed.startsWith('elif ') || trimmed.startsWith('while ') || trimmed.startsWith('for ')) && !trimmed.includes(':')) {
        errors.push(`第 ${lineNum} 行：条件语句或循环缺少冒号`);
      }
    });
    
    if (errors.length > 0) {
      return { isValid: false, message: "❌ 语法错误！\n\n代码检查发现以下问题：\n\n" + errors.join('\n') + "\n\n请修复错误后重新运行。" };
    }
    
    return { isValid: true, message: '✅ 代码结构正确' };
  };

  const resetCode = (chapterId: string, exerciseIdx: number) => {
    const key = getExerciseKey(chapterId, exerciseIdx);
    const exercise = course?.chapters.find(c => c.id === chapterId)?.exercises[exerciseIdx];
    const defaultCode = exercise?.codeTemplate || '';
    setExerciseAnswers(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        codeAnswer: defaultCode,
        codeShowResult: false,
        codeIsCorrect: false,
        codeOutput: ''
      }
    }));
  };

  const getChapterContent = (chapterId: string, contentIdx: number): string => {
    const contentMap: Record<string, Record<string, string[]>> = {
      'python-basics': {
        'chapter1': [
          'Python 是一种高级、解释型、面向对象的编程语言。它由 Guido van Rossum 在 1989 年创造，以简洁的语法和强大的功能著称。安装 Python 非常简单，只需从官方网站下载对应版本的安装包即可。',
          'IDE（集成开发环境）是编写 Python 代码的重要工具。常用的 IDE 有 PyCharm、VS Code、Spyder 等。配置好 IDE 后，可以提高编码效率和调试能力。',
          'Python 的基本语法包括变量定义、数据类型、运算符等。Python 使用缩进来表示代码块，这是它的一大特色。代码结构清晰易读。',
          '注释是代码中非常重要的部分，用于解释代码的功能。单行注释使用 # 开头，多行注释使用三个引号包裹。良好的代码风格可以提高代码的可读性和可维护性。'
        ],
        'chapter2': [
          '变量是存储数据的容器。在 Python 中，不需要声明变量类型，直接赋值即可。变量名可以包含字母、数字和下划线，但不能以数字开头。',
          'Python 的基本数据类型包括整数(int)、浮点数(float)、字符串(str)和布尔值(bool)。不同的数据类型有不同的用途和操作方法。',
          '运算符包括算术运算符(+、-、*、/)、比较运算符(==、!=、>、<)和逻辑运算符(and、or、not)。这些运算符用于进行各种计算和判断。',
          '类型转换可以将一种数据类型转换为另一种。常用的转换函数有 int()、float()、str()、bool() 等。需要注意类型转换的规则和可能的错误。'
        ],
        'chapter3': [
          'if 语句用于根据条件执行不同的代码块。可以使用 if、elif、else 来处理多个条件分支。条件表达式返回布尔值。',
          'for 循环用于遍历序列（如列表、字符串等）。range() 函数可以生成一系列数字，常用于控制循环次数。',
          'while 循环会一直执行，直到条件变为 False。需要注意避免无限循环，确保循环条件最终会变为 False。',
          'break 语句用于跳出循环，continue 语句用于跳过当前迭代继续下一次循环。这些控制语句可以帮助我们更灵活地控制循环流程。'
        ],
        'chapter4': [
          '函数是一段可重用的代码块。使用 def 关键字定义函数，可以接收参数并返回结果。函数可以提高代码的复用性和可读性。',
          '函数可以有参数和返回值。参数分为位置参数、关键字参数和默认参数。返回值使用 return 语句返回。',
          '模块是组织代码的方式，可以将相关的函数和变量放在一个文件中。使用 import 语句导入模块，可以使用模块中的功能。',
          'Python 提供了丰富的内置函数和标准库。内置函数如 print()、len()、max() 等可以直接使用，标准库如 math、random 等需要导入后使用。'
        ],
        'chapter5': [
          '列表是可变的有序序列，可以存储不同类型的元素。常用操作包括添加元素(append)、删除元素(remove)、排序(sort)等。',
          '字典是键值对的无序集合。可以通过键来访问值，键必须是不可变的（如字符串、数字、元组）。字典的常用操作包括添加、修改、删除键值对。',
          '元组是不可变的有序序列。与列表类似，但一旦创建就不能修改。常用于存储不应该改变的数据。',
          '集合是无序且不重复的元素集合。常用操作包括求交集(&)、并集(|)、差集(-)等。集合可以用于去重和集合运算。'
        ],
        'chapter6': [
          '文件操作包括打开、读取、写入和关闭文件。使用 open() 函数打开文件，使用 close() 函数关闭文件。',
          '文件读取可以使用 read()、readline()、readlines() 等方法。文件写入可以使用 write()、writelines() 等方法。',
          '异常处理可以捕获和处理程序运行过程中的错误。使用 try-except 语句可以优雅地处理异常，避免程序崩溃。',
          'with 语句可以自动管理文件的打开和关闭，是一种更安全、更简洁的文件操作方式。with 语句块结束时会自动关闭文件。'
        ]
      },
      'data-analysis': {
        'chapter1': [
          '数据分析是指用适当的统计分析方法对收集来的大量数据进行分析，提取有用信息和形成结论而对数据加以详细研究和概括总结的过程。它在商业决策中扮演着越来越重要的角色。',
          '数据分析的一般流程包括：数据收集、数据清洗、数据转换、数据分析、数据可视化和结果呈现。每个步骤都至关重要，直接影响分析结果的准确性。',
          '在商务领域，数据分析可以帮助企业了解客户需求、优化运营流程、预测市场趋势、提升决策效率。它已成为企业数字化转型的核心能力。',
          '常用的数据分析工具包括 Python（Pandas、NumPy、Matplotlib）、R语言、Excel、SQL等。选择合适的工具可以大大提高分析效率和质量。'
        ],
        'chapter2': [
          'NumPy 是 Python 的一个核心科学计算库，提供了高性能的数组对象和数学函数。NumPy 数组是数据分析的基础数据结构。',
          '数组索引和切片是 NumPy 的重要特性。通过索引可以访问数组中的单个元素，通过切片可以获取数组的子数组。',
          'NumPy 提供了丰富的数学运算函数，包括基本运算、三角函数、统计函数等。这些函数都经过高度优化，可以高效处理大规模数据。',
          '广播机制是 NumPy 的一个强大特性，它允许不同形状的数组进行运算。广播遵循一定的规则，可以自动扩展数组形状以匹配运算需求。'
        ],
        'chapter3': [
          'Series 是 Pandas 中的一维数组对象，类似于带标签的数组。DataFrame 是二维表格数据结构，由行和列组成，类似于 Excel 表格。',
          'Pandas 支持多种数据格式的读写，包括 CSV、Excel、JSON、SQL 等。read_csv() 和 to_csv() 是最常用的文件操作函数。',
          '数据清洗是数据分析的关键步骤，包括处理缺失值、去除重复数据、数据类型转换、异常值处理等。Pandas 提供了丰富的方法来完成这些任务。',
          '数据分组和聚合是数据分析的常用操作。groupby() 方法可以按指定列分组，然后对各组应用聚合函数如 sum()、mean()、count() 等。',
          '数据合并和连接是将多个数据集整合的重要操作。Pandas 提供了 merge()、concat()、join() 等方法来实现不同方式的数据合并。'
        ],
        'chapter4': [
          'Matplotlib 是 Python 最常用的数据可视化库，可以创建各种高质量的静态图表。pyplot 是 Matplotlib 的核心模块，提供了类似 MATLAB 的绘图接口。',
          '折线图适合展示数据随时间的变化趋势，柱状图适合比较不同类别的数据，散点图适合展示两个变量之间的关系。选择合适的图表类型很重要。',
          'Seaborn 是基于 Matplotlib 的高级可视化库，提供了更美观的默认样式和更高级的统计图表，如热力图、小提琴图、箱线图等。',
          '交互式可视化工具如 Plotly、Bokeh 可以创建交互式图表，用户可以通过鼠标交互探索数据，非常适合数据探索和演示。'
        ],
        'chapter5': [
          '描述性统计分析是数据分析的基础，包括计算数据的集中趋势（均值、中位数、众数）和离散程度（方差、标准差、极差）等指标。',
          '假设检验是统计推断的重要方法，用于判断样本数据是否支持某个假设。常用的假设检验包括 t 检验、方差分析、卡方检验等。',
          '相关分析用于研究两个变量之间的线性关系强度，相关系数的取值范围是 -1 到 1。回归分析用于建立变量之间的预测模型。',
          '聚类分析是一种无监督学习方法，用于将数据分组，使得组内数据相似度高，组间数据相似度低。常用的聚类算法有 K-Means、层次聚类等。'
        ],
        'chapter6': [
          '销售数据分析可以帮助企业了解销售趋势、识别畅销产品、优化定价策略、评估营销效果等，是商务数据分析的核心应用领域。',
          '客户行为分析通过研究客户的购买行为、浏览记录、偏好等数据，帮助企业更好地理解客户需求，提高客户满意度和忠诚度。',
          '市场趋势分析通过收集和分析市场数据，帮助企业预测市场变化、识别市场机会、制定市场策略。',
          '供应链数据分析可以帮助企业优化库存管理、提高供应链效率、降低物流成本、提升供应链可视化水平。'
        ]
      },
      'data-collection': {
        'chapter1': [
          'HTML（超文本标记语言）是构建网页的标准标记语言。HTML 使用标签来描述网页的结构和内容，标签通常成对出现。',
          'CSS（层叠样式表）用于描述网页的样式和布局。CSS 选择器用于选择要应用样式的 HTML 元素，常用的选择器有标签选择器、类选择器、ID选择器等。',
          '网页结构分析是爬虫开发的基础，需要理解网页的 DOM 结构，识别数据所在的 HTML 元素和属性。',
          '浏览器开发者工具是分析网页的强大工具，可以查看网页的 HTML 结构、CSS 样式、JavaScript 代码和网络请求。'
        ],
        'chapter2': [
          'HTTP（超文本传输协议）是互联网上数据传输的基础协议。HTTP 请求由请求行、请求头和请求体组成，服务器返回响应状态码和响应体。',
          'requests 是 Python 中最常用的 HTTP 请求库，可以方便地发送 GET、POST、PUT、DELETE 等请求。',
          'GET 请求用于获取资源，POST 请求用于提交数据。选择合适的请求方法取决于具体的需求和 API 设计。',
          'HTTP 状态码表示请求的处理结果，200 表示成功，4xx 表示客户端错误，5xx 表示服务器错误。正确处理状态码是保证爬虫稳定性的关键。'
        ],
        'chapter3': [
          'BeautifulSoup 是 Python 中用于解析 HTML 和 XML 的库，可以方便地提取网页中的数据。需要安装 bs4 包才能使用。',
          'BeautifulSoup 支持多种解析器，包括 html.parser（Python 内置）、lxml（更快更强大）、html5lib（容错性更好）。',
          'find() 方法用于查找第一个匹配的元素，find_all() 方法用于查找所有匹配的元素。可以通过标签名、类名、ID 等多种方式定位元素。',
          'CSS 选择器是另一种定位元素的方式，使用 select() 方法可以使用 CSS 选择器语法，功能更强大更灵活。'
        ],
        'chapter4': [
          'API（应用程序编程接口）是不同软件系统之间进行交互的接口。RESTful API 是一种常用的 API 设计风格，使用 HTTP 方法进行资源操作。',
          'RESTful API 使用标准的 HTTP 方法：GET 获取资源、POST 创建资源、PUT 更新资源、DELETE 删除资源。',
          'API 认证是保护 API 安全的重要手段，常用的认证方式有 API Key、OAuth、Token 等。在请求中正确携带认证信息是调用 API 的关键。',
          'JSON（JavaScript 对象表示法）是 API 最常用的数据格式。requests 库的 json() 方法可以方便地将响应转换为 Python 字典。'
        ],
        'chapter5': [
          '数据清洗是数据采集后的关键步骤，包括处理缺失值、去除重复数据、纠正错误数据、数据标准化等操作。',
          '缺失值是数据中常见的问题，可以通过删除、填充、插值等方式处理。Pandas 的 isnull() 和 fillna() 方法非常实用。',
          '数据标准化和归一化是数据预处理的重要步骤，可以将数据转换到相同的尺度，提高模型的收敛速度和准确性。',
          '文本数据处理包括分词、去除停用词、词干化、向量化等操作，是文本挖掘和自然语言处理的基础。'
        ],
        'chapter6': [
          'CSV（逗号分隔值）是最常用的数据存储格式之一，结构简单，易于读写。Pandas 的 read_csv() 和 to_csv() 方法非常方便。',
          'JSON 是一种轻量级的数据交换格式，支持复杂的数据结构，常用于 API 数据传输和配置文件。',
          '数据库是存储大量结构化数据的最佳选择，常用的关系型数据库有 MySQL、PostgreSQL、SQLite 等。Python 可以通过各种数据库驱动连接和操作数据库。',
          '数据存储的最佳实践包括选择合适的存储格式、定期备份数据、优化数据结构、保护数据安全等。'
        ]
      },
      'supply-chain': {
      'chapter1': [
        '供应链是由供应商、制造商、分销商、零售商等环节组成的网络，负责将产品从原材料转化为最终产品并送达消费者手中。',
        '供应链管理是对供应链各环节进行协调和优化，以实现高效、低成本、高质量的产品交付。良好的供应链管理可以显著提升企业竞争力。',
        '供应链管理的目标包括提高效率、降低成本、提升客户满意度、增强供应链弹性等。同时也面临着需求波动、供应中断、全球化等挑战。',
        '供应链管理的发展趋势包括数字化转型、智能化决策、可持续发展、供应链金融等。新技术正在深刻改变供应链管理的方式。'
      ],
      'chapter2': [
        '供应链数据包括采购数据、生产数据、库存数据、物流数据、销售数据等多种类型，来源于企业内部系统和外部合作伙伴。',
        '关键绩效指标（KPI）是衡量供应链绩效的重要工具，包括库存周转率、订单准时交付率、缺货率、运输成本等。',
        '数据收集和管理是供应链数字化的基础，需要建立完善的数据采集体系和数据管理平台。',
        '数据质量控制是确保数据分析结果准确可靠的前提，包括数据准确性、完整性、一致性、时效性等方面的检查。'
      ],
      'chapter3': [
        '需求预测是供应链管理的核心能力，可以帮助企业合理安排生产和库存，降低成本，提高客户满意度。',
        '常用的需求预测方法包括时间序列分析、回归分析、机器学习等。选择合适的方法取决于数据特点和业务需求。',
        '库存管理的目标是在满足客户需求的同时，最小化库存成本。常用的库存管理模型有 EOQ、ROP、安全库存等。',
        '库存优化策略包括ABC分类法、JIT（准时制）、VMI（供应商管理库存）等，可以根据不同产品的特点选择合适的策略。'
      ],
      'chapter4': [
        '供应商评估是选择和管理供应商的重要环节，评估指标包括价格、质量、交付能力、服务水平、财务稳定性等。',
        '供应商关系管理包括供应商选择、合同管理、绩效监控、合作发展等方面，建立良好的供应商关系可以实现双赢。',
        '采购策略包括集中采购、分散采购、战略采购等，需要根据企业规模和需求特点制定合适的采购策略。',
        '采购成本控制是企业成本管理的重要组成部分，包括谈判议价、招标采购、成本分析等方法。'
      ],
      'chapter5': [
        '物流网络设计是供应链优化的重要方面，包括仓库选址、运输路线规划、配送策略等。合理的物流网络可以显著降低物流成本。',
        '运输方式选择需要考虑成本、速度、可靠性等因素，常见的运输方式有公路、铁路、海运、空运等。',
        '配送优化包括路线优化、车辆调度、配送时间安排等，可以使用运筹学方法和智能算法来实现。',
        '物流可视化是通过信息系统实时展示物流状态，提高供应链透明度和响应速度。'
      ],
      'chapter6': [
        '供应链风险管理是识别、评估和应对供应链风险的过程，风险类型包括供应中断、需求波动、价格波动、自然灾害等。',
        '风险评估方法包括风险矩阵、情景分析、敏感性分析等，可以帮助企业量化风险并制定应对策略。',
        '风险应对策略包括风险规避、风险转移、风险缓解、风险接受等，需要根据风险的性质和严重程度选择合适的策略。',
        '建立供应链弹性是应对不确定性的关键，包括建立备用供应商、增加库存缓冲、提高供应链灵活性等措施。'
      ]
    },
    'data-visualization': {
      'chapter1': [
        '数据可视化是将数据以图形化的方式展示出来，帮助人们更好地理解数据中的模式和关系。有效的数据可视化能够揭示数据背后的故事。',
        '不同类型的图表适用于展示不同的数据：折线图适合展示趋势，柱状图适合对比类别，散点图适合展示关系，饼图适合展示占比。',
        '数据可视化的设计原则包括：保持简洁、强调重点、合理使用颜色、确保可读性、提供上下文说明等。',
        '常用的数据可视化工具包括：Matplotlib（Python）、Seaborn（Python）、Plotly（Python/JS）、D3.js（JavaScript）、Tableau（商业工具）等。'
      ],
      'chapter2': [
        'Matplotlib 是 Python 最基础也最强大的绘图库，提供了丰富的绘图功能。plt.plot() 用于绘制线图，plt.bar() 用于绘制柱状图。',
        '子图布局使用 plt.subplots() 可以创建网格状的子图布局。fig, axes = plt.subplots(nrows, ncols) 可以返回一个 Figure 对象和 Axes 对象数组。',
        '图表样式自定义包括：设置线条颜色、线宽、标记样式、坐标轴范围、标题、标签等。plt.style.use() 可以使用预设样式。',
        '保存图表使用 plt.savefig()，支持多种格式如 PNG、PDF、SVG 等。设置 dpi 参数可以调整图片分辨率。'
      ],
      'chapter3': [
        'Seaborn 是基于 Matplotlib 的高级绘图库，提供更美观的默认样式和更高级的统计图表。sns.set_style() 可以设置图表样式。',
        '热力图使用 sns.heatmap() 可以直观地展示矩阵数据和相关性。annot=True 参数可以在单元格中显示数值。',
        '成对图使用 sns.pairplot() 可以在一个图表中展示多个变量之间的两两关系，非常适合数据探索。',
        '分类数据可视化包括：sns.boxplot() 箱线图、sns.violinplot() 小提琴图、sns.swarmplot() 蜂群图等，可以展示数据的分布特征。'
      ],
      'chapter4': [
        'Plotly 提供了交互式图表功能，用户可以缩放、平移、悬停查看详细信息。px.line() 用于创建交互式线图。',
        '交互式图表的优势在于：用户可以探索数据细节、支持缩放和平移、可以添加悬停提示和工具提示。',
        'Plotly Express 提供了简洁的 API，可以快速创建常用图表类型，如散点图、线图、柱状图、饼图等。',
        '日期范围选择器在时间序列图表中特别有用，可以让用户方便地查看不同时间范围的数据。'
      ],
      'chapter5': [
        '数据可视化实战的第一步是理解数据和业务目标，明确想要传达什么信息，以及数据的特点是什么。',
        '数据仪表盘（Dashboard）是将多个相关图表整合在一起的页面，提供数据的综合视图。使用 GridSpec 可以实现复杂的布局。',
        '选择图表类型时要考虑：数据类型（数值、类别、时间序列）、比较类型（对比、趋势、关系、分布）、受众和展示场景。',
        '最佳实践包括：保持图表简洁、提供清晰的标题和标签、使用适当的配色方案、避免图表垃圾（chartjunk）、确保数据准确。'
      ]
    }
  };
    
    const courseContent = contentMap[course?.id || 'python-basics'];
    return courseContent?.[chapterId]?.[contentIdx] || '暂无详细内容';
  };

  if (!course) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">课程未找到</h1>
            <Link to="/" className="text-green-600 hover:text-green-800 font-medium">
              返回首页
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Course Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-green-400 hover:text-green-300 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">返回首页</span>
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-6">
                  {course.icon}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{course.title}</h1>
                  <p className="text-gray-300 text-lg">{course.shortDesc}</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">{course.description}</p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-400" />
                  <span>20小时课程</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-400" />
                  <span>1,234 学习者</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-400" />
                  <span>完成证书</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-2xl">
              <a href="#course-outline" className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all mb-4 text-center">
                开始学习
              </a>
              <button className="w-full border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                加入收藏
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 相关技能 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ListChecks className="w-6 h-6 mr-2 text-green-600" />
                技能标签
              </h2>
              <div className="flex flex-wrap gap-3">
                {course.skills.map((skill, index) => (
                  <span key={index} className="px-5 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 课程目标 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2 text-green-600" />
                课程目标
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start bg-green-50 p-4 rounded-xl">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 课程大纲 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Book className="w-6 h-6 mr-2 text-green-600" />
                课程大纲
              </h2>
              
              <div className="space-y-4">
                {course.chapters.map((chapter, index) => (
                  <div key={chapter.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-5 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => toggleChapter(chapter.id)}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                          {index + 1}
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg">{chapter.title}</h4>
                      </div>
                      {expandedChapters[chapter.id] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    <div className="p-5">
                      <ul className="pl-0 space-y-2 text-gray-600 mb-4">
                        {chapter.content.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      {expandedChapters[chapter.id] && (
                        <div className="mt-6 space-y-6">
                          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                            <h5 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                              📚 知识点讲解
                            </h5>
                            <div className="space-y-4 text-gray-700">
                              {chapter.content.map((item, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                  <h6 className="font-semibold text-blue-800 mb-2">知识点 {idx + 1}：{item}</h6>
                                  <p className="text-sm text-gray-600">{getChapterContent(chapter.id, idx)}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                            <h5 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                              练习题 📝 （选择答案后点击"提交答案"按钮）
                            </h5>
                          <ol className="pl-6 space-y-6 text-gray-700">
                            {chapter.exercises.map((exercise, idx) => {
                              const exerciseState = getExerciseState(chapter.id, idx);
                              return (
                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-100">
                                  <p className="font-semibold mb-3 text-gray-900">{exercise.question}</p>
                                  {exercise.type === 'multiple-choice' && exercise.options && (
                                    <div className="pl-2 space-y-2">
                                      {exercise.options.map((option, optIdx) => {
                                        const isCorrect = option === exercise.correctAnswer;
                                        const isSelected = exerciseState.selectedAnswer === optIdx;
                                        const showResult = exerciseState.showResult;
                                        
                                        let optionClass = 'border-gray-200 hover:border-green-400 hover:bg-green-50';
                                        if (showResult) {
                                          if (isCorrect) {
                                            optionClass = 'border-green-600 bg-green-100 shadow-md';
                                          } else if (isSelected && !isCorrect) {
                                            optionClass = 'border-red-600 bg-red-100 shadow-md';
                                          } else {
                                            optionClass = 'border-gray-200 opacity-50';
                                          }
                                        } else if (isSelected) {
                                          optionClass = 'border-green-500 bg-green-50 shadow-sm';
                                        }
                                        
                                        return (
                                          <div key={optIdx} className={`flex items-center p-4 rounded-xl border-2 ${optionClass} cursor-pointer transition-all duration-200`}
                                            onClick={() => !showResult && handleSelectAnswer(chapter.id, idx, optIdx)}>
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${
                                              showResult && isCorrect ? 'bg-green-600 border-green-600' :
                                              showResult && isSelected && !isCorrect ? 'bg-red-600 border-red-600' :
                                              isSelected ? 'bg-green-600 border-green-600' :
                                              'border-gray-400 hover:border-green-500'
                                            }`}>
                                              {(showResult && isCorrect) || isSelected ? (
                                                <CheckCircle className="w-4 h-4 text-white" />
                                              ) : showResult && isSelected && !isCorrect ? (
                                                <XCircle className="w-4 h-4 text-white" />
                                              ) : null}
                                            </div>
                                            <span className={`text-lg ${
                                              showResult && isCorrect ? 'text-green-800 font-bold' :
                                              showResult && isSelected && !isCorrect ? 'text-red-800 font-medium line-through' :
                                              showResult ? 'text-gray-500' :
                                              'text-gray-800'
                                            }`}>
                                              {option}
                                            </span>
                                            {showResult && isCorrect && (
                                              <span className="ml-auto text-green-700 font-bold text-base">✅ 正确答案</span>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                  {exercise.type === 'code' && (
                                    <div className="mt-4">
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-500">代码编辑区</span>
                                        {exerciseState.codeShowResult && (
                                          <span className={`text-sm font-bold ${exerciseState.codeIsCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                            {exerciseState.codeIsCorrect ? '✅ 代码正确！' : '❌ 代码有问题'}
                                          </span>
                                        )}
                                      </div>
                                      {exercise.codeTemplate && (
                                        <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                          <span className="text-sm font-semibold text-blue-800">📋 示范代码：</span>
                                          <pre className="mt-2 text-sm text-gray-700 font-mono bg-white p-3 rounded border border-gray-200 overflow-x-auto">{exercise.codeTemplate}</pre>
                                        </div>
                                      )}
                                      <textarea
                                        value={exerciseState.codeAnswer || ''}
                                        onChange={(e) => handleCodeChange(chapter.id, idx, e.target.value)}
                                        placeholder="// 在这里编写你的代码\nprint('Hello, World!')"
                                        className="w-full h-48 bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500 border-2 border-gray-700"
                                      />
                                      {exerciseState.codeShowResult && !exerciseState.codeIsCorrect && exercise.expectedOutput && (
                                        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                          <div className="font-bold text-red-800 mb-2">❌ 输出结果不匹配</div>
                                          <div className="space-y-2">
                                            <div>
                                              <span className="text-gray-600">你的输出：</span>
                                              <pre className="bg-gray-900 text-red-400 p-3 rounded mt-1">{exerciseState.codeOutput || '(无输出)'}</pre>
                                            </div>
                                            <div>
                                              <span className="text-gray-600">期望输出：</span>
                                              <pre className="bg-gray-900 text-green-400 p-3 rounded mt-1">{exercise.expectedOutput}</pre>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                      {exerciseState.codeShowResult && exerciseState.codeIsCorrect && exercise.explanation && (
                                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                          <div className="font-bold text-green-800 mb-2">💡 知识点讲解</div>
                                          <p className="text-gray-700">{exercise.explanation}</p>
                                        </div>
                                      )}
                                      <div className="mt-4 flex gap-3">
                                        {!exerciseState.codeShowResult ? (
                                          <button
                                            onClick={() => handleCodeSubmit(chapter.id, idx)}
                                            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                                          >
                                            ▶️ 运行代码
                                          </button>
                                        ) : (
                                          <button
                                            onClick={() => resetCode(chapter.id, idx)}
                                            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-bold hover:bg-gray-300 transition-all"
                                          >
                                            🔄 重新编写
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                  {exercise.type === 'multiple-choice' && (
                                    <div className="mt-4 flex items-center justify-between">
                                      {!exerciseState.showResult ? (
                                        <button 
                                          onClick={() => handleSubmitAnswer(chapter.id, idx)}
                                          className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl font-bold hover:shadow-lg hover:from-green-700 hover:to-emerald-800 transition-all text-lg"
                                        >
                                          ✓ 提交答案
                                        </button>
                                      ) : (
                                        <>
                                          {exercise.options && exercise.options[exerciseState.selectedAnswer] === exercise.correctAnswer ? (
                                            <div className="flex items-center text-green-600">
                                              <CheckCircle className="w-5 h-5 mr-2" />
                                              <span className="font-medium">回答正确！</span>
                                            </div>
                                          ) : (
                                            <div className="flex items-center text-red-600">
                                              <XCircle className="w-5 h-5 mr-2" />
                                              <span className="font-medium">回答错误</span>
                                            </div>
                                          )}
                                          <button 
                                            onClick={() => resetAnswer(chapter.id, idx)}
                                            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-bold hover:bg-gray-300 transition-all"
                                          >
                                            🔄 重新答题
                                          </button>
                                        </>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </ol>
                        </div>
                      </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 评估方式 */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-green-600" />
                评估方式
              </h2>
              <div className="space-y-4">
                {course.assessment.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                      <span className="font-medium text-gray-900">{item.type}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-40 bg-gray-200 rounded-full h-3 mr-4">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full" 
                          style={{ width: `${item.weight}%` }}
                        ></div>
                      </div>
                      <span className="font-bold text-green-600 w-12 text-right">{item.weight}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* 学习中心 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                学习中心
              </h3>
              
              {/* 学习进度 */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">学习进度</span>
                  <span className="font-bold text-green-600">{course.learningCenter.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${course.learningCenter.progress}%` }}
                  ></div>
                </div>
              </div>
              
              {/* 学习资源 */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-4">学习资源</h4>
                <ul className="space-y-3">
                  {course.learningCenter.resources.map((resource, index) => (
                    <li key={index} className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer transition-colors">
                      <BookOpen className="w-4 h-4 mr-3 text-green-500" />
                      {resource}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                继续学习
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
