import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const ResultSlider = () => {

      const { resultImage , image } = useContext(AppContext)

    const [sliderPosition , setSliderPosition] = useState(50)

    const handleSlider = (e) =>{
            setSliderPosition(e.target.value)
        }

  return (
    <div className='pb-10 md:py-20 mx-2 border-2'>
        <h1 className='mb-10 sm:mb-20 w-full h-16 text-center text-xl md:text-2xl lg:text-3xl mt-3 font-semibold bg-gradient-to-r from-gray-900 to-bg-gray-500 bg-clip-text text-transparent'>
            Background removed
        </h1>
      <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl border-1'>
              <img src={image ? URL.createObjectURL(image) : ""} style={{clipPath:`inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" />
              <img className='absolute top-0 left-0 w-full h-full' src={resultImage ? resultImage : ""} style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}} alt="" />
              <input className='absolute top-1/2 left-1/2 transform -translate-1/2  -translate-y-1/2 w-full z-10 slider ' type="range" min={0} max={100} value={sliderPosition} onChange={handleSlider} />
            </div>
    </div>
  )
}

export default ResultSlider
