
// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/user', controller.user.user);
  router.get('/login', controller.login.login);
  router.post('/register', controller.register.register);
};