
import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.post('/api/blog/login', controller.user.login);
  router.post('/api/blog/register', app.jwt, controller.user.register);

  router.post('/api/app/create', app.jwt, controller.app.create);
  router.get('/api/app/list', app.jwt, controller.app.list);

  // 上传日志
  router.post('/api/event/create', controller.event.create);

  router.get('/(.*?)', controller.blog.home);
};
