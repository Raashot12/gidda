import {useState} from "react"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import Cookies from "js-cookie"
import Link from "next/link"
import {useRouter} from "next/router"
import {FaFacebook} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import AuthLayout from "./AuthLayout"
import {MdOutlineAlternateEmail} from "react-icons/md"
import {IoKeySharp} from "react-icons/io5"
import {CiLogout} from "react-icons/ci"
import Swal from "sweetalert2"
import {RxEnter} from "react-icons/rx"
import TextInput from "../SharedComponents/Input"
import LoaderSpinner from "../SharedComponents/Loader"
import {useApiTokenauthAuthenticatePostMutation} from "@/redux/services/tokenAuthApi"
// import {setAuthorizationToken} from "@/utility/tokenValidation"
// For the Facebook icon, you can either use an SVG or a React Icon library

// Define a Zod schema for your login form.
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

type FormValues = z.infer<typeof loginSchema>
function LoginForm() {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitting, setIsubmitting] = useState(false)
  const handleClose = () => setErrorMessage("")
  const [loginPostQuery] = useApiTokenauthAuthenticatePostMutation()
  // Set up react-hook-form with the Zod resolver.
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit = async (values: FormValues) => {
    setIsubmitting(true)
    await loginPostQuery({
      authenticateModel: {...values, type: "DEVELOPER"},
    })
      .unwrap()
      .then(payload => {
        reset()
        Swal.fire(
          payload?.value?.message || "Submitted Successfully!",
          "You clicked the button!",
          "success"
        )
        setIsubmitting(false)
         router.push("/dashboard")
        Cookies.set("token", `${payload?.value?.value?.token}`)
      })
      .catch(errorMessage => {
        console.log(errorMessage)
        setIsubmitting(false)
        const err = errorMessage?.data?.value?.message
        if (err && typeof err === "string") {
          setErrorMessage(err)
        } else {
          setErrorMessage(errorMessage?.message || "An unexpected error occurred.")
        }
      })
  }

  return (
    <AuthLayout
      id="login"
      title={"Welcome Back"}
      buttonElement={
        <div
          className="flex items-center cursor-pointer gap-3"
          onClick={() => router.push("/")}
        >
          <CiLogout
            size={25}
            fontWeight={800}
            color="red"
            className="animate-oscillate"
          />
          <p className="font-[600] text-[16px]">Go back</p>
        </div>
      }
      subTitle={
        "'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis tempus urna eu.'"
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-full">
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-[16px] font-[500]">
              Email
            </label>
            <div className="relative w-full">
              <span className="absolute left-4 top-[14px] text-gray-400">
                <MdOutlineAlternateEmail size={20} color="#335F32" />
              </span>
              <TextInput
                id="email"
                placeholder="Your Email"
                type="email"
                {...register("email")}
                className="mt-1 w-full rounded-[16px] py-4"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-[12px] font-[500] text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-[16px] font-[500]">
              Password
            </label>

            <div className="relative w-full">
              <span className="absolute left-4 top-[14px] text-gray-400">
                <IoKeySharp size={20} color="#335F32" />
              </span>
              <TextInput
                id="password"
                type="password"
                {...register("password")}
                placeholder="Your Password"
                className="mt-1 w-full rounded-[16px] py-4"
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-[12px] font-[500] text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-end">
            <Link href="#" passHref>
              <span className="text-[14px] text-primaryGreen underline">
                Forgot Password?
              </span>
            </Link>
          </div>
          <div className="flex justify-center mt-6">
            <button
              disabled={isSubmitting}
              className="bg-[#1C501E] w-full text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 text-[13px] font-[700] shadow-md hover:bg-[#174319] transition"
            >
              Login{" "}
              {isSubmitting ? (
                <LoaderSpinner size={16} className="ml-1" color="#fffff" />
              ) : (
                <span className="animate-sway">
                  <RxEnter color="white" size={20} />
                </span>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-[500] text-primaryGreen">
              Don’t have an account?
            </span>
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200"
          >
            <FcGoogle size={20} />
            <span className="text-[16px] font-[600] text-primaryGreen">
              Continue with Google
            </span>
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200"
          >
            <FaFacebook className="text-blue-600" size={20} />
            <span className="text-[16px] font-[600] text-primaryGreen">
              Continue with Facebook
            </span>
          </button>
        </div>
      </form>

      {/* Error*/}
      {errorMessage && (
        <div className="mt-4 bg-red-100 text-red-700 p-4 rounded-lg gap-3 flex justify-between items-center">
          <span>{errorMessage}</span>
          <button onClick={handleClose} className="text-sm underline">
            Close
          </button>
        </div>
      )}
    </AuthLayout>
  )
}

export default LoginForm
