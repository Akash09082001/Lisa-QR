import React from "react";

const Login = () => {

    return (
        <>
            <form action="" method="post" className="flex w-full flex-col gap-5 items-center justify-center">
                <div className="flex flex-col w-full gap-3">
                    <div className="w-full flex-col flex gap-2">
                        <label htmlFor="name" className="flex text-brand_blue font-semibold text-sm">Login ID</label>
                        <input type="text" name="name" id="name" placeholder="Enter Login Id" className="flex w-full border border-gray-300 pl-5 py-2 rounded-lg outline-none" />
                        <span id="nameError" className="text-xs text-red-600 capitalize"></span>
                    </div>
                    <div className="w-full flex-col flex gap-2">
                        <label htmlFor="password" className="flex text-brand_blue font-semibold text-sm">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" className="flex w-full border border-gray-300 pl-5 py-2 rounded-lg outline-none" />
                        <span id="passwordError" className="text-xs text-red-600 capitalize"></span>
                    </div>

                    <button type="submit" className="flex text-base font-normal bg-brand_blue text-center items-center justify-center text-white py-2 px-5 w-full rounded-lg ">Sign In</button>
                </div>
            </form>
        </>
    );

};

export default Login;