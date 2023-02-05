import React from 'react'
import { AppProps } from 'next/app'

import { MantineProvider } from '@mantine/core'

import '@/styles/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: 'light',
    }}
  >
    <Component
      /* eslint-disable react/jsx-props-no-spreading */
      {...pageProps}
    />
  </MantineProvider>
)

export default App
