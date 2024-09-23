import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}></Title>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="about-img" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium doloremque vero eligendi quo! Autem consequatur aliquam iure fugiat amet commodi quisquam dicta explicabo animi, quod suscipit possimus vitae? Non, recusandae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus vel a ut distinctio inventore id. Voluptatem, non ipsam. Eius velit neque magni quis soluta rerum veritatis sit quaerat suscipit.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo earum quisquam numquam ratione fuga, consequatur inventore, qui quis ducimus, sit fugiat fugit ipsam. Qui, eos! Vitae autem dolorum quod animi?</p>
        </div>
      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident similique error enim rerum quasi aspernatur repellendus qui laudantium harum.</p>
        </div>
        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident similique error enim rerum quasi aspernatur repellendus qui laudantium harum.</p>
        </div>
        <div className='border px-10 md:px-16 py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident similique error enim rerum quasi aspernatur repellendus qui laudantium harum.</p>
        </div>
      </div>

      <NewsLetterBox></NewsLetterBox>
    </div>
  )
}

export default About