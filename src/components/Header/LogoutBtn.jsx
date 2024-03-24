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
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout </button>
    )
}

export default LogoutBtn