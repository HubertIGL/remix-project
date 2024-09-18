import React, { PropsWithChildren } from 'react'

import { NavMenu } from '../components/NavMenu'

interface Props {
  from: string
  title?: string
  description?: string
}

export const DefaultLayout = ({ children, title, description }: PropsWithChildren<Props>) => {
  return (
    <div>
      <NavMenu />
      <div className="py-4 px-3" style={{ marginTop: '40px' }}>
        <div>
          <p className="text-center" style={{ fontSize: '0.8rem' }}>
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}