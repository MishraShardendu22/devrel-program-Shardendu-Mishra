import React from 'react'
import { Navbar, Footer } from '@/components'

type Props = {
  children: React.ReactNode
}

export const MarketingTemplate: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MarketingTemplate
