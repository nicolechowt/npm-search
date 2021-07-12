import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import SearchForm from './components/SearchForm'
import List from './components/List'
import store from '../src/store'

import './styles.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="app" css={{ color: 'darkgray' }}>
        <SearchForm />
        <List />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
