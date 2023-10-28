import React from "react";

const Header = () => {
    return (
        <>
            <header className="w-full bg-transparent fixed top-0 right-0 left-0">
                <div className="grid grid-cols-2 max-w-7xl w-full items-center justify-between">
                    <div className="flex w-full items-center gap-10">
                        <div className="flex h-10 w-10 " >
                            <img src='' alt="" />
                        </div>
                        <nav className="hidden md:flex w-auto h-auto">
                            <ul className='flex w-auto gap-8 text-base text-white'>
                                <li className='flex'><a href="">About LisA</a></li>
                                <li className='flex'><a href="">Features</a></li>
                                <li className='flex'><a href="">Marketplace</a></li>
                                <li className='flex'><a href="">What is LetsUpgrade?</a></li>
                            </ul>
                        </nav>
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export default Header;