import React from "react";
import { Link } from "react-router-dom";
import omnv from '../assets/logo-omnv.png';

function Navbar (props) {
  
  return (
    <>
      <h1 className="bg-black text-6xl font-normal leading-normal mt-0 mb-2 text-red-900">
        OMNV- join the movement
      </h1>
        <header className="dark:bg-gray-800 dark:text-white text-black md:sticky top-0 z-10">
             <ul>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <img className="image2" src={omnv} alt="OMNV logo" width="300" height="600"/>
                    <div className="title-font font-medium text-white mb-4 md:mb-0">
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/">Home</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Login">Login</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Signup">Signup</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Products">Products</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Cart">Cart</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/OrderHistory">Order History</Link>
                        </li>
                    </div>
                </div>
            </ul>
        </header>
     </>
    )}


export default Navbar;
