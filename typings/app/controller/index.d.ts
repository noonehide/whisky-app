// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApp from '../../../app/controller/app';
import ExportBlog from '../../../app/controller/blog';
import ExportEvent from '../../../app/controller/event';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    app: ExportApp;
    blog: ExportBlog;
    event: ExportEvent;
    user: ExportUser;
  }
}
