import React from "react"

type AuthLayoutProps = {
  title: string
  subTitle: string
  id: "login" | "signup" | "reset" | "update" | "checkEmail"
  children: React.ReactNode
  buttonElement?: React.ReactNode
}

const containerBgImages: Record<string, string> = {
  login: "/images/seth-login.svg",
}

const leftCoverBgImages: Record<string, string> = {
  login: "/images/seth-login.svg",
}

const rightFormClasses: Record<string, string> = {
  login: "bg-white shadow-md p-8 sm:p-12 w-full lg:w-[480px]",
  signup: "bg-white shadow-md p-6 sm:p-12 w-full lg:w-[806px] pb-32",
  reset: "bg-white shadow-md p-8 sm:p-12 w-full lg:w-[480px] min-h-screen",
  update: "bg-white shadow-md p-8 sm:p-12 w-full lg:w-[480px] min-h-screen",
  checkEmail:
    "bg-white shadow-md px-6 sm:px-12 pt-8 w-full lg:w-[480px] h-screen lg:h-[945px]",
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  id,
  title,
  subTitle,
  buttonElement,
  children,
}) => {
  const containerBg = containerBgImages[id]
  const leftCoverBg = leftCoverBgImages[id]
  const rightFormClass =
    rightFormClasses[id] || "bg-white shadow-md p-8 sm:p-12 w-full"

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 lg:hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{backgroundImage: `url(${containerBg})`}}
        >
          <div className="w-full h-full bg-black opacity-75" />
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row w-full h-full">
        <div
          className={`hidden ${
            id === "signup" ? "xl:block" : "lg:block"
          } flex-1 bg-cover bg-center`}
          style={{backgroundImage: `url(${leftCoverBg})`}}
        />

        {/* Right Form */}
        <div
          className={`flex flex-col justify-center items-center z-10 mx-auto ${rightFormClass}`}
        >
          {buttonElement && <div className="mb-5">{buttonElement}</div>}
          <div
            className={`w-full ${
              buttonElement ? "flex justify-between items-center mb-4" : "mb-4"
            }`}
          >
            <div>
              <h2 className="text-[24px] font-[700] text-gray-900">{title}</h2>
              <p className="pt-2 text-[14px] font-[500] text-primaryGreen">
                {subTitle}
              </p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
