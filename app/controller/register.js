const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async register() {
    const ctx = this.ctx;
    const params = ctx.request.body
    const status = await ctx.service.register.register(params);
    ctx.body = status;
  }
}

module.exports = RegisterController;