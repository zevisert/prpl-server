// TODO(aomarks) Add types to rendertron repo.
declare module 'rendertron-middleware' {
import * as express from 'express';

  export interface Options {
    proxyUrl: string;
    userAgentPattern?: RegExp;
    excludeUrlPattern?: RegExp;
    injectShadyDom?: boolean;
    timeout?: number;
  }

  export function makeMiddleware(options: Options): express.Handler;
}
