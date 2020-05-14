import { EggAppConfig } from 'egg';
import * as path from 'path';

export default (app: EggAppConfig) => {
  const config: any = {};

  config.development = {
    watchDirs: ['app'], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config/manifest.json', 'app/lib/db/blog.json'] // 指定过滤的目录（包括子目录）
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '12345678',
      // 数据库名
      database: 'whisky',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};

