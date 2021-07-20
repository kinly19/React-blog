import { Link, useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id); // (url End point for useFetch to gather its data)
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, { //gathering data on blogs with the id of the blog we want to delete
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    const handleEdit = () => {
        history.push(id + '/edit');
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>} {/* && conditionally output template dependent on these values*/}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                    <button onClick={handleEdit}>Edit</button>
                </article>
            )}

        </div>
    )
}

export default BlogDetails