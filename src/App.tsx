import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from './app/hooks';
import { setUser } from './features/authSlice/authSlice';
import PrivateRoute from './components/PrivateRoute';
import AppRoute from './routes/AppRoute';

const App = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}")
  const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUser(user))
    },[])

  return (
    <main>
      <ToastContainer />
      <Routes>
        <Route path='/*' element={<AppRoute />} />  
        {/* <Route path='/' element={<Navigate to="/auth" replace />} />  
        <Route path='/dashboard' element={<Dashboard />} />  
        <Route path='/auth' element={<Auth />} />   */}
      </Routes>
    </main>
  )
}
// https://testtourapp.heroku.come/users/signin
export default App;


// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <Counter />
//       <p>
//         Edit <code>src/App.tsx</code> and save to reload.
//       </p>
//       <span>
//         <span>Learn </span>
//         <a
//           className="App-link"
//           href="https://reactjs.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React
//         </a>
//         <span>, </span>
//         <a
//           className="App-link"
//           href="https://redux.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Redux
//         </a>
//         <span>, </span>
//         <a
//           className="App-link"
//           href="https://redux-toolkit.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Redux Toolkit
//         </a>
//         ,<span> and </span>
//         <a
//           className="App-link"
//           href="https://react-redux.js.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           React Redux
//         </a>
//       </span>
//     </header>
//   </div>
// );