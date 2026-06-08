import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Database, Clock, Users, Star, Award, Target, CheckCircle, PlayCircle, Download, Share2, BookOpen, Code, ChevronDown, ChevronRight, Copy, Check } from 'lucide-react';
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
      { 
        id: 1, 
        title: '项目概述与数据理解', 
        duration: '30分钟',
        content: [
          '项目背景介绍：零售业销售数据分析的重要性',
          '数据来源和数据格式说明',
          '理解数据集的结构和字段含义',
          '初步探索数据：查看数据基本信息和统计摘要'
        ],
        exercises: [
          {
            type: 'code',
            question: '导入Pandas并读取销售数据文件',
            codeTemplate: 'import pandas as pd\n\n# 读取销售数据\ndf = pd.read_csv("sales_data.csv")\n\n# 查看数据基本信息\nprint("数据形状:", df.shape)\nprint("\\n数据列名:", df.columns.tolist())\nprint("\\n数据类型:\\n", df.dtypes)\nprint("\\n前5行数据:\\n", df.head())'
          },
          {
            type: 'code',
            question: '查看数据的统计摘要信息',
            codeTemplate: '# 查看统计摘要\nprint("统计摘要:\\n", df.describe())\n\n# 查看各列的缺失值情况\nprint("\\n缺失值统计:\\n", df.isnull().sum())\n\n# 查看数据行数\nprint("\\n总数据行数:", len(df))'
          }
        ]
      },
      { 
        id: 2, 
        title: '缺失值处理', 
        duration: '1小时',
        content: [
          '缺失值的类型和产生原因',
          '缺失值的检测方法：isnull()、notnull()',
          '缺失值处理策略：删除、填充、插值',
          '使用fillna()进行缺失值填充',
          '使用dropna()删除缺失值',
          '向前填充和向后填充方法'
        ],
        exercises: [
          {
            type: 'code',
            question: '统计各列缺失值数量并处理',
            codeTemplate: 'import pandas as pd\n\ndf = pd.read_csv("sales_data.csv")\n\n# 查看缺失值情况\nmissing_counts = df.isnull().sum()\nprint("各列缺失值数量:\\n", missing_counts[missing_counts > 0])\n\n# 处理数值型缺失值 - 使用均值填充\nnumeric_cols = df.select_dtypes(include=[\'int64\', \'float64\']).columns\ndf[numeric_cols] = df[numeric_cols].fillna(df[numeric_cols].mean())\n\n# 处理分类型缺失值 - 使用众数填充\ncategorical_cols = df.select_dtypes(include=[\'object\']).columns\ndf[categorical_cols] = df[categorical_cols].fillna(df[categorical_cols].mode().iloc[0])\n\nprint("\\n处理后缺失值数量:\\n", df.isnull().sum())'
          },
          {
            type: 'code',
            question: '根据业务逻辑填充缺失值',
            codeTemplate: '# 对于销售额缺失值，使用同类别商品的平均值填充\n# 按商品类别分组，然后用组内均值填充\ncategory_means = df.groupby(\'category\')[\'sales\'].transform(\'mean\')\ndf[\'sales\'] = df[\'sales\'].fillna(category_means)\n\n# 对于日期缺失值，使用前后日期插值\ndf[\'date\'] = pd.to_datetime(df[\'date\'])\ndf[\'date\'] = df[\'date\'].interpolate(method=\'time\')\n\nprint("填充后数据:\\n", df.head())'
          }
        ]
      },
      { 
        id: 3, 
        title: '异常值检测', 
        duration: '1.5小时',
        content: [
          '异常值的定义和影响',
          '统计方法检测异常值：Z-score、IQR方法',
          '可视化方法检测异常值：箱线图、散点图',
          '异常值的处理策略：删除、修正、标记',
          '使用NumPy和Pandas进行异常值检测'
        ],
        exercises: [
          {
            type: 'code',
            question: '使用IQR方法检测异常值',
            codeTemplate: 'import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("sales_data.csv")\n\n# IQR方法检测异常值\ndef detect_outliers_iqr(df, column):\n    Q1 = df[column].quantile(0.25)\n    Q3 = df[column].quantile(0.75)\n    IQR = Q3 - Q1\n    lower_bound = Q1 - 1.5 * IQR\n    upper_bound = Q3 + 1.5 * IQR\n    return (df[column] < lower_bound) | (df[column] > upper_bound)\n\n# 检测销售额异常值\noutliers = detect_outliers_iqr(df, \'sales\')\nprint(f"检测到 {outliers.sum()} 个异常值")\nprint("异常值详情:\\n", df[outliers][[\'product\', \'sales\']])\n\n# 处理异常值 - 使用中位数替换\nsales_median = df[\'sales\'].median()\ndf.loc[outliers, \'sales\'] = sales_median\nprint("\\n处理后销售额统计:\\n", df[\'sales\'].describe())'
          },
          {
            type: 'code',
            question: '使用Z-score方法检测异常值',
            codeTemplate: '# Z-score方法检测异常值\nfrom scipy import stats\n\n# 计算Z-score\nz_scores = np.abs(stats.zscore(df[\'sales\'].dropna()))\n\n# 阈值设为3（超出3倍标准差视为异常值）\nthreshold = 3\noutliers_z = z_scores > threshold\n\nprint(f"Z-score方法检测到 {outliers_z.sum()} 个异常值")\n\n# 可视化异常值\nimport matplotlib.pyplot as plt\nplt.figure(figsize=(10, 6))\nplt.boxplot(df[\'sales\'], vert=False)\nplt.title(\'销售额箱线图（异常值检测）\')\nplt.show()'
          }
        ]
      },
      { 
        id: 4, 
        title: '数据类型转换', 
        duration: '1小时',
        content: [
          '常见的数据类型：int、float、object、datetime',
          '使用dtype查看和修改数据类型',
          '使用astype()进行类型转换',
          '日期时间类型转换：to_datetime()',
          '分类数据类型：category',
          '数据类型转换的注意事项'
        ],
        exercises: [
          {
            type: 'code',
            question: '进行数据类型转换',
            codeTemplate: 'import pandas as pd\n\ndf = pd.read_csv("sales_data.csv")\n\nprint("转换前数据类型:\\n", df.dtypes)\n\n# 将日期列转换为datetime类型\ndf[\'date\'] = pd.to_datetime(df[\'date\'], format=\'%Y-%m-%d\')\n\n# 将销售额转换为float类型\ndf[\'sales\'] = df[\'sales\'].astype(float)\n\n# 将类别列转换为category类型\ndf[\'category\'] = df[\'category\'].astype(\'category\')\n\n# 将布尔列转换为int类型（0/1）\ndf[\'is_promotion\'] = df[\'is_promotion\'].astype(int)\n\nprint("\\n转换后数据类型:\\n", df.dtypes)\n\n# 提取日期特征\ndf[\'year\'] = df[\'date\'].dt.year\ndf[\'month\'] = df[\'date\'].dt.month\ndf[\'day\'] = df[\'date\'].dt.day\ndf[\'weekday\'] = df[\'date\'].dt.weekday\n\nprint("\\n提取日期特征后:\\n", df[[\'date\', \'year\', \'month\', \'day\', \'weekday\']].head())'
          }
        ]
      },
      { 
        id: 5, 
        title: '数据验证与导出', 
        duration: '1.5小时',
        content: [
          '数据质量检查的重要性',
          '数据验证的常用方法',
          '数据一致性检查',
          '数据完整性检查',
          '数据导出格式：CSV、Excel、JSON',
          '数据导出的最佳实践'
        ],
        exercises: [
          {
            type: 'code',
            question: '数据质量验证',
            codeTemplate: 'import pandas as pd\n\ndf = pd.read_csv("sales_data_cleaned.csv")\n\nprint("=== 数据质量验证 ===")\n\n# 1. 完整性检查\nprint("\\n1. 完整性检查")\nprint("总记录数:", len(df))\nprint("缺失值统计:\\n", df.isnull().sum())\n\n# 2. 准确性检查\nprint("\\n2. 准确性检查")\nprint("销售额范围:", df[\'sales\'].min(), "-", df[\'sales\'].max())\nprint("销售额是否有负值:", (df[\'sales\'] < 0).any())\n\n# 3. 一致性检查\nprint("\\n3. 一致性检查")\nprint("商品类别数量:", df[\'category\'].nunique())\nprint("商品类别列表:", df[\'category\'].unique().tolist())\n\n# 4. 有效性检查\nprint("\\n4. 有效性检查")\nprint("日期范围:", df[\'date\'].min(), "-", df[\'date\'].max())\n\n# 导出清洗后的数据\ndf.to_csv("sales_data_final.csv", index=False)\ndf.to_excel("sales_data_final.xlsx", index=False)\n\nprint("\\n数据已导出成功！")'
          },
          {
            type: 'code',
            question: '生成数据质量报告',
            codeTemplate: '# 生成数据质量报告\nquality_report = {\n    \'总记录数\': len(df),\n    \'字段数量\': len(df.columns),\n    \'缺失值总数\': df.isnull().sum().sum(),\n    \'缺失率\': round(df.isnull().sum().sum() / (len(df) * len(df.columns)) * 100, 2),\n    \'重复记录数\': df.duplicated().sum(),\n    \'数值型字段\': len(df.select_dtypes(include=[\'int64\', \'float64\']).columns),\n    \'分类型字段\': len(df.select_dtypes(include=[\'object\', \'category\']).columns)\n}\n\nprint("=== 数据质量报告 ===")\nfor key, value in quality_report.items():\n    print(f"{key}: {value}")\n\n# 保存报告\nwith open("data_quality_report.txt", "w") as f:\n    f.write("=== 数据质量报告 ===\\n")\n    for key, value in quality_report.items():\n        f.write(f"{key}: {value}\\n")\n\nprint("\\n报告已保存！")'
          }
        ]
      },
      { 
        id: 6, 
        title: '项目总结与扩展', 
        duration: '30分钟',
        content: [
          '数据清洗流程回顾',
          '关键技术点总结',
          '常见问题和解决方案',
          '项目扩展建议',
          '后续学习方向'
        ],
        exercises: [
          {
            type: 'code',
            question: '综合练习：完整数据清洗流程',
            codeTemplate: '# 综合练习：完整数据清洗流程\nimport pandas as pd\nimport numpy as np\n\n# 1. 读取数据\ndf = pd.read_csv("sales_data_raw.csv")\nprint("原始数据形状:", df.shape)\n\n# 2. 数据探索\nprint("\\n数据信息:")\ndf.info()\n\n# 3. 缺失值处理\nprint("\\n处理缺失值...")\ndf = df.dropna(subset=[\'date\', \'product\'])  # 删除关键字段缺失\nnumeric_cols = df.select_dtypes(include=[\'int64\', \'float64\']).columns\ndf[numeric_cols] = df[numeric_cols].fillna(df[numeric_cols].median())\n\n# 4. 异常值处理\nprint("\\n处理异常值...")\nfrom scipy import stats\nz_scores = np.abs(stats.zscore(df[\'sales\'].dropna()))\noutliers = z_scores > 3\ndf = df[~outliers]\n\n# 5. 类型转换\nprint("\\n数据类型转换...")\ndf[\'date\'] = pd.to_datetime(df[\'date\'])\ndf[\'category\'] = df[\'category\'].astype(\'category\')\n\n# 6. 导出数据\ndf.to_csv("sales_data_cleaned_final.csv", index=False)\nprint("\\n数据清洗完成！最终数据形状:", df.shape)'
          }
        ]
      }
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
      { 
        id: 1, 
        title: '用户行为数据理解', 
        duration: '1小时',
        content: [
          '用户行为数据的特点和类型',
          '常见的用户行为事件',
          '日志数据的结构和格式',
          '用户行为分析的业务价值',
          '数据探索和理解方法'
        ],
        exercises: [
          {
            type: 'code',
            question: '探索用户行为日志数据',
            codeTemplate: 'import pandas as pd\n\n# 读取用户行为日志\nlogs = pd.read_csv("user_behavior_logs.csv")\n\nprint("数据形状:", logs.shape)\nprint("\\n字段列表:", logs.columns.tolist())\nprint("\\n数据类型:\\n", logs.dtypes)\n\n# 查看行为类型分布\nprint("\\n行为类型分布:\\n", logs[\'action_type\'].value_counts())\n\n# 查看用户数量\nprint("\\n用户数量:", logs[\'user_id\'].nunique())\n\n# 查看时间范围\nlogs[\'timestamp\'] = pd.to_datetime(logs[\'timestamp\'])\nprint("\\n时间范围:", logs[\'timestamp\'].min(), "-", logs[\'timestamp\'].max())\n\n# 查看各用户行为数量分布\nuser_action_counts = logs[\'user_id\'].value_counts()\nprint("\\n用户行为数量分布:\\n", user_action_counts.describe())'
          }
        ]
      },
      { 
        id: 2, 
        title: '时间特征提取', 
        duration: '1.5小时',
        content: [
          '时间戳转换和格式化',
          '提取日期时间特征：年、月、日、时、分、秒',
          '提取周相关特征：星期几、是否周末',
          '提取时段特征：早中晚、工作日/周末',
          '时间差计算和特征',
          '时间序列特征的重要性'
        ],
        exercises: [
          {
            type: 'code',
            question: '提取时间特征',
            codeTemplate: 'import pandas as pd\n\nlogs = pd.read_csv("user_behavior_logs.csv")\nlogs[\'timestamp\'] = pd.to_datetime(logs[\'timestamp\'])\n\n# 提取时间特征\nlogs[\'hour\'] = logs[\'timestamp\'].dt.hour\nlogs[\'day\'] = logs[\'timestamp\'].dt.day\nlogs[\'month\'] = logs[\'timestamp\'].dt.month\nlogs[\'weekday\'] = logs[\'timestamp\'].dt.weekday\nlogs[\'is_weekend\'] = (logs[\'timestamp\'].dt.weekday >= 5).astype(int)\n\n# 定义时段\ndef get_time_period(hour):\n    if 6 <= hour < 12:\n        return \'上午\'\n    elif 12 <= hour < 18:\n        return \'下午\'\n    elif 18 <= hour < 22:\n        return \'晚上\'\n    else:\n        return \'深夜\'\n\nlogs[\'time_period\'] = logs[\'hour\'].apply(get_time_period)\n\n# 计算用户首次和末次访问时间\nuser_first_visit = logs.groupby(\'user_id\')[\'timestamp\'].min().reset_index()\nuser_first_visit.columns = [\'user_id\', \'first_visit\']\n\nuser_last_visit = logs.groupby(\'user_id\')[\'timestamp\'].max().reset_index()\nuser_last_visit.columns = [\'user_id\', \'last_visit\']\n\nprint("时间特征提取完成！")\nprint(logs[[\'timestamp\', \'hour\', \'day\', \'month\', \'weekday\', \'is_weekend\', \'time_period\']].head())'
          }
        ]
      },
      { 
        id: 3, 
        title: '行为特征构建', 
        duration: '1.5小时',
        content: [
          '用户行为序列分析',
          '行为频率统计特征',
          '行为类型组合特征',
          '用户路径分析',
          '访问深度和广度特征',
          '转化率相关特征'
        ],
        exercises: [
          {
            type: 'code',
            question: '构建用户行为特征',
            codeTemplate: 'import pandas as pd\n\nlogs = pd.read_csv("user_behavior_logs.csv")\nlogs[\'timestamp\'] = pd.to_datetime(logs[\'timestamp\'])\n\n# 按用户分组计算行为特征\nuser_features = logs.groupby(\'user_id\').agg(\n    total_actions=(\'action_type\', \'count\'),\n    unique_actions=(\'action_type\', \'nunique\'),\n    first_action=(\'timestamp\', \'min\'),\n    last_action=(\'timestamp\', \'max\'),\n    avg_time_between_actions=(\'timestamp\', lambda x: x.diff().mean().total_seconds())\n).reset_index()\n\n# 计算各行为类型的数量\naction_counts = logs.pivot_table(\n    index=\'user_id\',\n    columns=\'action_type\',\n    values=\'timestamp\',\n    aggfunc=\'count\',\n    fill_value=0\n).reset_index()\n\n# 合并特征\nuser_features = user_features.merge(action_counts, on=\'user_id\')\n\n# 计算行为多样性\nuser_features[\'action_diversity\'] = user_features[\'unique_actions\'] / user_features[\'total_actions\']\n\n# 计算平均访问间隔（天）\nuser_features[\'avg_days_between_visits\'] = (\n    user_features[\'last_action\'] - user_features[\'first_action\']\n).dt.total_seconds() / (86400 * user_features[\'total_actions\'])\n\nprint("用户行为特征:\\n", user_features.head())'
          }
        ]
      },
      { 
        id: 4, 
        title: '统计特征计算', 
        duration: '1.5小时',
        content: [
          '数值特征的统计量：均值、中位数、标准差',
          '时序特征：滑动窗口统计',
          '百分位数特征',
          '累计统计特征',
          '频率和比率特征',
          '相关性特征'
        ],
        exercises: [
          {
            type: 'code',
            question: '计算统计特征',
            codeTemplate: 'import pandas as pd\nimport numpy as np\n\nlogs = pd.read_csv("user_behavior_logs.csv")\nlogs[\'timestamp\'] = pd.to_datetime(logs[\'timestamp\'])\n\n# 按用户计算统计特征\nuser_stats = logs.groupby(\'user_id\').agg(\n    # 基本统计\n    action_count=(\'action_type\', \'count\'),\n    action_std=(\'action_type\', lambda x: x.value_counts().std()),\n    \n    # 时间统计\n    session_duration=(\'timestamp\', lambda x: (x.max() - x.min()).total_seconds()),\n    avg_action_interval=(\'timestamp\', lambda x: x.diff().dropna().mean().total_seconds()),\n    \n    # 页面相关\n    unique_pages=(\'page_id\', \'nunique\'),\n    page_count_std=(\'page_id\', lambda x: x.value_counts().std())\n).reset_index()\n\n# 添加比率特征\nuser_stats[\'avg_actions_per_session\'] = user_stats[\'action_count\'] / (\n    user_stats[\'session_duration\'] / 60 + 1\n)\n\nuser_stats[\'page_diversity\'] = user_stats[\'unique_pages\'] / user_stats[\'action_count\']\n\n# 对数变换（处理长尾分布）\nuser_stats[\'log_action_count\'] = np.log1p(user_stats[\'action_count\'])\nuser_stats[\'log_session_duration\'] = np.log1p(user_stats[\'session_duration\'])\n\nprint("统计特征:\\n", user_stats.head())'
          }
        ]
      },
      { 
        id: 5, 
        title: '特征选择与优化', 
        duration: '1.5小时',
        content: [
          '特征重要性评估方法',
          '相关性分析和特征筛选',
          '特征选择算法：Filter、Wrapper、Embedded',
          '正则化和特征稀疏化',
          '特征降维：PCA、LDA',
          '特征选择的最佳实践'
        ],
        exercises: [
          {
            type: 'code',
            question: '特征选择和相关性分析',
            codeTemplate: 'import pandas as pd\nimport numpy as np\nfrom sklearn.feature_selection import SelectKBest, f_regression\nfrom sklearn.ensemble import RandomForestClassifier\n\n# 加载特征数据\nfeatures = pd.read_csv("user_features.csv")\n\n# 假设我们有目标变量\nfeatures[\'target\'] = np.random.randint(0, 2, len(features))\n\n# 相关性分析\ncorr_matrix = features.corr()\nprint("特征相关性矩阵（前5行）:\\n", corr_matrix[\'target\'].sort_values(ascending=False).head())\n\n# 使用SelectKBest进行特征选择\nX = features.drop([\'user_id\', \'target\'], axis=1)\ny = features[\'target\']\n\nselector = SelectKBest(score_func=f_regression, k=10)\nX_selected = selector.fit_transform(X, y)\n\nselected_features = X.columns[selector.get_support()]\nprint("\\n选中的特征:", selected_features.tolist())\n\n# 使用随机森林评估特征重要性\nrf = RandomForestClassifier(n_estimators=100, random_state=42)\nrf.fit(X, y)\n\nfeature_importance = pd.DataFrame({\n    \'feature\': X.columns,\n    \'importance\': rf.feature_importances_\n}).sort_values(\'importance\', ascending=False)\n\nprint("\\n特征重要性排名:\\n", feature_importance.head(10))'
          }
        ]
      },
      { 
        id: 6, 
        title: '特征存储与使用', 
        duration: '1小时',
        content: [
          '特征存储格式选择',
          '特征存储最佳实践',
          '特征工程流水线',
          '特征版本管理',
          '特征服务和在线推理',
          '特征监控和维护'
        ],
        exercises: [
          {
            type: 'code',
            question: '特征存储和加载',
            codeTemplate: 'import pandas as pd\nimport joblib\n\n# 加载特征\nfeatures = pd.read_csv("user_features.csv")\n\n# 保存特征到磁盘\nfeatures.to_csv("user_features_final.csv", index=False)\n\n# 使用joblib保存特征（适合大数据）\njoblib.dump(features, "user_features.joblib")\n\n# 加载特征\nloaded_features = joblib.load("user_features.joblib")\n\n# 创建特征元数据\nfeature_metadata = {\n    \'version\': \'1.0\',\n    \'created_at\': pd.Timestamp.now().isoformat(),\n    \'feature_count\': len(features.columns) - 1,  # 排除user_id\n    \'row_count\': len(features),\n    \'features\': [col for col in features.columns if col != \'user_id\'],\n    \'description\': \'用户行为特征工程输出\',\n    \'source\': \'user_behavior_logs.csv\'\n}\n\n# 保存元数据\nimport json\nwith open("feature_metadata.json", "w") as f:\n    json.dump(feature_metadata, f, indent=2, ensure_ascii=False)\n\nprint("特征存储完成！")\nprint("特征元数据:\\n", json.dumps(feature_metadata, indent=2, ensure_ascii=False))'
          }
        ]
      }
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
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const toggleChapter = (chapterId: number) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
                  <div key={chapter.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      onClick={() => toggleChapter(chapter.id)}
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
                          expandedChapter === chapter.id ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{chapter.title}</div>
                          <div className="text-sm text-gray-500">{chapter.duration}</div>
                        </div>
                      </div>
                      {expandedChapter === chapter.id ? (
                        <ChevronDown className="w-5 h-5 text-green-600" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    
                    {expandedChapter === chapter.id && chapter.content && (
                      <div className="p-4 pt-0 border-t border-gray-100">
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-green-600" />
                            学习内容
                          </h3>
                          <ul className="space-y-2">
                            {chapter.content.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {chapter.exercises && chapter.exercises.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                              <Code className="w-4 h-4 text-green-600" />
                              练习题
                            </h3>
                            <div className="space-y-4">
                              {chapter.exercises.map((exercise, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                  <p className="font-medium text-gray-800 mb-3">{exercise.question}</p>
                                  {exercise.codeTemplate && (
                                    <div className="relative">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          copyCode(exercise.codeTemplate);
                                        }}
                                        className="absolute top-3 right-3 p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                                        title="复制代码"
                                      >
                                        {copiedCode === exercise.codeTemplate ? (
                                          <Check className="w-4 h-4 text-green-600" />
                                        ) : (
                                          <Copy className="w-4 h-4 text-gray-600" />
                                        )}
                                      </button>
                                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto max-h-96 overflow-y-auto">
                                        <code>{exercise.codeTemplate}</code>
                                      </pre>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
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
