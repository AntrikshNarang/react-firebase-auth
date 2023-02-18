import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { InputForm } from './InputForm'
import './styles.css'

export const Signup = () => {
    const navigate = useNavigate();
    const [params, setparams] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errormsg, seterrormsg] = useState('')
    const [submitButtonPressed, setsubmitButtonPressed] = useState(false)

    const handleSubmit = async () =>{
        if(!params.name || !params.email || !params.password){
            seterrormsg('Fill All the Fields Correctly');
            return;
        }
        setsubmitButtonPressed(true)
        seterrormsg('');
        try{
            const res = await createUserWithEmailAndPassword(auth,params.email,params.password);
            const User=res.user;
            setsubmitButtonPressed(false)
            await updateProfile(User,{displayName:params.name})
            console.log(User)
            navigate('/');
        }catch(err){
            setsubmitButtonPressed(false)
            seterrormsg(err.message);
        }
    }
    return (
        <div className="main-div">
            <div className="center-div">
                <h1>Sign Up</h1>
                <InputForm label='Name' placeholder='Enter your name' type='text'
                    onChange={(e) => { setparams((prev) => ({ ...prev, name: e.target.value })) }} />
                {/* 
                Short for Object Destructuring Syntax->
                setparams((prev) => ({ ...prev, name: e.target.value }))
                Real Syntax->
                setparams(prev => {
                        return {
                            name: 'New Name',
                            email: prev.email,
                            password: prev.password
                        };
                });
                 */}
                <InputForm label='Email' placeholder='Enter your email' type='text'
                    onChange={(e) => { setparams((prev) => ({ ...prev, email: e.target.value })) }} />
                <InputForm label='Password' placeholder='Enter your Password' type='password'
                    onChange={(e) => { setparams((prev) => ({ ...prev, password: e.target.value })) }} />
                    {errormsg && <p className="errormsg">{errormsg}</p>}
                <button disabled={submitButtonPressed} onClick={handleSubmit}>Sign Up</button>
                <p>Already Have an Acccount? <span><Link className='footer-link' to='/login'>Login</Link></span></p>
            </div>
        </div>
    )
}
