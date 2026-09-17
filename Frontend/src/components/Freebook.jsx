import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';

const fallbackSoils = [
  {
    _id: "1",
    name: "Alluvial Soil Management",
    title: "Rich in potash and lime; ideal for high-yield wheat, rice, and sugarcane.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Alluvium"
  },
  {
    _id: "2",
    name: "Black Soil (Regur)",
    title: "High moisture retention and clay content; perfect for cotton, groundnut, and pulses.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Vertisol"
  },
  {
    _id: "3",
    name: "Red & Yellow Soil Advisory",
    title: "Requires balanced nitrogen and phosphorus fertilization for millets and oilseeds.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Red_soil"
  },
  {
    _id: "4",
    name: "Loamy Garden & Field Soil",
    title: "Optimal balance of sand, silt, and clay for intensive vegetable & horticulture farming.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?w=600&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Loam"
  }
];

function Freebook() {
  const [soil, setSoil] = useState(fallbackSoils);

  useEffect(() => {
    const getSoil = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/soil`);
        const freeItems = res.data.filter((data) => data.category === 'Free');
        if (freeItems && freeItems.length > 0) {
          setSoil(freeItems);
        }
      } catch (error) {
        console.warn("Using fallback soil data due to API status:", error.message);
      }
    };
    getSoil();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='px-8 py-10'>
      <div className='mb-6'>
        <h2 className='font-bold text-2xl md:text-3xl text-green-700 pb-2'>
          Featured Soil & Crop Insights
        </h2>
        <p className='text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed'>
          Explore foundational soil classifications, nutrient profiles, and recommended farming practices designed to maximize harvest yield and sustain long-term soil vitality.
        </p>
      </div>
      <Slider {...settings}>
        {soil.map((item, index) => (
          <Cards item={item} key={item._id || item.id || index} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook
