import { Link } from 'react-router-dom';
// const BlogList = (props) => {
//     const blogs = props.blogs
//     const title = props.title

const BlogList = ({ blogs, title }) => {
    {/* Destructuring props */ }


    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}> {/* we create a link that uses the blogs.id */}
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;