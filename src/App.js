import React, { Suspense } from 'react'
// const SignIn = React.lazy(() => import('./Login/index'))
import {Routes, Route} from 'react-router-dom'
const Admin = React.lazy(() => import('./AdminPanel'));
const UserView = React.lazy(() => import('./UserView'));
const SignIn = React.lazy(() => import('./Login/index'));
const ResetPassword = React.lazy(() => import('./Resetpassword/index'));

const App = () => {
  return (
    <Suspense fallback={<div>
      Loading....
    </div>}>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user' element={<UserView/>}/>
      </Routes>
    </Suspense>
  )
}

export default App
