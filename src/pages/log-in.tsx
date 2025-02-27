import LoginForm from "@/components/Auth/LoginForm"
import HeadTitle from "@/components/SharedComponents/Headertitle"
import React from "react"

const Login = () => {
  return (
    <>
      <HeadTitle title={"Login"} />
      <LoginForm />
    </>
  )
}

export default Login
