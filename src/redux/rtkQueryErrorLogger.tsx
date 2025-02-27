/* eslint-disable @typescript-eslint/no-explicit-any */
import {isRejectedWithValue} from "@reduxjs/toolkit"
import type {MiddlewareAPI, Middleware} from "@reduxjs/toolkit"
import Cookies from "js-cookie"
import Swal from "sweetalert2"

export const rtkQueryErrorLogger: Middleware =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (api: MiddlewareAPI) => next => (action: any) => {
    if (isRejectedWithValue(action)) {
      if (action.payload.status === 403) {
        Swal.fire(
          action.payload.data.error.message,
          "You clicked the button!",
          "error"
        )
      }
      const loginPath = `${window.location.origin}/login`
      if (action.payload.status === 401 && window.location.href !== loginPath) {
        Cookies.remove("accessToken")
        window.location.href = loginPath
      }
    }

    return next(action)
  }
