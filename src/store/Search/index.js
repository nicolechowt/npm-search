import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

export const searchPackage = createAsyncThunk(
  'search/requestStatus',
  async ({ query, simulateError }, thunkAPI) => {
    if (simulateError) {
      return Promise.reject({
        message: `Here's your simulated error.`
      })
    }

    const request = query =>
      new Request(
        `https://api.npms.io/v2/search/suggestions?q=${query}`
      )
    return await fetch(request(query))
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .catch(error =>
        thunkAPI.rejectWithValue(error.response)
      )
  }
)

export const searchSlice = createSlice({
  name: 'Search',
  initialState: {
    busy: false,
    error: null,
    query: '',
    entities: []
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchPackage.pending, (state, action) => {
        const {
          meta: { arg: { query } = {} } = {}
        } = action

        state.busy = true
        state.error = null
        state.query = query
        state.entities = []
      })
      .addCase(searchPackage.fulfilled, (state, action) => {
        state.busy = false
        state.entities.push(...action.payload)
      })
      .addCase(searchPackage.rejected, (state, action) => {
        const { error: { message } = {} } = action
        state.busy = false
        state.error = message
      })
  }
})

export default searchSlice.reducer
