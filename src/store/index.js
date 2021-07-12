import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './Search'

export default configureStore({
  reducer: {
    search: searchReducer
  }
})
