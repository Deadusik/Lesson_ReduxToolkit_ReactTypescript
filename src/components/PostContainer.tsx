import { postAPI } from "../services/PostService"
import { PostItem } from "./PostItem"

export const PostContainer = () => {
    const { data: posts, isLoading, error } = postAPI.useFetchAllUsersQuery(5)
    return (
        <div>
            <div>
                {
                    isLoading ?
                        <h1>Loading</h1>
                        :
                        posts?.map(post =>
                            <PostItem key={post.id} post={post} />)
                }
                {
                    error && <h1>Loding data error</h1>
                }
            </div>
        </div>
    )
}