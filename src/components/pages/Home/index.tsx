import { Container, Image, MediaQuery, Text } from '@mantine/core'
import { FC } from 'react'

export const Home: FC = () => (
  <div className='w-full md:flex'>
    <div>
      <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
        <Text
          size='lg'
          className='sm:hidden leading-relaxed border-gray-400 border-b-2 inline-block pl-4 pr-20'
          weight='bold'
        >
          経済✖️ITを活かした
          <br />
          新しい人材へ
        </Text>
      </MediaQuery>

      <MediaQuery largerThan='md' styles={{ display: 'hidden' }}>
        <Text
          size='xl'
          className='hidden sm:inline-block leading-relaxed border-gray-400 border-b-2 pl-4 pr-20'
          weight='bold'
        >
          経済✖️ITを活かした
          <br />
          新しい人材へ
        </Text>
      </MediaQuery>

      <Text lh={2.5} className='pl-4'>
        なぜ文系のわたしたちが IT を学ぶのか。
        <br /> IT を駆使した新しい人材を目指し、
        <br />
        日々活動しています。
      </Text>
    </div>

    <Container mr={{ sm: '42%', md: '44%', xl: '46%' }}>
      <div className='hidden md:inline-block absolute -z-10'>
        <Image src='/right-top-visual.svg' alt='right-top-visual' className='w-[36vw]' />
      </div>

      <div className='md:hidden block -mt-12'>
        <Image src='/sp-top-visual.svg' alt='sp-top-visual' className='' />
      </div>
    </Container>
  </div>
)
