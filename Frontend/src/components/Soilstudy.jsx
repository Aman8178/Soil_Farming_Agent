import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from "axios";
import { API_BASE_URL } from '../config/api';

const initialSoilData = [
  {
    _id: "s1",
    name: "Alluvial Soil (River Basin)",
    title: "High fertility, rich in potash and lime. Ideal for rice, wheat, maize, sugarcane, and pulses.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Alluvium"
  },
  {
    _id: "s2",
    name: "Black Soil (Regur / Cotton Soil)",
    title: "Clay-rich with exceptional moisture retention. Prime choice for cotton, soybean, sorghum, and groundnut.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Vertisol"
  },
  {
    _id: "s3",
    name: "Red & Yellow Soil Advisory",
    title: "Porous texture formed on crystalline igneous rocks. Excellent for millets, oilseeds, and tobacco with proper NPK fertilization.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Red_soil"
  },
  {
    _id: "s4",
    name: "Laterite Soil Management",
    title: "Leached acidic soil in heavy rainfall regions. Highly productive for plantation crops: tea, coffee, cashew nuts, and rubber.",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Laterite"
  },
  {
    _id: "s5",
    name: "Loamy Horticulture Soil",
    title: "The gold standard for agricultural versatility. Perfectly balanced for high-value vegetables, fruits, and floriculture.",
    category: "Free",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?w=600&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Loam"
  },
  {
    _id: "s6",
    name: "Arid & Sandy Soil Cultivation",
    title: "Light textured with high permeability. Responds exceptionally well to drip fertigation for drought-resistant crops like bajra and guar.",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&auto=format&fit=crop&q=80",
    link: "https://en.wikipedia.org/wiki/Sand"
  }
];

function Soilstudy() {
  const [soil, setSoil] = useState(initialSoilData);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSoil = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE_URL}/soil`);
        if (res.data && res.data.length > 0) {
          setSoil(res.data);
        }
      } catch (error) {
        console.warn("Using offline/fallback soil catalogue:", error.message);
      } finally {
        setLoading(false);
      }
    };
    getSoil();
  }, []);

  const filteredSoils = soil.filter((item) => {
    const matchesCategory =
      activeCategory === "All" ||
      (item.category && item.category.toLowerCase() === activeCategory.toLowerCase());
    const matchesSearch =
      (item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='px-4 md:px-8 max-w-7xl mx-auto'>
      <div className='mt-28 text-center'>
        <span className='inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700 bg-green-100 rounded-full mb-3'>
          Agricultural Knowledge Hub
        </span>
        <h1 className='text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white'>
          Comprehensive <span className='text-green-600'>Soil & Crop Directory</span>
        </h1>
        <p className='mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed'>
          Explore in-depth soil profiles, chemical properties, and cultivation blueprints. Use the filters below to search by soil classification or access category.
        </p>

        {/* Filter & Search Bar */}
        <div className='mt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700'>
          <div className='flex flex-wrap items-center gap-2'>
            {["All", "Free", "Premium"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn btn-sm ${
                  activeCategory === cat
                    ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
                    : "btn-ghost text-slate-700 dark:text-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className='w-full md:w-72'>
            <input
              type="text"
              placeholder="Search soil or crop..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered input-sm w-full dark:bg-slate-700 dark:text-white"
            />
          </div>
        </div>

        <div className='mt-6'>
          <Link to="/">
            <button className='btn btn-sm bg-slate-700 hover:bg-slate-800 text-white px-5 rounded-lg'>
              ← Return to Dashboard
            </button>
          </Link>
        </div>
      </div>

      {loading && (
        <div className="text-center py-10 text-gray-500">
          Syncing latest soil data from server...
        </div>
      )}

      <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredSoils.map((item, index) => (
          <Cards key={item._id || item.id || index} item={item} />
        ))}
      </div>

      {filteredSoils.length === 0 && !loading && (
        <div className='text-center py-12 text-gray-500 dark:text-gray-400'>
          No soil profiles found matching your search criteria.
        </div>
      )}
    </div>
  );
}

export default Soilstudy;
