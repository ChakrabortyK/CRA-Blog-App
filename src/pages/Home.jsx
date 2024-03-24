import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import appServiceObj from '../appwrite/appWconf.service'
import authServiceObj from '../appwrite/auth.service'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/authSlice'
import { Query } from 'appwrite'



function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        authServiceObj
            .getUserData()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                    appServiceObj.getAllPosts([Query.equal("status", "active")]).then((posts) => {
                        if (posts) {
                            setPosts(posts.documents)
                        }
                    })
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => {
                setLoading(false);
                // console.log("home::posts: ", posts)
            });
    }, [dispatch]);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                {loading ? (<h1 className="text-2xl font-bold hover:text-gray-500">Loading...</h1>) :
                    (<Container>
                        <div className="flex flex-wrap">
                            <div className="p-2 w-full">
                                <h1 className="text-2xl font-bold hover:text-gray-500">
                                    Zero posts
                                </h1>
                            </div>
                        </div>
                    </Container>)}
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home