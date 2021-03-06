# whisky-app 监控平台前端和 Node 端

## 版本

- Res（Egg） 版本： ^2.0.0
- Node 版本: Node ^8.0.0,
- Webpack 版本: ^4.0.0
- React 版本: ^16.0.0
- TypeScript: ^3.0.0

## 特性

- 支持 Webpack 时时编译和热更新, `npm run dev` 一键启动应用

## 运行

#### 安装依赖

```bash
npm install
```

#### 本地启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

#### 构建文件

- TypeScript Egg 构建

```bash
npm run tsc
```

- TypeScript 前端工程构建

```bash
npm run build
```

#### 打包部署

1. 先运行 `npm run tsc` 和 `npm run build` 构建 TypeScript Egg 代码和 TypeScript 前端代码
2. 项目代码和构建代码一起打包代码
3. 应用部署后，通过 `npm start` 启动应用

## 开发

#### 数据库迭代-生成一个 Migrations 文件

```js
  npx sequelize migration:generate --name=<操作名称>
```

#### 数据库升级版本-升级版本的时候会调用 up 函数,在函数中对数据表进行更新迭代（创建、修改、删除

```js
  npx sequelize db:migrate
```

### 数据库回退版本

```js
  npx sequelize db:migrate:undo
```

#### 编写前端代码

> 添加 `${root}/app/web/page/demo.tsx` 前端代码

```js
'use strict'
import React, { Component } from 'react'
class Demo extends Component<any, any> {
  render() {
    const { title, article } = this.props
    return (
      <div>
        <h1 className="easy-article-detail-title">{title}</h1>
        <h3 className="easy-article-detail-title">{article.title}</h3>
        <div>{article.content}</div>
      </div>
    )
  }
}
export default Demo
```

#### 编写 Node 代码

> 添加 `${root}/app/controller/demo.ts` Node 代码

```js
import { Controller, Context } from 'egg';

export default class DemoController extends Controller {
  public async index(ctx: Context) {
    const title = 'Node 直接获取渲染数据';
    const article = await ctx.service.article.query({ id: Number(id) });
    await ctx.render('demo.js', { title, article });
  }
}
```

#### Egg 路由配置

> 添加 `${root}/app/router.ts` Egg 路由配置

```js
import { Application } from 'egg'
export default (app: Application) => {
  const { router, controller } = app
  router.get('/demo', controller.demo.index)
}
```

#### Webpack 构建配置

> 添加 `${root}/webpack.config.js` 新增页面 entry 配置

```js
module.exports = {
  entry: {
    demo: 'app/web/page/demo.tsx',
  },
}
```

## License

[MIT](LICENSE)
