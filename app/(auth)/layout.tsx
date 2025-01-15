import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='auth'>{children}</main>
  )
}

export default Layout

//what a layout is 
//a layout exports the children and then allow u to put some shared ui

//for example u dont want the authentication pages routes to have nav and footer
//and we need these in all other pages so now we will put them here at one place.


//isiliye yaha pr ek aur banao root.
