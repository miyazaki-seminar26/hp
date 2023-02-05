import { AppLayout } from '@/components/layout/layout'
import { AboutUs } from '@/components/pages/AboutUs'
import { FAQ } from '@/components/pages/Faq'
import { NextPage } from 'next'
import React from 'react'

const FaqPage: NextPage = () => {
  return (
    <AppLayout pageName='PROJECT'>
      <FAQ />
    </AppLayout>
  )
}

export default FaqPage
