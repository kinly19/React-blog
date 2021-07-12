import { useParams } from "react-router-dom"
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id); // (url End point for useFetch to gather its data)

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>} {/* && conditionally output template dependent on these values*/}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>

    )
}

export default BlogDetails