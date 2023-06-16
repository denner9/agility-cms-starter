import Router from "next/router"
import { Inter } from "@next/font/google"
import nprogress from "nprogress"
import { Provider } from 'react-redux';
import store from "lib/state/store";
import { setLoading } from '../lib/state/rootSlice';
import "../styles/nprogress.min.css"
import "../styles/globals.css"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

import type { AppProps } from "next/app"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../lib/hooks";

export default function App({ Component, pageProps }: AppProps) {
  //Redux
  const rootState = store.getState().root;

  useEffect(() => {
    let active = true
    const setStartLoading = (url: string) => {
      if (!active) return
      store.dispatch(setLoading(true));
      nprogress.start()
    }

    const setDoneLoading = (url: string) => {
      if (!active) return
      store.dispatch(setLoading(false));
      nprogress.done(false)
    }

    nprogress.configure({ showSpinner: false })
    Router.events.on("routeChangeStart", setStartLoading)
    Router.events.on("routeChangeComplete", setDoneLoading)
    Router.events.on("routeChangeError", setDoneLoading)

    return () => {
      active = false
      Router.events.off("routeChangeStart", setStartLoading)
      Router.events.off("routeChangeComplete", setDoneLoading)
      Router.events.off("routeChangeError", setDoneLoading)
    }
  }, [])

  return (
    <Provider store={store}>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
