import { configureStore } from '@reduxjs/toolkit'

import contactsReducer from './reducers/contacts'
import filterReducer from './reducers/filter'
import modalReducer from './reducers/modal'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    modal: modalReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
