import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);


    
    const formData = async (e) => {
        e.preventDefault();
        const userMutation = await addUser({
            variables: {
                username: formState.username,
                fName: formState.fName,
                lName: formState.lName,
                email: formState.email,
                password: formState.password,
                
            },
        });
        const token = userMutation.data.addUser.token;
        Auth.login(token);
    };
    
    const newData = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        })
        console.log(name);
        console.log(value);
    };
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link className="flex-row space-between" to="/Login">Login</Link>
            <Link className="flex-row space-between" to="/">Home</Link>
            <h2>BECOME A OMNV MEMBER</h2>
            <form onSubmit={formData}>
            <div className="flex-row space-between my-2">
                    <label htmlFor="username">Username:</label>
                    <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="enter your username"
                        name="username"
                        type="username"
                        id="username"
                        onChange={newData}
                    />
                </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="fName">First Name:</label>
                        <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="enter your first name"
                            name="fName"
                            type="fName"
                            id="fName"
                            onChange={newData}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="lName">Last Name:</label>
                        <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="enter your last name"
                            name="lName"
                            type="lname"
                            id="lName"
                            onChange={newData}
                        />
                    </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email:</label>
                    <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="enter your email"
                        name="email"
                        type="email"
                        id="email"
                        onChange={newData}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="password">Password:</label>
                    <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="minimum 8 character password"
                        name="password"
                        type="password"
                        id="password"
                        onChange={newData}
                    />
                </div>
                <div className="flex-row flex-end">

                    <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" type="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
