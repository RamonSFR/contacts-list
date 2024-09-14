import { Provider } from 'react-redux'

import GlobalStyle from './styles'
import store from './store'
import Header from './containers/Header'
import ContactsList from './containers/ContactsList'
import BtnAdd from './components/BtnAdd'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <ContactsList />
      <BtnAdd />
    </Provider>
  )
}

export default App
