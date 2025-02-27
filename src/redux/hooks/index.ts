import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import { AppDispatch, RootState } from "../store"


export type LoggedInUserInfo = {
  role: string
  loginName: string
  facilityId: number
  userId: number
}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
