import React from 'react'
import list from "../../public/list.json";
import Cards from './Cards';
import { Link } from "react-router-dom"

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>
          we're delighted to have you <span className='text-pink-500'> here! :) </span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo magnam facere asperiores, at itaque. Totam quasi id libero atque, eveniet perspiciatis! Amet iure minus quaerat deleniti beatae, animi fugiat!
          </p>
        <Link to="/">
          <button className='bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700 duration-300 mt-6 '>Back</button>
         </Link> 
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">  
        {list.map((item)=>(
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Course