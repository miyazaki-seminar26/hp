import React from 'react'
import { NextPage } from 'next'

import { Home } from '@/components/pages/Home'
import { AppLayout } from '@/components/layout/layout'

const HomePage: NextPage = () => {
    return (
        <AppLayout>
            <Home />
        </AppLayout>
    )
}

export default HomePage
