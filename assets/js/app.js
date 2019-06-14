import React from 'react'
import ReactDOM from 'react-dom'
import '../css/app.css'
import Root from './Root'

import 'phoenix_html'

const Test = () => <div>React Test</div>

ReactDOM.render(<Root />, document.getElementById('mountPoint'))
