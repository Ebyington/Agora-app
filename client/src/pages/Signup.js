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
        const auth = userMutation.data.addUser.token;
        Auth.login(auth);
    };
    
    const newData = (e) => {
        const { name, d } = e.target;
        setFormState({
            ...formState,
            [name]: d,
        })
        console.log(name);
    };
    return (
        <div className="container my-1">
            <Link className="flex-row space-between" to="/login">Login</Link>
            <Link className="flex-row space-between" to="/">Home</Link>
            <h2>BECOME A OMNV MEMBER</h2>
            <form onSubmit={formData}>
            <div className="flex-row space-between my-2">
                    <label htmlFor="username">Username:</label>
                    <input
                        placeholder="enter your username"
                        name="username"
                        type="username"
                        id="username"
                        onChange={newData}
                    />
                </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="fName">First Name:</label>
                        <input
                            placeholder="enter your first name"
                            name="fName"
                            type="fName"
                            id="fName"
                            onChange={newData}
                        />
                    </div>
                    <div className="flex-row space-between my-2">
                        <label htmlFor="lName">Last Name:</label>
                        <input
                            placeholder="enter your last name"
                            name="lName"
                            type="lname"
                            id="lName"
                            onChange={newData}
                        />
                    </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder="enter your email"
                        name="email"
                        type="email"
                        id="email"
                        onChange={newData}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="password">Password:</label>
                    <input
                        placeholder="minimum 8 character password"
                        name="password"
                        type="password"
                        id="password"
                        onChange={newData}
                    />
                </div>
                <div className="flex-row flex-end">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
