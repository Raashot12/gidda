import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from "@/redux/store"

// Define the type for the slice state.
interface UserState {
  authData: unknown | null // Replace `unknown` with a more specific type if available.
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

// Selector to retrieve the user state.
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
