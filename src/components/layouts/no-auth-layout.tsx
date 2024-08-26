import * as React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { Outlet, useNavigate } from 'react-router-dom'
import LoadingSpinner from '../ui/spinner'

export default function NoAuthLayout() {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (isLoaded && userId) {
      navigate('/')
    }
  }, [isLoaded])

  if (!isLoaded) return (
		<div className="flex flex-col items-center h-svh justify-center">
			<LoadingSpinner/>
		</div>
	)

  return <Outlet />
}
