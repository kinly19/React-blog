
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
                <a href="/">Home</a>
                <a href="/">New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar;

