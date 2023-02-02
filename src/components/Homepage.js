import React, { useContext } from 'react'
import IconShopping from '../assets/icons/icon-shopping.svg'
// import { MyContext } from './MyContext'

const Homepage = () => {
    // const { product } = useContext(MyContext)
    return (
        <div className='w-full h-[76px] bg-White px-16 py-4 flex justify-between text-Dark items-center'>
            <div>
                <h1 className='font-bold text-xl'><a href='#'>Lupinsky Store</a></h1>
            </div>
            <div className='flex gap-20 font-light'>
                <h2><a href='#'>Home</a></h2>
                <h2><a href='#'>Category</a></h2>
                <h2><a href='#'>Product</a></h2>
            </div>
            <div className='flex gap-6'>
                <img src={IconShopping} />
                <button className='text-White text-sm bg-MainLight border border-MainLight px-6 py-3 rounded-xl'>Sign Up</button>
                <button className='text-MainLight text-sm border border-MainLight px-6 py-3 rounded-xl'>Login</button>
            </div>
        </div>
    )
}

export default Homepage