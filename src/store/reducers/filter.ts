import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  searchTerm: string
}

const initialState: FilterState = {
  searchTerm: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    }
  }
})

export default filterSlice.reducer
export const { setSearchTerm } = filterSlice.actions
