import React from "react";
import { Link } from "react-router-dom";
import details from "../../public/details.jpg";

function Detail() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/15 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Smart Agro-Tech Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
              Empowering Farmers with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500">
                Precision Soil Intelligence
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Transform your agricultural yields with data-driven soil analysis. 
              Discover ideal crop pairings, calculate custom NPK fertilizer schedules, 
              and implement sustainable soil conservation blueprints tailored to your land.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#advisor-agent"
                className="btn bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 border-none shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
              >
                <span>Launch Soil Advisor</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <Link
                to="/course"
                className="btn btn-outline border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 font-semibold px-6 rounded-xl transition-all duration-200"
              >
                Explore Soil Directory
              </Link>
            </div>

            {/* Feature Badges */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">10+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Soil Orders Mapped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Data-Backed Insights</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Instant</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Advisory Export</div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10 group">
                <img
                  src={details}
                  alt="Modern Soil Farming and Agriculture"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Sustainable Cultivation
                  </span>
                  <p className="text-sm font-medium mt-0.5 text-slate-200">
                    Precision soil health diagnostics for modern agriculture
                  </p>
                </div>
              </div>

              {/* Floating Stat Chip */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 flex items-center justify-center text-xl font-bold">
                  🌱
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Optimal Yield</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">+35% Potential</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Detail;
