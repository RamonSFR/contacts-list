import { createSlice } from '@reduxjs/toolkit'

export type ContactObj = {
  name: string
  phone: string
  email: string
}

const initialState = [
  {
    name: 'Ramon Sávio',
    phone: '(83) 99935-8377',
    email: 'ramon@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  },
  {
    name: 'Maria Silva',
    phone: '(83) 99999-8888',
    email: 'maria@example.com'
  }
]

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {}
})

export default ContactsSlice.reducer
