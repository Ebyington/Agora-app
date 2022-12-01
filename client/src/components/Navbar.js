import React from "react";
import { Link } from "react-router-dom";
import omnv from '../assets/logo-omnv.png';
import Auth from '../utils/auth';

function Navbar () {
  function displayNav() {
    if (Auth.loggedIn()) {
        return (
            <ul className="flex-row">
            <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
              <Link to="/orderHistory">Order History</Link>
            </li>
            <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        );
    } else {
        return (
            <ul className="flex-row">
          <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
            <Link to="/Signup">Signup</Link>
          </li>
          <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
            <Link to="/Login">Login</Link>
          </li>
        </ul>
        );
    }
  }

  return (
    <>
     
        <header className="dark:text-white text-white md:sticky top-0 z-10" >
             <ul>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <img className="image2" src={omnv} alt="OMNV logo" width="300" height="600"/>
                    <div className="title-font font-medium text-white mb-4 md:mb-0">
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/">Home</Link>
                        </li>
                        
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Login">Login</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Signup">Signup</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 cursor-pointer">

                            <Link to ="/Products">Products</Link>
                        </li>
                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 cursor-pointer">
                            <Link to ="/Cart">Cart</Link>
                        </li>

                        <li className="inline-flex items-center dark:bg-gray-800 dark:text-white text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 cursor-pointer">

                            <Link to ="/OrderHistory">Order History</Link>
                        </li> */}
                    </div>
                    <nav>{displayNav()}</nav>
                </div>
               
            </ul>
            
        </header>
     </>
    )}


export default Navbar;
