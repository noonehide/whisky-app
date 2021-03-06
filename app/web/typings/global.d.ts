declare var EASY_ENV_IS_NODE: boolean;
declare var EASY_ENV_IS_DEV: boolean;
declare var EASY_ENV_IS_BROWSER: boolean;
declare var process: {
  env: {
    NODE_ENV: string
  }
};
interface Window {
  __INITIAL_STATE__: any;
  EASY_ENV_IS_NODE: boolean;
  stores: any;
}
interface NodeModule {
  hot: {
    accept: any;
  }
}

declare module '*.css'
declare module '*.less'
