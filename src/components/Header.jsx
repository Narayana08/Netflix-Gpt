import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {

  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handleOnSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='absolute w-screen px-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <div>
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='header' />
      </div>
      {user && <div className='flex p-6 md-6 justify-between space-x-6 items-center'>
        <div>
          <img src={user.photoURL} alt="Profile" class="w-16 h-16 rounded-full border-4 mb-7 border-red-600 shadow-lg" />
        </div>
        <div>
          <button onClick={handleOnSignOut} class="bg-red-600 text-center text-white font-semibold py-2 px-4 rounded-md mb-10 hover:bg-red-700 transition duration-300 ease-in-out">
            Sign Out
          </button>
        </div>
      </div>
      }
    </div>
  )
}

export default Header