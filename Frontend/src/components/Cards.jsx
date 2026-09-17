import React from 'react';

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&auto=format&fit=crop&q=80";

function Cards({ item }) {
  return (
    <div className='mt-4 my-3 p-3'>
      <div className="card bg-base-100 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 rounded-xl overflow-hidden h-full flex flex-col justify-between">
        <div>
          <figure className="relative h-48 overflow-hidden">
            <img
              src={item.image || DEFAULT_IMAGE}
              alt={item.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = DEFAULT_IMAGE;
              }}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            {item.category && (
              <span className="absolute top-2 right-2 badge badge-success text-white text-xs font-semibold px-2.5 py-1 rounded shadow">
                {item.category}
              </span>
            )}
          </figure>
          <div className="card-body p-5">
            <h2 className="card-title text-lg font-bold text-slate-800 dark:text-white">
              {item.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
              {item.title}
            </p>
          </div>
        </div>
        <div className="p-5 pt-0">
          <a
            href={item.link || "#"}
            className="btn btn-sm btn-outline btn-success w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
