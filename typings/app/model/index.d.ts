// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUser from '../../../app/model/User';
import ExportArticle from '../../../app/model/article';

declare module 'egg' {
  interface IModel {
    User: ReturnType<typeof ExportUser>;
    Article: ReturnType<typeof ExportArticle>;
  }
}
