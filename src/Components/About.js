import React from 'react';
import Aboutimg from '../Components/assets/contactbutton.png';
import './about.css'

export default function About() {
  return (
    <div className='about'>
      <h1 className='my-20 text-center text-4xl text-white'>
        About <span className='text-gray-500'>Me</span>
      </h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <img className='' src={Aboutimg} alt='About' />
        </div>
      </div>
    </div>
  );
}
