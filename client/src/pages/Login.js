import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import '../styles/login.css';
import '../styles/signup.css';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const formData = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };


  const newData = (event) => {

    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (

    // <div className="max-w-sm border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    //   <Link to="/Signup">Signup</Link>

    //   <h3>Login</h3>
    <>
      <form onSubmit={formData}>
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
          <label htmlFor="pwd">Password:</label>
          <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="enter password"
            name="password"
            type="password"
            id="password"
            onChange={newData}

          />
        </div>
        {error ? (
          <div>
            <p className="error-text">Email and/or password not found.</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">

          <button className="inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
          type="text-white font-bold py-2 px-4 rounded-full">Submit</button>

        </div>
      </form>
    {/* </div> */}
    </>
  );
}

export default Login;
