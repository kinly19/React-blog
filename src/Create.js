import { useState } from 'react';

const Create = () => {

    //states for tracking and setting inputted & selected values to be used inside form
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');

    //handle loading message
    const [isPending, setIsPending] = useState(false);

    //handling onClick event for submit button (POST request)
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page from refreshing
        const blog = { title, body, author }; //create a new blog object for when we submit (POST) a new blog into our local blogs database

        setIsPending(true); //hide the loading message for the button

        fetch('http://localhost:8000/blogs', { //make a fetch request using fetch api, our endpoint is our local json database then we add a second argument to add in data and define the sort of request we are sending
            method: 'POST',                    // type of request we are sending (POST request)
            headers: { "Content-Type": "application/json" }, //telling the server the type of content being sent with this request (json data being sent)
            body: JSON.stringify(blog)
            //body is the actual data being sent with this request
            //the data we are trying to send over is an object (blog) this has to be changed from an object into a json string, 
            //we do this using - JSON.stringify(blog) passing in blog as the object we want to change into a string using stringify()
        }).then(() => {
            console.log('New Blog Added');
            setIsPending(false);
        })

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                // onchange event occurs when the value of an element has been changed - we use the event(e) to trigger onChange, 
                //we take the value from e.target.value (the users input or selected input from form) to set the state for setTitle()
                //we use onChange to allow users to update the value of the state to whatever they are trying to change it to.
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)} // we get the user input from the form with e.target.value, onChange will set the state when the value has changed (e)
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author} //Dynamic value coming from state
                    onChange={(e) => setAuthor(e.target.value)} //we are using the selected value from <option value=> to set the value for setAuthor
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>

                {/* Depending on whether the state for isPending is true or false, we want to show a different button */}
                {!isPending && <button>Add Blog</button>} {/* && if left side of operands is falsy ignore rightside of operands  */}
                {isPending && <button disabled>Adding New Blog...</button>}

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>

        </div>
    );
};

export default Create;