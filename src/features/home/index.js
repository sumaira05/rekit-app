export { default as HeroSection } from './HeroSection';
export { default as WhatWeDo } from './WhatWeDo';
/*export { default as App } from './App';
export { default as WelcomePage } from './WelcomePage';*/

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './WelcomePage';

ReactDOM.render(
  <>
    <BrowserRouter>
      <WelcomePage />
      {/* <App /> */}
    </BrowserRouter>
  </>,
);
