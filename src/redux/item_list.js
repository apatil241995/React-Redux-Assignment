import { createSlice } from '@reduxjs/toolkit'

export const itemListSlice = createSlice({
  name: 'itemList',
  initialState: {
    value: [],
  },
  reducers: {
    ADD: (state, action) => {
      state.value.push(action.payload)
    },
    REMOVE: (state, action) => {
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i] === action.payload) {
          state.value.splice(i, 1)
        }
      }
    }
  },
})

export const { ADD, REMOVE } = itemListSlice.actions

export default itemListSlice.reducer