import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img src={assets.contact_image} alt="" className='w-full md:max-w-[360px]' />

          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='text-lg font-semibold text-gray-600'>Our OFFICE</p>
            <p className='text-gray-500'>54074 Willms station <br /> suite 350,Washington, USA </p>
            <p className='text-gray-500'>Tel: (415) 555-5458 <br /> Email: Haridev@gmail.com</p>
            <p className='text-lg font-semibold text-gray-600'>Careers at PRESCRIPTO</p>
            <p className='text-gray-500'>Learn more about our tems and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>

      </div>
      
    </div>
  )
}

export default Contact
