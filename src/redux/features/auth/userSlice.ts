import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from "@/redux/store"

interface UserState {
  authData: unknown | null
}

const initialState: UserState = {
  authData: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthUserData: (state, action: PayloadAction<unknown>) => {
      state.authData = action.payload
    },
    clearUserDetails: state => {
      state.authData = null
    },
  },
})

export const {setAuthUserData, clearUserDetails} = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
