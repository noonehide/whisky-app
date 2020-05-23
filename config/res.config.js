'use strict';
// https://www.yuque.com/easy-team/egg-react/config
const path = require('path');
const resolve = (filepath) => {
  let res = path.resolve(__dirname, filepath)
  return res
};
module.exports = {
  entry: {
    blog: 'app/web/page/blog/index.tsx'
  },
  resolve: {
    // 设置别名
    alias: {
      '@': resolve('../app'),
      '@controller': resolve('../app/controller'),
      '@extend': resolve('../app/extend'),
      '@model': resolve('../app/model'),
      '@service': resolve('../app/service'),
      '@web': resolve('../app/web'),
      '@component': resolve('../app/web/component'),
      '@framework': resolve('../app/web/framework'),
      '@blog': resolve('../app/web/page/blog'),
    }
  },
  module: {
    rules: [
      {
        less: {
          include: [resolve('../app/web'), resolve('../node_modules')],
          options: {
            javascriptEnabled: true
          }
        }
      },
      {
        typescript: true
      }
    ],
  },
  plugins: [
    { imagemini: false }
  ]
};