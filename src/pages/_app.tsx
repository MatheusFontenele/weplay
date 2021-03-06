import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyles from 'src/styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
