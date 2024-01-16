import { IPost } from "../models/IPost"
import { postAPI } from "../services/PostService"
import { PostItem } from "./PostItem"

export const PostContainer = () => {
    const { data: posts, isLoading, error } = postAPI.useFetchAllUsersQuery(100)

    const [createPost, { error: createError, isLoading: isCreateLoading }] = postAPI.useCreatePostMutation()
    const [removePost, { error: removeError, isLoading: isRemoveLoading }] = postAPI.useDeletePostMutation()
    const [updatePost, { error: updateError, isLoading: isUpdateLoading }] = postAPI.useUpdatePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)
    }

    const handleRemove = (post: IPost) => {
        removePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <button onClick={handleCreate}>Add new post</button>
            <div>
                {
                    isLoading ?
                        <h1>Loading</h1>
                        :
                        posts?.map(post =>
                            <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate} />)
                }
                {
                    error && <h1>Loding data error</h1>
                }
            </div>
        </div>
    )
}