import { Text } from '@mantine/core'
import { FC } from 'react'

type Props = {
  title: string
}

export const PageTitle: FC<Props> = ({ title }) => {
  return (
    <div className='relative border-b-2  inline-block pl-2 pr-40 border-gray-400'>
      <Text size='sm' className='tracking-widest absolute -top-3 whitespace-nowrap'>
        <span className='pr-4'>M I Y A Z A K I</span>
        <span>S E M I N A R</span>
      </Text>
      <Text size='xl' weight='bold' className='inline-block'>
        {title}
      </Text>
    </div>
  )
}
