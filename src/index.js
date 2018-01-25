import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Application from './components/Application';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();