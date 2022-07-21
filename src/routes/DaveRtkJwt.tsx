import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Public from '../components/Public'
import Login from '../features/authSlice/Login'
import RequireAuth from '../features/authSlice/RequireAuth'
import UsersList from '../features/authSlice/user/UserList'
import Welcome from '../features/authSlice/Wellcome'

const DaveRtkJwt = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* public routes */}
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="welcome" element={<Welcome />} />
            {/* <Route path="userslist" element={<UsersList />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default DaveRtkJwt