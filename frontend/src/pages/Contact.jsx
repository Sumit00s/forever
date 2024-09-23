import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 bordder-t'>
        <Title text1={'CONTACT'} text2={'US'}></Title>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="contact-img" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl'>Our Store</p>
          <p className='text-gray-500 '>54700 Willms Station <br /> Suite 350,Wasington USA</p>
          <p className='text-gray-500'>Tel: (878) 870-5720 <br />Email: admin@forever.com</p>
          <p className=' font-semibold text-xl text-gray-600'>Carrers at Forever</p>
          <p className='text-gray-500 '>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox></NewsLetterBox>
    </div>
  )
}

export default Contact