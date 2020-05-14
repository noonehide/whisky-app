import DB from '../lib/db/base';
declare module 'egg' {
  interface Application {
    db: DB;
    mysql: any;
  }

  interface Context {
    db: DB;
  }
}