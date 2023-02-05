import { AppFooter } from './footer'
import { AppHeader } from './header'
import { Box, Center, Container, Flex, Image } from '@mantine/core'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const AppLayout: FC<Props> = (props) => {
  const { children } = props

  return (
    <Box className='h-screen'>
      <Flex className='w-full absolute top-0 justify-between'>
        <div className='w-[20vw]'>
          <Image src='/left-header-image.svg' alt='left-header-image' className='w-[120em] h-[40vh]' />
        </div>
        <Container mt='md' mx={{ md: '10%', xs: 0 }} className='right-0 sticky'>
          <AppHeader />
        </Container>
        <div className='absolute top-0 -z-10 right-0 w-[28vw]'>
          <Image src='/right-header-image.svg' alt='right-header-image' />
        </div>
      </Flex>

      <main>
        <Container mt={84} mx={{ md: '15%', xs: 0 }}>
          <Center>{children}</Center>
        </Container>
      </main>
      <div className='bottom-0 bg-[#323232] sticky w-full top-full'>
        <Container mx={{ md: '15%', xs: 0 }}>
          <AppFooter />
        </Container>
      </div>
    </Box>
  )
}
