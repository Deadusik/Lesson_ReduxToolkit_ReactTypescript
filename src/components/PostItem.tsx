import { FC } from "react"
import { IPost } from "../models/IPost"
import { postAPI } from "../services/PostService"

interface IPostItemProps {
    post: IPost
}

export const PostItem: FC<IPostItemProps> = ({ post }) => {

    return (
        <div className="post">
            {post.id}. {post.title}
            <button>DELETE</button>
        </div>
    )
}