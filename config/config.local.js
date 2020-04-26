// only read at development mode, will override default
exports.robot = {
  ua: [
    /Baiduspider/i,
  ],
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