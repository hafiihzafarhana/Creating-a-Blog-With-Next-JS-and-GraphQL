// _app.txt menjadi file utama
import React, {useEffect, useState} from 'react';
import {Layout} from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    // Layout berisikan header. Apabila diimplementasikan seperti inii, maka header akan selalu ada
    <Layout>
      {/* berisikan index.tsx */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
