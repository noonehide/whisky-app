// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportJwt = require('../../../app/middleware/jwt');
import ExportLocal from '../../../app/middleware/local';

declare module 'egg' {
  interface IMiddleware {
    jwt: typeof ExportJwt;
    local: typeof ExportLocal;
  }
}
