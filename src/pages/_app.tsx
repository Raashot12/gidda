import "@/styles/globals.css"
import {NextPage} from "next"
import type {AppProps} from "next/app"
import {ReactElement, ReactNode} from "react"

// fonts
import '@fontsource-variable/red-hat-display/wght-italic.css';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function Main({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  const renderComponent = <>{getLayout(<Component {...pageProps} />)}</>

  return <div>{renderComponent}</div>
}

export default function App({Component, pageProps}: AppProps) {
  return <Main Component={Component} {...pageProps} />
}
