import React from 'react'
import { LogoutBtn, Container, Logo } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {

    const authStatus = useSelector(state => state.auth.status)

    const navigate = useNavigate();

    const navItems = [
        { name: "Home", path: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "My Posts", slug: "/my-posts", active: authStatus },
        { name: "Add Post", slug: "/add-post", active: authStatus },
    ]



    return (
        <header className='py-3 '>

            <Container>
                <nav className='flex'>
                    <div className="logo">
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>


                    <ul className="flex ml-auto">
                        {navItems.map((item, index) =>

                        (item.active ?
                            (
                                <li key={index}>
                                    <button
                                        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
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


                </nav>
            </Container>
        </header>

    )
}

export default Header