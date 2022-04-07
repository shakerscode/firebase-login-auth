import React, { useState } from 'react';
import './Fourm.css'
 import app from '../../firebase.init';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



const auth = getAuth(app)

const Fourm = () => {
    const [user, setUser] = useState('')
    const [condition, setCondition] = useState(false)

    const provider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user)
            console.log(user)
        }).catch((error) => {
            console.log(error)
        })
        setCondition(true)

    }
    
    const signOutFromGoogle = () =>{
        signOut(auth)
        .then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
          setCondition(false)
    }
    
    return (
        <div className='form-container'>
            <h1>Simple LogIn SignIn Section</h1>
            <div className='form-element'>
                <p>Email<span>*</span></p>
                <input type="text" placeholder='Enter your email'/>
                <p>Password<span>*</span></p>
                <input type="password" name="" id="" placeholder='Enter your password' />
                <div>
                    <button className='btn btn-one'>LogIn</button>
                    <button className='btn btn-two'>SignIn</button>
                </div>
                <p id='extra-p'>or</p>
                <div onClick={googleSignIn} className='others-auth'>
                    <div className='img-sec'><img src="https://techburner.in/wp-content/uploads/2021/03/google-threadit-featured-1-1.jpg" alt="" width={'70px'} /></div>
                    <div className='text-sec'><p>LogIn with google</p></div>
                </div>
            </div>
           {
               condition ?  <div className='users-info'>
               <h1>User Info</h1>
               <h3>{user.displayName}</h3>
               <p>Email: {user.email}</p>
               <img src={user.photoURL} alt="" />
               <div>
                   <button onClick={signOutFromGoogle} className='btn btn-one'>Sign Out</button>
               </div>
           </div> : ''
           }
        </div>
    );
};

export default Fourm;