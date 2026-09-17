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
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/60 rounded-full mb-2.5">
            Curated Knowledge Base
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
            Featured Soil & Crop Insights
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl text-sm sm:text-base mt-2 leading-relaxed">
            Explore foundational soil classifications, nutrient profiles, and recommended farming practices designed to maximize harvest yield and sustain long-term soil vitality.
          </p>
        </div>
        <a
          href="/course"
          className="btn btn-sm md:btn-md btn-outline border-emerald-600 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-xl font-semibold self-start md:self-auto shrink-0 transition-all duration-200"
        >
          View Full Directory →
        </a>
      </div>

      <Slider {...settings}>
        {soil.map((item, index) => (
          <Cards item={item} key={item._id || item.id || index} />
        ))}
      </Slider>
    </section>
  );
}

export default Freebook;
