import './Post.css'
export default function PostDetails({ posts }) {
    let { id, title, body } = posts;
    return (
        <div className='postStyle'>
            <h3>User ID: {id}</h3>
            <h3>Title: {title}</h3>
            <h3>Body: {body}</h3>
        </div>
    )
}