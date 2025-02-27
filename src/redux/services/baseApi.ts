import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"
import Cookies from "js-cookie"

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders(headers) {
    const token = Cookies.get("token")
    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers
  },
})

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
})
