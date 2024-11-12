import React from 'react'
import { assets } from '../assets/assets'
import {  useNavigate } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Our shopping cart website offers a seamless and user-friendly experience for online shoppers. With an intuitive interface,add items to their cart, and manage their purchases with ease. The website provides real-time updates on stock availability, offers multiple payment options, and includes features like product filtering, wishlist, and secure checkout.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
          <li onClick={() => navigate('/home')}>Home</li>
          <li onClick={() => navigate('/about')}>About us</li>
            {/* <li>Delivery</li> */}
            <li>Privacy policy</li> 
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>7083056736</li>
            <li>Forever@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'> </p>
      </div>

    </div>
  )
}

export default Footer
