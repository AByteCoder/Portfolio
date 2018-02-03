import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
ReactDOM.render(<App data={JSON.parse(document.getElementById('data').innerHTML)}/>,document.getElementById('root'));
