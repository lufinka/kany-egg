const Service = require('egg').Service;

class registerService extends Service {
  async register(params) {
    // 先校验用户是否已经注册
    const user = await this.app.mysql.get('user', { "phone": params.phone });
    if (user) {
      // 已注册
      return {
        code: 300,
        data: null,
        msg: '该手机号已经注册，请直接登录或找回密码'
      }
    } else {
      const user = await this.app.mysql.insert('user', { 'name': params.name, 'nick': params.nick, 'phone': params.phone, 'regist_time': new Date(), 'password': params.password, 'type': '1', id: Math.random().toString(36).slice(-8) });
      return {
        code: 200,
        data: user,
        msg: `${params.nick}注册成功！`
      }
    }
  }
}

module.exports = registerService;