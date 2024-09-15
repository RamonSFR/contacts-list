import { Provider } from 'react-redux'

import GlobalStyle from './styles'
import store from './store'
import Header from './containers/Header'
import ContactsList from './containers/ContactsList'
import AddBtn from './components/AddBtn'
import ContactAddModal from './components/ContactAddModal'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <ContactsList />
      <AddBtn />
      <ContactAddModal />
    </Provider>
  )
}

export default App
