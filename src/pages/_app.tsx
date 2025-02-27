import "@/styles/globals.css"
import {NextPage} from "next"
import type {AppProps} from "next/app"
import {ReactElement, ReactNode} from "react"
import {Provider} from "react-redux"
import store, {persistor} from "@/redux/store"
import {PersistGate} from "redux-persist/integration/react"
// fonts
import "@fontsource-variable/red-hat-display/wght-italic.css"
import ProtectedPage from "@/components/Auth/ProtectedPage"

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
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProtectedPage>
          <Main Component={Component} {...pageProps} />
        </ProtectedPage>
      </PersistGate>
    </Provider>
  )
}
