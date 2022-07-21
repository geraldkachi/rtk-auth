import { MDBModal, MDBModalContent, MDBModalDialog } from 'mdb-react-ui-kit'
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((curr) => curr - 1)
        }, 1000)

        count === 0 && navigate('/auth')
        return () => clearInterval(interval)
    },[count, navigate])
  return (
    <div className="h-100 gradient-custom">
        <MDBModal show={true}>
            <MDBModalDialog>
               <MDBModalContent>
                <p className="mt-3">Redirecting in {count} 5</p>
               </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    </div>
  )
}

export default LoadingToRedirect