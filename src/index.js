import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Globalprovider } from './components/Context/GlobalState';

ReactDOM.render(
  <React.StrictMode>
    <Globalprovider>
    <App />
    </Globalprovider>
  </React.StrictMode>,
  document.getElementById('root')
);

