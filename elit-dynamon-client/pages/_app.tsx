import '../styles/globals.scss'
import React from "react";
import router from "next/router";

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp
