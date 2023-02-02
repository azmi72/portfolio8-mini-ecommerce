import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const Banner = () => {
    const { banner } = useContext(MyContext);
    return (
        <div>
            <h1 className='text-2xl'>Banner</h1>
            {banner.map((banner) => {
                return (
                    <img key={banner.id} src={banner.image} />
                )
            })}
        </div>
    )
}

export default Banner