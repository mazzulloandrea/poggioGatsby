import React from 'react';
import { Cover } from '../containers';
import { COOKIE_NAME, getCookie } from '../utils';
import './mainCss.css';

// NB use to force STATIC site PRE-LIVE
// const staticSite = false;

const App = () => {
  if (!getCookie(COOKIE_NAME)) {
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.location.pathname = '/';
    }
  }
  return <Cover />;
};

export default App;
