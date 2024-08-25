import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from "axios" 

function Soilstudy() {

  const [soil, setSoil]=useState([]);
  useEffect(()=>{
    const getSoil=async()=>{
      try{
        const res=await axios.get("http://localhost:4001/soil")
        console.log(res.data);
        setSoil(res.data);
      }
      catch(error){
        console.log(error);
      }
    }
    getSoil();
  }, [])
  return (
    <>
      <div className='px-8'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We're delighted to have you 
            <span className='text-pink-500'> Here :)</span> 
          </h1>
          <p className='p-10 text-gray-700'>
            Welcome to the Soil Study section, where you can deepen your knowledge about soil health, farming practices, and sustainable agriculture. Our resources and tools are designed to help you understand the nuances of soil management, connect with distributors, and implement best practices in your fields. Explore the content, gain insights, and make informed decisions to enhance the productivity and sustainability of your farming activities.
          </p>
          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {soil.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Soilstudy;
