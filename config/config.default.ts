import * as path from 'path';
import * as fs from 'fs';
import { EggAppConfig } from 'egg';
export default function (app: EggAppConfig) {
  const config: any = {};

  config.middleware = [
    'local'
  ];

  config.redis = {
    user: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0,
    }
  };

  config.jwt = {
    secret: '123456',
    enable: true,
    ignore: ['/', '/api/blog/login/', '/public/'], // 哪些请求不需要认证
  };

  return config;
}