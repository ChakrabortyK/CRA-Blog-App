import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import appServiceObj from '../appwrite/appWconf.service'
import { Query } from 'appwrite'
import { useSelector } from 'react-redux'


const MyPosts = () => {

    const userData = useSelector((state) => state.auth.userData);



    const [posts, setPosts] = useState([])
    useEffect(() => {
        appServiceObj.getAllPosts([Query.equal("userId", userData.$id)]).then((posts) => {
            if (posts)
                setPosts(posts.documents)
        })
    })

    // console.log("Posts: ", posts)


    return (
        <div className='w-full py-8 text-center'>
            <Container>
                {posts.length === 0 ? (<h1 className="text-2xl font-bold hover:text-gray-500">No Posts Yet</h1>) :
                    (
                        <div className='flex flex-wrap'>
                            {posts.map((post) => (
                                <div key={post.$id} className='p-2 w-1/4'>
                                    <PostCard {...post} />

                                </div>))}
                        </div>)}
            </Container>
        </div>
    )
}

export default MyPosts