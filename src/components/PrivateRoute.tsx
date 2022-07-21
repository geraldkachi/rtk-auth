import { ReactNode } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectAuth } from '../features/authSlice/authSlice'
import LoadingToRedirect from './LoadingToRedirect'

const PrivateRoute = (children: ReactNode | any) => {
    const { token } = useAppSelector(selectAuth)

    return token ? children : <LoadingToRedirect />
}

export default PrivateRoute