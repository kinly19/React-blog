import { useState } from 'react';

const Create = () => {

    //states for tracking and setting inputted & selected values to be used inside form
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');


    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>

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

                <button>Add Blog</button>

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>
        </div>
    );
};

export default Create;