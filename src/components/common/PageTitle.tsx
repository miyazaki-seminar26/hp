import { MediaQuery, Text } from '@mantine/core'
import { FC } from 'react'

type Props = {
  title: string
  withSeminar?: boolean
}

export const PageTitle: FC<Props> = ({ title, withSeminar }) => {
  return (
    <div className='relative border-b-2  inline-block pl-2 pr-16 md:pr-40 border-gray-400'>
      {withSeminar && (
        <Text size='sm' className='tracking-widest absolute -top-3 whitespace-nowrap'>
          <span className='pr-4'>M I Y A Z A K I</span>
          <span>S E M I N A R</span>
        </Text>
      )}

      <MediaQuery smallerThan='md' styles={{ display: 'hidden' }}>
        <Text size='lg' className='sm:hidden leading-relaxed' weight='bold'>
          {title}
        </Text>
      </MediaQuery>

      <MediaQuery largerThan='md' styles={{ display: 'hidden' }}>
        <Text size='xl' className='hidden sm:inline-block leading-relaxed' weight='bold'>
          {title}
        </Text>
      </MediaQuery>
    </div>
  )
}
