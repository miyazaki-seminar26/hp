import '@/styles/mantineBase.css'
import '@/styles/tailwind.css'
import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import React from 'react'

const App = ({ Component, pageProps }: AppProps) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: 'light',
      fontFamily: 'Inria Sans',
      fontSizes: {
        xs: '0.6rem',
        sm: '0.75rem',
        md: '0.9rem',
        lg: '1rem',
        xl: '1.2rem',
      },
    }}
  >
    <Component
      /* eslint-disable react/jsx-props-no-spreading */
      {...pageProps}
    />
  </MantineProvider>
)

export default App
