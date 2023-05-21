import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import useSetTitle from '../../hooks/useSetTitle';
import { FaGoogle } from 'react-icons/fa';


function Login() {
    const { signIn, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const googleProvider = new GoogleAuthProvider();
    useSetTitle("Login")


    const [error, setError] = useState("");

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("")
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })
    }

    const loginWithGoogleHandler = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setError("");
                navigate(from || "/", { replace: true });
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            });
    };


    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <form onSubmit={handleLogin} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <h3 className="text-center text-[#e0a82e] font-bold mb-2 text-lg">Welcome Back!</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name='email'
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name='password'
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">

                        <input
                            className="bg-[#e0a82e] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            value="Login"
                        />
                        <p>
                            Are you new to PixiePlay? <Link to="/register"
                                className="inline-block align-baseline font-bold text-sm hover:text-yellow-500 text-[#e0a82e]"

                            >
                                Register
                            </Link>
                        </p>
                    </div>
                    {
                        error && <p className="text-red-600 mt-3 text-center">{error}</p>
                    }
                </form>

                <div className="flex items-center  my-6">
                    <hr className="border-t border-gray-300 flex-grow mr-3" />
                    <h2 className="text-gray-800 text-lg font-bold">Or</h2>
                    <hr className="border-t border-gray-300 flex-grow ml-3" />
                </div>

                <div className="flex justify-center mb-4">
                    <button onClick={loginWithGoogleHandler} className="bg-[#e0a82e] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 flex justify-center items-center">
                        <FaGoogle className='me-2' /> Login with Google
                    </button>

                </div>
            </div>
        </div>

    );
}

export default Login;
