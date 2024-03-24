import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import appServiceObj from '../../appwrite/appWconf.service'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostForm = ({ post }) => {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        }
    })


    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData)

    const submit = async (data) => {
        const file = data.image[0] ? await appServiceObj.uploadFile(data.image[0]) : null
        // console.log("PostForm::submit:data: ", data)

        if (post) { //if there is post then it means the postform is used for editing a post
            // console.log("PostForm::submit: if(EDIT EXISTING POST): ")
            if (file) {
                await appServiceObj.deleteFile(post.featuredImage);
            }

            const dbPost = await appServiceObj.updatePost(post.$id, { ...data, featuredImage: file?.$id || post.featuredImage });
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            // console.log("PostForm::submit: if(ADD NEW POST): ")
            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                // console.log("PostForm::submit::if(ADD NEW POST):data: ", data)
                const dbPost = await appServiceObj.createPost({ ...data, userId: userData.$id });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }


    }

    const slugTransform = useCallback(
        (value) => {
            if (value && typeof value === "string") {
                return value
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-zA-Z\d\s]+/g, "-")
                    .replace(/\s/g, "-");
            }

            return '';
        }, [])


    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        })



        return () => subscription.unsubscribe()
    }, [watch, slugTransform, setValue])


    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appServiceObj.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button
                    onClick={handleSubmit(submit)}
                    bgColor={post ? "bg-green-500" : undefined} className="w-full" >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm