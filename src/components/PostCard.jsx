import React from 'react'
import appServiceObj from '../appwrite/appWconf.service'
import { Link } from 'react-router-dom'


const PostCard = ({ $id, title, featuredImage }) => {
    return (
        <Link to={`/post/${$id}`}>
            <div className='min-w-[60vw] lg:min-w-min bg-gray-100 rounded-md'>
                <div className='w-full justify-center mb-4'>
                    <img src={appServiceObj.getFilePreview(featuredImage)} alt={title} className='rounded-t' />
                </div>
                <h2 className='text-xl font-bold p-3'
                >{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard