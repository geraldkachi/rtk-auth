import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { logout, selectAuth } from '../features/authSlice/authSlice'

const Dashboard = () => {
    const { name } = useAppSelector(selectAuth)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout());
        toast.success("User Logged Out Successfully")
        navigate('/auth')

    }
    return (
        <div className="vh-100 gradient-custom">
            <div className="container py-4 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-4 text-center">
                                <div className="mb-md-5 mgt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2">Welcome to Dashboard</h2>
                                    <h4>Name: {name}</h4>

                                    <button className="btn btn-outline-light btn-lg px-5" type='button' onClick={() => handleLogout()}>LogOut</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard