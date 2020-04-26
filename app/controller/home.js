const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let data = {index2:'kangyu'}
    await this.ctx.render('index/index.tpl', data);
  }
}

module.exports = HomeController;