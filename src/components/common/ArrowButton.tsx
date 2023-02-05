import { ArrowIcon } from '../icon/ArrowIcon'
import { Anchor } from '@mantine/core'
import { FC } from 'react'

type Props = {
  href: string
}

export const ArrowButton: FC<Props> = ({ href }) => {
  return (
    <Anchor href={href}>
      <div className='rounded-full w-16 h-16 bg-gray-300 flex items-center justify-center hover:bg-gray-400 hover:cursor-pointer hover:transition-all'>
        <ArrowIcon />
      </div>
    </Anchor>
  )
}
