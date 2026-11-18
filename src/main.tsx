import { render } from 'preact'
import './index.scss'
import { App } from './app.tsx'
import '@fortawesome/fontawesome-free/css/all.min.css'

render(<App />, document.getElementById('app')!)
