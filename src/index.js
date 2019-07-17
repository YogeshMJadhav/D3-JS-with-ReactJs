import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BarCharts from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BarCharts />, document.getElementById('root'));

serviceWorker.unregister();
