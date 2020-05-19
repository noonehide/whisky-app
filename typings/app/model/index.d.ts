// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApp from '../../../app/model/app';
import ExportUser from '../../../app/model/user';
import ExportUserAppRelation from '../../../app/model/user_app_relation';

declare module 'egg' {
  interface IModel {
    App: ReturnType<typeof ExportApp>;
    User: ReturnType<typeof ExportUser>;
    UserAppRelation: ReturnType<typeof ExportUserAppRelation>;
  }
}
