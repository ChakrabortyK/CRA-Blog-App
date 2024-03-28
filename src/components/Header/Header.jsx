import React from 'react'
import { LogoutBtn, Container, Logo } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'


const Header = () => {

    const authStatus = useSelector(state => state.auth.status)
    const [menu, setMenu] = useState(false)

    const navigate = useNavigate();

    const navItems = [
        { name: "Home", path: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "My Posts", slug: "/my-posts", active: authStatus },
        { name: "Add Post", slug: "/add-post", active: authStatus },
    ]

    const openMenu = () => {
        setMenu(!menu)
    }



    return (
        <header className='py-3 z-10 sticky top-0 backdrop-blur-lg backdrop-brightness-50 text-white '>
            <Container>
                <nav className='mx-auto flex w-full items-center  justify-between p-2 '>
                    <div className="logo flex lg:flex-1 basis-1/4">
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className="hidden lg:flex lg:gap-x-4 lg:flex-1 justify-center basis-1/2 ">
                        {navItems.map((item, index) =>

                        (item.active ?
                            (
                                <li key={index}>
                                    <button
                                        className="inline-bock px-6 py-2 text-nowrap duration-200 hover:bg-gray-500 rounded-full"
                                        onClick={() => navigate(item.slug)}
                                    >{item.name}</button>
                                </li>
                            )
                            :
                            (null))

                        )}
                    </ul>
                    <ul className="hidden lg:flex lg:flex-1 lg:justify-end basis-1/4 items-center self-center">
                        <Link to='/my-posts' className='hover:bg-gray-500 rounded-full'><i className="fas  fa-user self-center m-2"></i></Link>
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                    <div class="lg:hidden" role="dialog" onClick={openMenu} aria-modal="true">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </nav>

                {menu && (
                    <ul>
                        {navItems.map((item, index) =>
                        (item.active ?
                            (
                                <li key={index}>
                                    <button
                                        className="inline-block px-6 py-2 text-nowrap duration-200 hover:bg-gray-500 rounded-full"
                                        onClick={() => navigate(item.slug)}
                                    >{item.name}</button>
                                </li>
                            )
                            :
                            (null))
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>

                )}
            </Container>
        </header>

    )
}

export default Header