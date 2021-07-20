import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
// import useFetch from "./useFetch";

const EditBlog = () => {

    const { id } = useParams(); //saying we want the id to get its value from the urlparam?

    //first initial render 
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [data, setData] = useState(null);

    const history = useHistory();

    //after the first render
    useEffect(async () => {
        const respon = await fetch('http://localhost:8000/blogs/' + id); //fetch our data from json local server using id ()- const { id } = useParams();
        const data = await respon.json(); //data comes from here 
        const blog = data; //linking blog to data - (instead of using data.title, data.body)

        setData(blog);      //setting state
        setTitle(blog.title);
        setBody(blog.body);
        setAuthor(blog.author);
    }, [])

    const handleBackClick = () => {

        history.push(`/blogs/${id}`);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const updatedBlog = { title, body, author };

        fetch('http://localhost:8000/blogs/' + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }, //telling the server the type of content being sent with this request (json data being sent)
            body: JSON.stringify(updatedBlog)

        }).then(() => {
            console.log(updatedBlog);
            history.push(`/blogs/${id}`);
        })
    }

    return (

        <div>
            {data && ( //first render, this is false. After second render from useEffect this becomes true
                <div>
                    <h1>Edit Blog{id}</h1>
                    <form onSubmit={handleClick}>

                        <label>Blog title:</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label>Body</label>
                        <textarea type="text"
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />

                        <select
                            value={author} //Dynamic value coming from state
                            onChange={(e) => setAuthor(e.target.value)} //we are using the selected value from <option value=> to set the value for setAuthor
                        >
                            <option value="Mario">Mario</option>
                            <option value="Yoshi">Yoshi</option>
                        </select>

                        <button>Save</button>
                        <button onClick={handleBackClick}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default EditBlog;