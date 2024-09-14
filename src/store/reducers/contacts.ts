import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ContactObj = {
  name: string
  phone: string
  email: string
  id: number
}

const initialState = {
  itens: [
    {
      name: 'Ramon Sávio',
      phone: '(83) 99935-8377',
      email: 'ramon@example.com',
      id: 1
    },
    {
      name: 'Maria Silva',
      phone: '(83) 99999-8888',
      email: 'maria@example.com',
      id: 2
    },
    {
      name: 'João Pedro',
      phone: '(83) 99999-8888',
      email: 'joão@example.com',
      id: 3
    }
  ]
}

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    },
    edit: (state, action: PayloadAction<ContactObj>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id)
      if (index !== -1) {
        state.itens[index] = action.payload
      }
    }
  }
})

export default ContactsSlice.reducer
export const { remove, edit } = ContactsSlice.actions
