import { Link } from "react-router-dom";
// function Navbar() {
//     return (
//         <div><h1>hello world</h1></div>
//     )
// }

// const Navbar = () => {
//     return (
//         <div><h1>hello world</h1></div>
//     )
// }

// With and without arrow function 

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create"> New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;

