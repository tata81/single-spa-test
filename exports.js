import './set-public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from 'regenerator-runtime';
import singleSpaReact from 'single-spa-react';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  regeneratorRuntime,
  rootComponent: () => (<div>I am header loading from CDN</div>)
});
export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
