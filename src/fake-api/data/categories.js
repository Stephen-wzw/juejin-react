// 分类数据
export const categories = [
  { category_id: 0, category_name: '推荐', path: '/recommend' },
  {
    category_id: 1,
    category_name: '后端',
    path: '/backend',
    children: [
      { category_id: 11, category_name: 'Java', path: '/backend/Java' },
      { category_id: 12, category_name: 'Python', path: '/backend/Python' },
      { category_id: 13, category_name: 'Go', path: '/backend/Go' },
    ],
  },
  {
    category_id: 2,
    category_name: '前端',
    path: '/frontend',
    children: [
      { category_id: 21, category_name: 'JavaScript', path: '/frontend/JavaScript' },
      { category_id: 22, category_name: 'Vue.js', path: '/frontend/Vue.js' },
      { category_id: 23, category_name: 'React.js', path: '/frontend/React.js' },
    ],
  },
  {
    category_id: 3,
    category_name: 'Android',
    path: '/android',
    children: [
      { category_id: 31, category_name: 'Flutter', path: '/android/Flutter' },
      { category_id: 32, category_name: 'Java', path: '/android/Java' },
      { category_id: 33, category_name: 'Kotlin', path: '/android/Kotlin' },
    ],
  },
  {
    category_id: 4,
    category_name: 'iOS',
    path: '/ios',
    children: [
      { category_id: 41, category_name: 'Swift', path: '/ios/Swift' },
      { category_id: 42, category_name: 'Objective-C', path: '/ios/Objective-C' },
      { category_id: 43, category_name: 'Flutter', path: '/ios/Flutter' },
    ],
  },
];