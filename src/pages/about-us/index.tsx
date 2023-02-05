import { AppLayout } from '@/components/layout/layout'
import { AboutUs } from '@/components/pages/AboutUs'
import { NextPage } from 'next'
import React from 'react'

const AboutUsPage: NextPage = () => {
  return (
    <AppLayout pageName='ABOUT US'>
      <AboutUs />
    </AppLayout>
  )
}

export default AboutUsPage
