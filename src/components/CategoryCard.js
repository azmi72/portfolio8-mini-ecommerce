import React, { useContext } from 'react'
import { MyContext } from './MyContext'

const CategoryCard = () => {
    const { category } = useContext(MyContext);
    return (
        <div>
            <h1 className='text-2xl'>Category</h1>
            {category.map((category) => {
                return (
                    <p key={category.id}>
                        {category.description}
                    </p>
                )
            })}
        </div>
    )
}

export default CategoryCard