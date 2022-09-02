import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { checkEmail } from '../Auth/Auth';

const ResetPassword = () => {
  
  const [ resetData, setResetData] = useState({
    email:"",
    password:"",
    confirmPassword:""
  })

  const { email, password, confirmPassword } = useState()

  const [ show, setShow ] = useState()

  const handleEmail = (e) => {
    setResetData({...resetData, [e.target.name]:e.target.value})
  }

  const handlePassword = (e) => {
    setResetData({...resetData, [e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(resetData.email){
      const res = await checkEmail(resetData.email)
      if(res && res.data){
        setShow(true)
      } else {
        setShow(false)
      }
      console.log(res)
    } 
  }

  const handleData = (e) => {
    e.preventDefault()
    console.log(resetData)
  }

  return (
    <div className='container'>
            <div className="row text-center my-3">
                <div className="col-12">
                    <h4>Reset Your Password</h4>
                </div>
            </div>
            <div className="row align-items-center">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <FloatingLabel
                            controlId="1"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" name='email' value={email} placeholder="name@example.com" onChange={(e) => handleEmail(e)}/>
                        </FloatingLabel>
                    </div>
                    {
                      !show ?<div className="row">
                      <div className="col-12 text-center">
                          <input type="submit" className="btn btn-primary py-2 px-3" />
                      </div>
                  </div>: ""
                    } 
                </form>
                {
                  show ? <form action="#" onSubmit={handleData}>
                  <div className="col-12">
                      <FloatingLabel
                          controlId="2"
                          label="New Password"
                          className="mb-3"
                      >
                          <Form.Control type="password" name='password' placeholder="Enter New Password" value={password} onChange={(e) => handlePassword(e)}/>
                      </FloatingLabel>
                      <FloatingLabel
                          controlId="3"
                          label="Confirm Password"
                          className="mb-3"
                      >
                          <Form.Control type="password" name='confirmPassword' placeholder="Enter Confirm Password" value={confirmPassword} onChange={(e) => handlePassword(e)}/>
                      </FloatingLabel>
                  </div>
                  <div className="row">
                      <div className="col-12 text-center">
                          <input type="submit" className="btn btn-primary py-2 px-3" />
                      </div>
                  </div>
              </form> : null
                }
            </div>
        </div>
  )
}

export default ResetPassword