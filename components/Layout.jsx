import React, { Children } from 'react'
import Header from './Header'

// parameter harus children. Children ini berisikan index.tsx
function Layout({children}) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default Layout