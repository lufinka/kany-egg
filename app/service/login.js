const Service = require('egg').Service;

class LoginService extends Service {
  async find(params) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('user', params);
    if (user) {
      return {
        code: 200,
        data: user,
        msg: '登录成功'
      }
    } else {
      return {
        code: 300,
        data: null,
        msg: '请校验登录信息是否正确'
      }
    }
  }
}

module.exports = LoginService;