import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { useEffect } from "react"
import { fetchUsers } from "./store/reducers/ActionCreators"
import { PostContainer } from "./components/PostContainer"


export const App = () => {
    const dispatch = useAppDispatch()
    const { users, isLoading, error } = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <PostContainer />
            {
                isLoading ?
                    <h1>Loading...</h1>
                    :
                    <p>{JSON.stringify(users, null, 1)}</p>
            }
            {
                error && <h1>{error}</h1>
            }
        </div>
    )
}