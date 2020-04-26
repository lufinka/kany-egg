const Service = require('egg').Service;

class todoService extends Service {
  async add(params) {
    // 先校验待办项是否重复
    const hasTodo = await this.app.mysql.get('todos', params);
    if (hasTodo) {
      // 重复
      return {
        code: 300,
        data: null,
        msg: '该待办项已存在'
      }
    } else {
      const user = await this.app.mysql.insert('todos', Object.assign(params, { id: Math.random().toString(36).slice(-8) }));
      return {
        code: 200,
        data: 'success',
        msg: `添加成功！`
      }
    }
  }
  async query(params) {
    const data = await this.app.mysql.select('todos', { where: params });
    if (data) {
      return {
        code: 200,
        data: data,
        msg: ``
      }
    } else {
      return {
        code: 200,
        data: [],
        msg: ''
      }
    }
  }
  async switchStatus(params) {
    const result = await this.app.mysql.update('todos', params); // 更新 posts 表中的记录
    return {
      code: 200,
      data: result,
      msg: ``
    }
  }
}

module.exports = todoService;