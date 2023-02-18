import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import './styles.css'

export const Home = (props) => {
    const handleSubmit = async () => {
        try {
            await auth.signOut();
            console.log('Signed Out');
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <h1>Home</h1>
                    <Link className='btn' to='/login'>Login</Link><br></br>
                    <Link className='btn' to='/signup'>Sign up</Link>
                    <p>{props.UserName ? "Hi " + props.UserName : "Login Please"}</p>
                    {props.UserName && <p>Not You? <span className='link' onClick={handleSubmit}>Sign Out</span></p>}
                </div>
            </div>
        </>
    )
}
