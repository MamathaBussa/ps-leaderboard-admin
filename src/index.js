import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App.react'
import {eventData} from './data'

ReactDOM.render(
    <App componentData={eventData} />,
    document.getElementById('root')
)
