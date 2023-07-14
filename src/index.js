

// when we import from react, it allows us to use "JSX" syntax
import React from 'react';
// ReactDOM renders our whole app onto the page
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
//  App is a component that we made up
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeProvider';

// Entry point
// The webpack configuration of react is using src/index.js as its entry point
//  this is telling reactDOM where
// we want to render our whole application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Actually rendering our application
root.render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>
  );