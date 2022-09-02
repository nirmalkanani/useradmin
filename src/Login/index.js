import React from 'react'
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { LOGIN } from '../Redux/Actions/Action';
import { useNavigate } from 'react-router-dom'
const Signin = () => {

    const [ login, setLogin ] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate()

    const { email, password } = login

    const dispatch = useDispatch()

    

    const handleChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value})
        console.log(login)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(login.email === "collection.sara@yahoo.com" && login.password ==="sara@123") {
            navigate('/admin')
        } else {
            navigate('user')
            dispatch(LOGIN(login))
        }
    }

    return (
        <div className='container'>
            <div className="row text-center my-3">
                <div className="col-12">
                    <h4>Login or Sign Up</h4>
                </div>
            </div>
            <div className="row align-items-center">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" name='email' value={email} placeholder="name@example.com" onChange={(e) => handleChange(e)}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" name='password' value={password} placeholder="Password" onChange={(e) => handleChange(e)}/>
                        </FloatingLabel>
                    </div>
                    <div className="row">
                        <div className="col-12 text-end">
                            <Link to={'/resetpassword'}>Forgot Password ?</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <input type="submit" className="btn btn-primary py-2 px-3" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin
