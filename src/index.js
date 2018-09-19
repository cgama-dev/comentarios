import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { database, auth } from './firebase'

// import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App database={database} auth={auth} />, document.getElementById('root'));
// registerServiceWorker();
