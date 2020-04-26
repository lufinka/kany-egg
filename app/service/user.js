const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const person = await this.app.mysql.get('user', { id: '1' });
    return { person };
  }
}

module.exports = UserService;