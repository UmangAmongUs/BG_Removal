import React from 'react'
import { assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      <img className='hover:scale-110' width={150} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max:sm-hidden hover:underline'>Copyright @UmangAmongUs | All Right Reserved</p>
      <div className='flex gap-1'>
        <a href = 'https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
          <img  className='hover:scale-110' width={40} src={assets.facebook_icon} alt="" />
        </a>
        <a href = 'https://x.com' target='_blank' rel='noopener noreferrer'>
          <img  className='hover:scale-110' width={40} src={assets.twitter_icon} alt="" />
        </a>
        <a href = 'https://mail.google.com/mail/u/0/#inbox' target='_blank' rel='noopener noreferrer'>
          <img  className='hover:scale-110' width={40} src={assets.google_plus_icon} alt="" />
        </a>        
      </div>
    </div>
  )
}

export default Footer
