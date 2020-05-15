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