import React from 'react'

import { IGuardProps } from './types/IGuardProps'


const GuestGuard = ({children}: IGuardProps) => {
  // const isAuthorized = useAppSelector(selectIsAuthorized)

  // if (isAuthorized) return <Navigate to="/" />
  
  return children
}

export {GuestGuard}