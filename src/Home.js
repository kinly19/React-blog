import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {


    //moved data below into local json server
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs'); //const {data:blogs} grabbing the data from useFetch but calling it blogs on here

    return (
        <div className="home">
            {error && <div>{error}</div>}{/* show Error message */}
            {isLoading && <div>Loading please wait...</div>} {/* when true show isLoading message */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />} {/* blogs is data from useFetch */}{/* && operator only outputs rightside if the left side is true, because blogs is null at first(false) it does nothing, once blogs has fetched its data blogs becomes true then it runs or returns the right side of operand  */}

            {/* reusing component with different data */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi')} title="Yoshi's Blogs!" /> */}
        </div>
    )

}

export default Home;
