import { configureStore } from '@reduxjs/toolkit'
import itemListReducer from './redux/item_list'

export default configureStore({
  reducer: {
    itemList: itemListReducer
  }

})