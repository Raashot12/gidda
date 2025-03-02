import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from "@/redux/store"

interface SearchState {
  search: string
}

const initialState: SearchState = {
  search: "",
}

const searchSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSearchData: (state, action: PayloadAction<{search: string}>) => {
      state.search = action.payload.search
    },
    clearsearchData: state => {
      state.search = ""
    },
  },
})

export const {clearsearchData, setUserSearchData} = searchSlice.actions

export const UserSearchString = (state: RootState) => state.searchSlice

export default searchSlice.reducer
