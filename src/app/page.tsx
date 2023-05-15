import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
    <Header />
    <div className='flex items-center justify-center flex-col h-[600px] gap-10'>
      <p className='font-normal text-[64px]'>Best Position ever found</p> 
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. </p>
      <Link href="/onboarding1">
        <div className="text-white bg-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 w-[250px] h-[70px] flex items-center justify-center">
          Start free trial
        </div>
    </Link>
    </div>

    <Footer/>

    </div>
  
  )
}
export default Home;
