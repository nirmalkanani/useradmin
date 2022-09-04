import React from 'react'
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { LOGIN } from '../Redux/Actions/Action';
import { useNavigate } from 'react-router-dom'
import { CheckData } from '../Auth/Auth';
import { v4 as uuidv4 } from 'uuid';
const Signin = () => {

    const [login, setLogin] = useState({
        id: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const { email, password, id } = login

    const dispatch = useDispatch()



    const handleChange = (e) => {
        setLogin({ ...login, id: uuidv4(), [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (login.email && login.password) {
            if (login.email === "collection.sara@yahoo.com" && login.password === "sara@123") {
                navigate('/admin')
            } else {

                const checkUser = await CheckData(login.email)
                if (checkUser.check == false) {
                    navigate(`/user`)
                    dispatch(LOGIN(login))
                }
                else if (checkUser.check === true) {
                    navigate('/user')
                } else {
                    dispatch(LOGIN(login))
                    navigate('/user')
                }
            }
        }
    }

    return (
        <div className='container-fluid'>
            <div className="row align-items-center">
                <div className="col-7">
                    <div className="login-left">
                        <img src="/assets/images/login.png" alt="" style={{ height: "721px" }} />
                    </div>
                </div>
                <div className="col-5 px-md-5">
                    <div className="row px-md-5">
                        <div className="sara-logo text-center mb-5">
                            <img src="/assets/images/web_black.png" alt="" className='img-fluid' />
                        </div>
                        <form action="#" onSubmit={handleSubmit}>
                            <div className="col-12">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" name='email' value={email} placeholder="name@example.com" onChange={(e) => handleChange(e)} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" name='password' value={password} placeholder="Password" onChange={(e) => handleChange(e)} />
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
            </div>
        </div>
    )
}

export default Signin
