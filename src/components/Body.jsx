import React, { useState } from "react";
import Login from "./Login";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import SignUp from "./SignUp";

const Body = () => {

    const [btnText, setBtnText] = useState('Login');
    const toggleFormBtn = () => { setBtnText(btnText === 'Login' ? "SignUp" : 'Login') }
    const linkText = (btnText === 'Login') ? "Sign Up" : "Login";

    return (
        <>
            <main className="flex h-screen w-full bg-brand_blue">
                <section className="flex w-full">
                    <div className="grid grid-cols-2 w-full max-w-7xl mx-auto ">
                        <div className="flex w-full "></div>
                        <div className="flex w-full items-center justify-center">
                            <div className="flex flex-col bg-white rounded-xl w-full p-10 max-w-sm gap-5">
                                <div className="flex w-full items-center justify-center">
                                    <h3 className="text-2xl font-semibold ">{btnText === "Login"? 'Log In' : 'Sign Up'}</h3>
                                </div>
                                <Outlet />
                                <div className="flex w-full items-center justify-center">
                                    <span className="flex w-full bg-gray-400 h-1 rounded-md"></span>
                                    <span className="flex w-full justify-center text-base items-center">or</span>
                                    <span className="flex w-full bg-gray-400 h-1 rounded-md"></span>
                                </div>
                                <div className="grid grid-cols-2 w-full gap-5">
                                    <div className="flex items-center justify-center">
                                        <Link to="/Login" className="flex text-base font-normal bg-brand_blue text-center items-center justify-center text-white py-2 px-5 w-full rounded-lg">QR Login</Link>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <Link to={btnText === 'Login' ? "/SignUp" : "/Login"} onClick={toggleFormBtn} className="flex text-base font-normal bg-brand_blue text-center items-center justify-center text-white py-2 px-5 w-full rounded-lg">{linkText}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/Login',
        element: <Login />
    },
    {
        path: '/SignUp',
        element: <SignUp />
    }
])

export default Body;
