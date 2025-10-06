import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl-py-40'>
      <h1 className=' w-full h-22 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-bg-gray-500 bg-clip-text text-transparent'>
        Steps to remove background <br /> image in seconds
      </h1>
      <div className=' flex items-start gap-4 flex-wrap mt-16 xl:mt-24 justify-between'>
        <div className='flex items-start gap-4 bg-blue border drop-shadow-md p-7 pd-10 rounded hover:scale-105 transition-all duration-500 bg-gray-100'>
            <img className='max-w-9' src={assets.upload_icon} alt="" />
            <div>
                <p className='text-xl font-medium'>Upload Image</p>
                <p className='text-sm text-neutral-500 mt-1'>Click on upload button to <br /> upload image</p>
            </div>
        </div>

        <div className='  flex items-start gap-4 bg-blue border drop-shadow-md p-7 pd-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.remove_bg_icon} alt="" />
            <div>
                <p className='text-xl font-medium'>Remove Background</p>
                <p className='text-sm text-neutral-500 mt-1'>Now this app will <br />remove background</p>
            </div>
        </div>

        <div className='  flex items-start gap-4 bg-blue border drop-shadow-md p-7 pd-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.download_icon} alt="" />
            <div>
                <p className='text-xl font-medium'>Download Image</p>
                <p className='text-sm text-neutral-500 mt-1'>Background removed now you can <br /> download image</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Steps
