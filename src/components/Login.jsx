import Header from './Header'
import { auth } from '../utils/firebase';
import checkValidData from '../utils/validate'
import { useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(true)

  const toggleOnSignUp = () => {
    setIsSignInForm(!isSignInForm)
  }

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {

    /* validate form data */
    const message = isSignInForm ? checkValidData(email.current.value, password.current.value) : checkValidData(email.current.value, password.current.value, name.current.value,)
    setErrorMessage(message)
    if (message) return

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,  photoURL: "https://media.licdn.com/dms/image/v2/D5603AQEh6GmTKh4Y_g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725825523992?e=1734566400&v=beta&t=YMpqC2EftWX0i9G477AfrThbblkcsuIu424xUB-blQc",
          }).then(() => {
            console.log(`Signed Up User Successfully!....${JSON.stringify(user)}`)
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }))
            navigate("/browser")
          }).catch((error) => {
            setErrorMessage(error.message)
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`Error while Signed Up !....errorCode:${errorCode} errorMessage:${errorMessage}`)
          setErrorMessage(error.message)
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browser")
          console.log(`Signed in user successfully ${JSON.stringify(user)}`)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`Error while Signed In !....errorCode:${errorCode} errorMessage:${errorMessage}`)
          setErrorMessage("Email or Password is incorrect")
        });
    }
  }

  return (
    <div>
      <Header />
      <div className='absolute w-full '>
        <img className='w-full' src='https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp' alt='netflix-gpt' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-4/12 absolute p-12 bg-black mx-auto my-28 right-0 left-0 bg-opacity-80'>
        <h1 className='right-0 left-0 font-bold text-3xl py-4 text-white text-center' >{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='Name' className='right-0 left-0 p-3 m-4 w-11/12' />}
        <input ref={email} type='text' placeholder='Email Address' className='right-0 left-0 p-3 m-4 w-11/12' />
        <input ref={password} type='password' placeholder='Password' className='right-0 left-0 p-3 m-4 w-11/12' />
        <p className='text-red-600 font-bold text-base ml-3'>{errorMessage}</p>
        <button className='right-0 left-0 text-base text-center bg-red-700  text-white p-3 m-4  w-11/12 rounded-sm' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='text-white mt-4 ml-4 cursor-pointer' onClick={toggleOnSignUp} >{isSignInForm ? "New to Netflix? Sign Up Now" : "If You're Already Registered! Please Sign In"}</p>
      </form>
    </div>
  )
}

export default Login