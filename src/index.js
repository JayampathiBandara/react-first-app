import "bootstrap/dist/css/bootstrap.min.css"; // webpack support this import and inject it

import React from "react"
import {render} from "react-dom"
import HomePage from './components/HomePage'

render(<HomePage/>,document.getElementById('root'))