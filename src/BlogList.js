
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
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;