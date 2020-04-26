//此处改为你自己的 Cookie 安全字符串
exports.keys = '123456';
// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};

// 添加 news 的配置项
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: 'localhost',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: '123456',
    // 数据库名
    database: '1112',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};

exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true,
  },
  domainWhiteList: [ '*'],
};
exports.cors = {
  origin: '*', // 匹配规则  域名+端口  *则为全匹配
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};