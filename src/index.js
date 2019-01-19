import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/App'

import './assets/css/bootstrap.scss'
import './assets/js/bootstrap'
import { blogReducer } from './blog/reducers/blogReducer';

const reducers = combineReducers({
    blog: blogReducer
})

const store = createStore(reducers)

ReactDom.render(
    <Provider store={store}>
        <App title="Tiny Blog" subtitle="My personal blog" />
    </Provider>,
    document.getElementById('root')
)