import React from 'react'
import ReactDom from 'react-dom'

import App from './main/App'

import './assets/css/bootstrap.scss'
import './assets/js/bootstrap'

ReactDom.render(
    <App title="Tiny Blog" subtitle="My personal blog"/>,
    document.getElementById('root')
)