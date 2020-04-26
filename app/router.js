
// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/user', controller.user.user);
  router.get('/login', controller.login.login);
  router.post('/register', controller.register.register);
  router.post('/addOneTodo', controller.todo.add);
  router.get('/queryTodo', controller.todo.query);
  router.post('/switchStatus', controller.todo.switchStatus);
};