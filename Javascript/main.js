import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

//used to inject react code to the browser
ReactDOM.render(<App data={JSON.parse(document.getElementById('data').innerHTML)}/>,document.getElementById('root'));
