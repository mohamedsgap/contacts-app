import React from 'react'
import ReactDOM from 'react-dom'
import { BrowerRouter } from 'react-router-dom' 
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(<BrowerRouter><App /></BrowerRouter>, document.getElementById('root'));
registerServiceWorker();
