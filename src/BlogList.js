
// const BlogList = (props) => {
//     const blogs = props.blogs
//     const title = props.title

const BlogList = ({ blogs, title, handleDelete }) => {
    {/* Destructuring props */ }


    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;