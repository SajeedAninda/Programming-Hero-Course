import { useEffect, useState } from "react"
import PostDetails from "./PostDetails";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))

    }, [])
    return (
        <div>
            <h2>Total Posts: {posts.length}</h2>
            {
                posts.map(post=><PostDetails posts={post}></PostDetails>)
            }
        </div>
    )
}