import React from "react";
import { Link } from "react-router-dom";

function Navbar (props) {
//   const toggleTheme = () => { 
//     document.body.className !== "dark"
//     ? document.body.className = "dark" 
//     : document.body.className = ""

// }
    return (

        <header className="dark:bg-gray-800 dark:text-white text-black md:sticky top-0 z-10">
             <ul>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="title-font font-medium text-white mb-4 md:mb-0">
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Home">Home</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Login">Login</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Signup">Signup</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Featured">Featured</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Products">Products</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Item">Item</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Cart">Cart</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/OrderHistory">Order History</Link>
                        </li>
                     

























                        <button class="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0" onClick={toggleTheme}>Toggle Theme</button>
                    </div>
                </div>
            </ul>
        </header>
     
    )
}

export default Navbar