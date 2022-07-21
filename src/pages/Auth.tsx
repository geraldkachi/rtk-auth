import { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit'
import { useLoginUserMutation, useRegisterUserMutation } from '../services/authApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { setUser } from '../features/authSlice/authSlice'


export interface initialStateType {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const Auth = () => {

    const user = JSON.parse(localStorage.getItem("user") || "{}")

    const [formValue, setFormValue] = useState<initialStateType>(initialState)
    const { firstName, lastName, email, password, confirmPassword } = formValue
    const [showRegister, setShowRegister] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [loginUser,
        {
            data: loginData,
            isSuccess: isLoginSuccess,
            isError: isLoginError,
            error: loginError,
            isLoading,
            reset,
            status,
        }] = useLoginUserMutation()
    const [registerUser, {
        data: registerData,
        isSuccess: isRegisterSuccess,
        isError: isRegisterError,
        error: registerError
    }] = useRegisterUserMutation()
    // 07062665790 leinad
        const handleChange = (e: any) => setFormValue({ ...formValue, [e.target.name]: e.target.value })

    
    const handleLogin = async () => {
        if (email && password) {
            await loginUser({ email, password })
        } else {
            toast.error("Please fill all Input field")
        }
        console.log('login now')
    }
    
    const handleRegister = async () => {
        if (firstName && lastName && email && password ) {
            await registerUser({ firstName, lastName, email, password })
        } else {
            toast.error("Please fill all Input field")
        }
    }

    useEffect(() => {
       if (isLoginError) {
        toast.error((isLoginError as any).data.message)
       }
       if (isRegisterError) {
        toast.error((isRegisterError as any).data.message)
       }
    }, [isLoginError, isRegisterError])
     
    useEffect(() => {
        if (isLoginSuccess) {
            toast.success("User Login Successfully")
            // dispatch(setUser({ name: loginData?.result?.name, token: loginData?.token,}))
            navigate('/dashboard')
        }
        if (isRegisterSuccess) {
            toast.success("User Register Successfully")
            // dispatch(setUser({ name: registerData?.result.name, token: registerData?.token,}))
            navigate('/dashboard')
        }
    }, [isLoginSuccess, isRegisterSuccess])

    return (
        <section className='wh-100 gradient-custom'>
            <p>{isLoginError && JSON.stringify(isLoginError)}</p>
            <div className="container py-4 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-4 text-center">
                                <div className="mb-md-5 mgt-md-4 pb-5">
                                    <h2 className="fw-bold mb-2 text-uppercase">
                                        {!showRegister ? "Login" : "Register"}
                                    </h2>

                                    <p className="text-white-50 mb-4">
                                        {!showRegister ? "Please enter your email and password" : "Please enter User details"}
                                    </p>

                                    {showRegister && (
                                        <>
                                            <div className="form-outline form-white mb-4">
                                                <MDBInput
                                                    type="text"
                                                    name='firstName'
                                                    value={firstName}
                                                    onChange={handleChange}
                                                    label='First Name'
                                                    className='form-control form-control-lg'
                                                />
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <MDBInput
                                                    type="text"
                                                    name='lastName'
                                                    value={lastName}
                                                    onChange={handleChange}
                                                    label='Last Name'
                                                    className='form-control form-control-lg'
                                                />
                                            </div>
                                        </>
                                    )}
                                    <>
                                        <div className="form-outline form-white mb-4">
                                            <MDBInput
                                                type="text"
                                                name='email'
                                                value={email}
                                                onChange={handleChange}
                                                label='email'
                                                className='form-control form-control-lg'
                                            />
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <MDBInput
                                                type="text"
                                                name='password'
                                                value={password}
                                                onChange={handleChange}
                                                label='Password'
                                                className='form-control form-control-lg'
                                            />
                                        </div>
                                    </>
                                    {showRegister && (
                                        <>
                                            <div className="form-outline form-white mb-4">
                                                <MDBInput
                                                    type="text"
                                                    name='confirmPassword'
                                                    value={confirmPassword}
                                                    onChange={handleChange}
                                                    label='Confirm Password'
                                                    className='form-control form-control-lg'
                                                />
                                            </div>
                                        </>
                                    )}
                                    {!showRegister ? (
                                        <button className="btn btn-outline-light btn-lg px-5" type='button' onClick={() => handleLogin()}>Login</button>
                                    ) : (
                                        <button className="btn btn-outline-light btn-lg px-5" type='button' onClick={() => handleRegister()}>Register</button>
                                    )}
                                </div>

                                <div>
                                    <h5 className="mb-0">
                                        {!showRegister ? (
                                            <>Don't have and account ?
                                                <p className="text-white-50 fw-bold"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => setShowRegister(true)}
                                                >
                                                    Sig Up
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                Already have an account ?
                                                <p className="text-white-50 fw-bold"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => setShowRegister(false)}
                                                >
                                                    Sign In</p>
                                            </>
                                        )}
                                    </h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Auth