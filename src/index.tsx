import React from 'react';
import ReactDOM from 'react-dom/client';

import "style/__app.scss";

import reportWebVitals from './reportWebVitals';

import _BasePage from "pages/_BasePage";

const root = ReactDOM.createRoot
(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <_BasePage/>
  </React.StrictMode>
);


reportWebVitals();
