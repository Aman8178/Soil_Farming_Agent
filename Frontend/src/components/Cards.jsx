import React from 'react';

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&auto=format&fit=crop&q=80";

function Cards({ item }) {
  const isPremium = item.category && item.category.toLowerCase() === "premium";

  return (
    <div className="p-2.5 sm:p-3 h-full">
      <div className="bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group">
        <div>
          {/* Image Container */}
          <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-700">
            <img
              src={item.image || DEFAULT_IMAGE}
              alt={item.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = DEFAULT_IMAGE;
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

            {/* Category Tag */}
            {item.category && (
              <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md ${
                isPremium
                  ? "bg-amber-500/90 text-white"
                  : "bg-emerald-600/90 text-white"
              }`}>
                {item.category}
              </span>
            )}
          </div>

          {/* Card Content */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
              {item.name}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
              {item.title}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-5 pt-0">
          <a
            href={item.link || "#"}
            className="btn btn-sm w-full bg-slate-50 dark:bg-slate-700/60 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-emerald-700 dark:text-emerald-300 border border-slate-200 dark:border-slate-600 hover:border-emerald-600 rounded-xl font-semibold transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Scientific Guide ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
