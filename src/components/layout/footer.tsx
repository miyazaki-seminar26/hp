import { InstagramIcon } from '../icon/InstagramIcon'
import { TwitterIcon } from '../icon/TwitterIcon'
import { Anchor, Flex, Text } from '@mantine/core'

export const AppFooter = () => {
  return (
    <footer className='flex  py-4'>
      <Flex gap={24}>
        <Anchor className='hover:opacity-80 transition-opacity'>
          <InstagramIcon />
        </Anchor>
        <Anchor className='hover:opacity-80 transition-opacity'>
          <TwitterIcon />
        </Anchor>
        <Text color='white' size='xs' className='flex items-center'>
          ©️miyazaki-seminar 2023
        </Text>
      </Flex>
    </footer>
  )
}
