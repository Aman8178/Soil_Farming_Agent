import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json"
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    const filterData=list.filter((data)=>data.category=='Free')
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='px-8'>
      <div>
      <h1 className='font-bold text-xl pb-2'>Free offered Course</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla esse illo deleniti vel sed dolor, illum officia consequatur enim? Accusantium quis quibusdam nobis nisi alias sunt magnam rerum ea? Ipsam?</p>
      
      </div>
      <Slider {...settings}>
        {filterData.map((item)=>(  
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
      </div>
    
  )
}

export default Freebook
