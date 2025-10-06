import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 pb-10 lg:px-44 sm:mt-20 border-b-1' >
      <div > 
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
            Remove  the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>Background</span> from <br className='max-md:hidden'/> image for FREE</h1>
        <p className='my-6 text-[15px] text-gray-500'>This project is design by Umang Chaturvedi, <br className='max-sm:hidden' />this project is an ai based project that remove the background from given image</p>
        <div>
            <input type="file" name='' id="upload1" hidden/>
            <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-500' htmlFor="upload1">
                <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className='text-white text-sm'>Upload Image</p>
            </label>
        </div>
      </div>

      <div className='w-full max-w-md'>
        <img src={assets.header_img} alt="" />
      </div>

    </div>
  )
}

export default Header
