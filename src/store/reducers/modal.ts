import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isActive: false
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isActive = !state.isActive
    }
  }
})

export default ModalSlice.reducer
export const { toggleModal } = ModalSlice.actions
