import { Anchor, Container } from '@mantine/core'
import Image from 'next/image'
import React, { FC } from 'react'

export const AppHeader: FC = () => (
  <header>
    <nav>
      <ul className='flex gap-8 text-[16px] md:text-xl'>
        <li>
          <Anchor href='/project' color='dark'>
            PROJECT
          </Anchor>
        </li>
        <li>
          <Anchor href='/project' color='dark'>
            ABOUT US
          </Anchor>
        </li>
        <li>
          <Anchor href='/project' color='dark'>
            FAQ
          </Anchor>
        </li>
      </ul>
    </nav>
  </header>
)
