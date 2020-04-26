const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const ctx = this.ctx;
    const user = await ctx.service.login.find(ctx.query);
    ctx.body = user;
  }
}

module.exports = LoginController;