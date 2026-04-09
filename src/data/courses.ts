export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  shortDesc: string;
}

export const courses: Course[] = [
  {
    id: 'python-basics',
    title: 'Python基础',
    shortDesc: 'Python编程语言入门',
    description: '学习 Python 编程语言的核心概念和基础语法，包括变量、数据类型、控制流、函数、模块等。为后续的数据分析课程打下坚实的编程基础。',
    icon: '🐍',
  },
  {
    id: 'data-analysis',
    title: '数据分析技术',
    shortDesc: '数据分析方法与工具',
    description: '学习数据分析的基本方法和常用工具，掌握数据清洗、数据可视化、统计分析等技能，使用 Pandas、NumPy、Matplotlib 等库进行数据分析。',
    icon: '📊',
  },
  {
    id: 'data-collection',
    title: '数据采集与处理',
    shortDesc: '网络爬虫与数据清洗',
    description: '学习如何从互联网采集数据，包括网络爬虫技术、API 数据获取、数据清洗和预处理方法。掌握 BeautifulSoup、Scrapy 等爬虫框架的使用。',
    icon: '🕸️',
  },
  {
    id: 'supply-chain',
    title: '供应链数据分析',
    shortDesc: '供应链管理与优化',
    description: '将数据分析应用于供应链管理领域，学习供应链数据的分析方法、库存优化、需求预测、供应商评估等内容，提升供应链运营效率。',
    icon: '🚚',
  },
  {
    id: 'database-principles',
    title: '数据库原理与应用',
    shortDesc: '数据库设计与SQL',
    description: '学习数据库系统的基本原理、关系型数据库设计、SQL 语言、数据库管理系统的使用等内容。掌握 MySQL、PostgreSQL 等数据库的基本操作。',
    icon: '🗄️',
  },
];
