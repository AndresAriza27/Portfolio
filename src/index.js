import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './Jumbotron';
import {ThemeProvider} from 'react-bootstrap';
import Tecnologies from './Tecnologies';
import Description from './Description';
import Contact from './Contact';

const bgColor = { backgroundColor : '#808080' }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ThemeProvider theme = {bgColor}>
      <Jumbotron />
      <Tecnologies />
      <Description/>
      <Contact/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
