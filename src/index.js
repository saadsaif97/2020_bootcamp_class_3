import React from 'react'
import { Header } from './components/header/Header'
import { Conditional } from './components/conditional/Conditional'
import { Hello, Hi } from './components/hello/Hello'
import ReactDOM from 'react-dom'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <Header />
      <hr />
      <Hello name='Saad' />
      <Hi name='Another name' />
      <Conditional sunnyWeather={true} horizontalPlace='center' />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
