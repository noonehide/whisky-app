
import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.post('/api/blog/login', controller.user.login);
  router.post('/api/blog/register', app.jwt, controller.user.register);


  router.get('/(.*?)', controller.blog.home);
};
