import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonial = () => {
testimonialsData.map((item)=>{
  let a= item.jobTitle
})
  return (
    <div className='pb-20'>
      <h1 className='mb-12 sm:mb-20 w-full h-22 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-bg-gray-500 bg-clip-text text-transparent py-5'>
        Customer Testimonial
    </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-8'>
        {testimonialsData.map((item,index)=>(
            <div className='bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-500' key={index} >
                <p className='text-4xl text-gray-500'>"</p>
                <p className='text-sm text-gray-500'>{item.text}</p>
                <div className='flex items-center gap-3 mt-5'>
                    <img className='hover:scale-105 transition-all duration-500 hover:rounded-xl w-14 rounded-full hover1' src={item.image} alt="" />
                    <div className='hover1'>
                        <p>{item.author}</p>
                        <p className='text-sm text-gray-600'>{item.jobTitle}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
