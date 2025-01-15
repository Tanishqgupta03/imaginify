import React from 'react'
import Sidebar from '@/components/shared/Sidebar'
import MobileNav from '@/components/shared/MobileNav'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar/>
      <MobileNav/>
      {/*sidebar componenet*/}
      {/*Mobile navigation*/}
        <div className='root-container'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    </main>
  )
}

export default Layout

//ab page.tsx banao taaki vaha hum render kr paye

//THIS is the place where all tha pges within the application would be.
