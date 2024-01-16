import { FC } from "react"
import { IPost } from "../models/IPost"

interface IPostItemProps {
    post: IPost,
    remove: (post: IPost) => void
    update: (post: IPost) => void
}

export const PostItem: FC<IPostItemProps> = ({ post, remove, update }) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ''
        update({ ...post, title })
    }

    return (
        <div className="post" onClick={handleUpdate}>
            {post.id}. {post.title}
            <button onClick={handleRemove}>DELETE</button>
        </div>
    )
}