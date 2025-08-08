import React, { ReactNode } from 'react'

const LayoutRoot = ({children}: {children: ReactNode} ) => {
  return (
   <div>{children}</div>
  )
}

export default LayoutRoot;