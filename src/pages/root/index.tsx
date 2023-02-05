import { AppLayout } from '@/components/layout/layout'
import { Home } from '@/components/pages/Home'
import { NextPage } from 'next'
import React from 'react'

const HomePage: NextPage = () => {
  return (
    <AppLayout pageName='HOME'>
      <Home />
    </AppLayout>
  )
}

export default HomePage
