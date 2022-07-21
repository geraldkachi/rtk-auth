import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'

const IndianRtkJwt = () => {
    return (
        <>
            <Route path='/' element={<Navigate to='/auth' replace />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/dashboard' element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            }
            />
        </>
    )
}

export default IndianRtkJwt