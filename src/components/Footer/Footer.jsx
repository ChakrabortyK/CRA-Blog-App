import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../Logo'

function Footer() {
    return (
        <footer className="bg-white shadow dark:bg-gray-800 w-full hidden sm:block">
            <div className="mx-auto max-w-screen-xl p-4 flex items-center justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">ReactApp</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/" className="hover:underline me-4 md:me-6">About</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline me-4 md:me-6">Licensing</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer