import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { injectGlobal } from "styled-components";

injectGlobal`
  @font-face {
    font-family: "Roboto";
    src: url('https://fonts.googleapis.com/css?family=Roboto:700,400');
  }
  * {
    margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
    font-family: "Roboto", sans-serif;
  }
  a {
    text-decoration: none;
    color: black;
  }
  html {
    font-size: 16px;

    @media (max-width: 900px) {
      font-size: 14px;
    }
    @media (max-width: 600px) {
      font-size: 12px;
    }

  }
`

const ThemedApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
