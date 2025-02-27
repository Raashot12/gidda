import {useRouter} from "next/router"
import {useEffect} from "react"
import Cookies from "js-cookie"
import {useAppDispatch, useAppSelector} from "@/redux/hooks"
import {AuthStatus, logOut, selectAuth} from "@/redux/features/auth/authSlice"
import {useIdle} from "../hooks/useIdle"

type ProtectedPageProps = {
  children: React.ReactNode
}

const unprotectedPages = [/log-in(.*)/]
const MAX_IDLE_TIME_BEFORE_LOG_OUT = 60000 * 60 // 1 hour

const ProtectedPage = ({children}: ProtectedPageProps) => {
  const idle = useIdle(MAX_IDLE_TIME_BEFORE_LOG_OUT, {initialState: false})
  const dispatch = useAppDispatch()

  const masterPattern = new RegExp(unprotectedPages.join("|"))
  const auth = useAppSelector(selectAuth)
  const router = useRouter()

  useEffect(() => {
    if (idle && router.route !== "/log-in") {
      dispatch(logOut())
      Cookies.remove("token")
      router.push("/log-in")
    }
  }, [idle])

  useEffect(() => {
    if (
      auth?.status === AuthStatus.loggedOut &&
      masterPattern.test(router.route)
    ) {
      router.push("/log-in")
    }
  }, [auth, router])

  return <>{children}</>
}

export default ProtectedPage
