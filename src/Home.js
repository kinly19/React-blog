import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    const [blogs, setBlogs] = useState(null);


    //fetch data with useEffect
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setBlogs(data)
            });
    }, []);




    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />} {/* only outputs rightside if the left side is true, because blogs is null at first(false) it does nothing, once blogs has fetched its data blogs becomes true then it runs the right side of operand  */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'yoshi')} title="Yoshi's Blogs!" /> */}
        </div>
    )

}

export default Home;
