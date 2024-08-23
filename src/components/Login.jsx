import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute w-full '>
        <img className='w-full' src='https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-970-80.jpg.webp' alt='netflix-gpt' />
      </div>
      <form className='w-4/12 absolute p-12 bg-black mx-auto my-28 right-0 left-0 bg-opacity-80'>
        <h1 className='right-0 left-0 font-bold text-3xl py-4 text-white text-center'>Sign In</h1>
        <input type='text' placeholder='Email Address' className='right-0 left-0 p-3 m-4 w-11/12' />
        <input type='password' placeholder='Password' className='right-0 left-0 p-3 m-4 w-11/12' />
        <button className='right-0 left-0 text-base text-center bg-red-700  text-white p-3 m-4  w-11/12'>Sign In</button>
        <h1 className='text-white mt-4 ml-4'>New to Netflix? Sign Up Now</h1>
      </form>
    </div>
  )
}

export default Login

