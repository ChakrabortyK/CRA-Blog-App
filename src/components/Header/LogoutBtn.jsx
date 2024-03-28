import React from 'react'
import { useDispatch } from 'react-redux'
import authServiceObj from '../../appwrite/auth.service'
import { logout } from '../../redux/authSlice'
import { useNavigate } from 'react-router-dom'

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authServiceObj.logout().then(() => {
            dispatch(logout());
            navigate('/login');
        })

    }
    return (
        <button className='inline-bock m-2 duration-200 hover:bg-gray-500 rounded-full' onClick={logoutHandler}>Logout
            <span className='m-1' aria-hidden="true">&rarr;</span>
        </button>
    )
}

export default LogoutBtn