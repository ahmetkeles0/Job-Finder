import React from "react";
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav className="bg-[#F2F2F2] px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <span className="self-center text-xl font-semibold">ACME</span>
                    <div className="flex items-center ">
                        <Link href="/login">
                            <div className="text-black  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Login</div>
                        </Link>  
                        <Link href="/onboarding1">
                            <div className="text-white bg-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">Sign Up</div>
                        </Link>                       
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;