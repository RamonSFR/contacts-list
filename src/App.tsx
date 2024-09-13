import { Provider } from 'react-redux'

import GlobalStyle from './styles'
import store from './store'
import Header from './containers/Header'
import ContactsList from './containers/ContactsList'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <ContactsList />
    </Provider>
  )
}

export default App
