import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true); //loading message to show only if true
    const [error, setError] = useState(null);//Error message


    //fetch data with useEffect
    useEffect(() => {
        setTimeout(() => { //using setTimeout just to simulate isLoading message 

            fetch('http://localhost:8000/blogs') // where to fetch data from 

                .then(res => {
                    console.log(res);
                    if (!res.ok) {               //Handle Error messages
                        throw Error('Error could not fetch data for that resource');
                    };
                    return res.json();           //use json to parse data in as an object to use
                })
                .then((data) => {                //take that data and set the state
                    console.log(data);
                    setBlogs(data);
                    setIsLoading(false);
                    setError(null);              //setError back to null if there are no errors 
                })
                .catch((err) => {
                    // console.log(err.message);
                    setError(err.message);
                    setIsLoading(false);        //show no loading message if there are errors 
                });

        }, 1000);

    }, []);


    return (
        <div className="home">
            {error && <div>{error}</div>}{/* show Error message */}
            {isLoading && <div>Loading please wait...</div>} {/* when true show isLoading message */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />} {/* && operator only outputs rightside if the left side is true, because blogs is null at first(false) it does nothing, once blogs has fetched its data blogs becomes true then it runs or returns the right side of operand  */}

            {/* reusing component with different data */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi')} title="Yoshi's Blogs!" /> */}
        </div>
    )

}

export default Home;
