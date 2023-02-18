import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { InputForm } from './InputForm'
import './styles.css'

export const Login = () => {
    const navigate = useNavigate();
    const [params, setparams] = useState({
        email: '',
        password: ''
    })
    const [errormsg, seterrormsg] = useState('')
    const [submitButtonPressed, setsubmitButtonPressed] = useState(false)

    const handleSubmit = async () => {
        if (!params.email || !params.password) {
            seterrormsg('Fill All the Fields Correctly');
            return;
        }
        setsubmitButtonPressed(true)
        seterrormsg('');
        try {
            await signInWithEmailAndPassword(auth,params.email,params.password)
            setsubmitButtonPressed(false)
            navigate('/');
        } catch (err) {
            setsubmitButtonPressed(false)
            seterrormsg(err.message);
        }
    }
    return (
        <div className="main-div" >
            <div className="center-div">
                <h1>Login</h1>
                <InputForm label='Email' placeholder='Enter your email' type='text'
                    onChange={(e) => { setparams((prev) => ({ ...prev, email: e.target.value })) }} />
                <InputForm label='Password' placeholder='Enter your Password' type='password'
                    onChange={(e) => { setparams((prev) => ({ ...prev, password: e.target.value })) }} />
                {errormsg && <p className="errormsg">{errormsg}</p>}
                <button disabled={submitButtonPressed} onClick={handleSubmit}>Login</button>
                <p>New User? <span><Link className='footer-link' to='/signup'>Sign Up</Link></span></p>
            </div>
        </div >
    )
}
