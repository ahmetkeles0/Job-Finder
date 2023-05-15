import React from 'react'
import Header from '../components/header'
import 'tailwindcss/tailwind.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

const handleCharInputChange = (event) => {
    event.target.value = event.target.value.replace(/[^A-Za-z]/g, '');
}
const handleNumberInputChange = (event) => {
    event.target.value = event.target.value.replace(/\D/g, '');
};

const OnBoarding2 = () => {
    return (
        <div>
            <Header />
            <div className="flex items-center justify-center h-[700px] bg-[#F2F2F2] mt-[50px] mb-[90px] w-[650px] mx-auto">
                <form>
                    <div className='flex items-center justify-center flex-row gap-20'>
                        <Link href="/onboarding1">
                            <div className="flex items-center justify-center mb-[50px] text-xl font-semibold text-gray-900 ">&lt;</div>
                         </Link>                        
                        <p className='flex items-center justify-center  mb-[50px] text-xl font-semibold text-gray-900 pl-[100px]'>Sign Up Form</p>
                        <p className='flex items-center justify-center  mb-[50px] text-xl font-semibold text-gray-900 pl-[80px] '>2/3</p>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">City</label>
                        <input type="text" id="name" className="px-4 py-2 border border-gray-300 rounded-md w-full" onInput={handleCharInputChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                        <input type="email" id="email" className="px-4 py-2 border border-gray-300 rounded-md w-full" onInput={handleCharInputChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Address Details</label>
                        <input type="text" id="name" className="px-4 py-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Skills</label>
                        <input type="email" id="email" className="px-4 py-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                        <input type="email" id="email" className="px-4 py-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <Link href="/onboarding3">
                        <div className="text-white bg-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 text-center mt-[120px]">Sign Up</div>
                    </Link>
                </form>
            </div>

            <footer className="bg-[#F2F2F2] lg:text-left">
                <div className="p-4 text-center text-neutral-700">
                    <p className="text-right text-xl font-semibold text-gray-900 pr-[20px]">ACME</p>
                </div>
            </footer>
        </div>

    )
}

export default OnBoarding2