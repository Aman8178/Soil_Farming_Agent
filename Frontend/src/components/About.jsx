import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 md:pt-36 pb-16 px-4 md:px-8 max-w-5xl mx-auto w-full">
        {/* Header Badge & Title */}
        <div className="text-center mb-12">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/60 rounded-full mb-3">
            Our Purpose & Vision
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-500">Soil Farming Agent</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing agricultural productivity by delivering timely, precision soil intelligence, optimal crop-matching algorithms, and sustainable soil conservation guidance directly to growers and stakeholders.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 text-2xl flex items-center justify-center mb-4">
              🎯
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We envision an agricultural future where every grower has seamless access to data-backed soil profiling, enabling resilient yields, lower fertilizer run-off, and sustainable food security for generations to come.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 text-2xl flex items-center justify-center mb-4">
              🧪
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Precision Decision Support</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              By cross-referencing soil taxonomy with seasonal conditions and farm scales, our platform replaces trial-and-error farming with exact NPK prescriptions and agronomic tips.
            </p>
          </div>
        </div>

        {/* Pillars / What We Do */}
        <div className="bg-white dark:bg-slate-800/80 p-8 md:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Core Agricultural Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">01. Comprehensive Taxonomy</span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Complete chemical and structural breakdowns of major soil classifications from Alluvial river basins to arid sandy soils.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">02. Yield Optimization</span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Smart crop-matching guidelines ensuring farmers plant varieties that thrive naturally in their specific local soil conditions.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 block">03. Nutrient Balancing</span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Targeted NPK and organic compost ratios that nurture microbial activity without excessive chemical dependency.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="text-center p-8 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 rounded-3xl border border-emerald-200 dark:border-emerald-800/60">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Have questions or feedback?</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            Reach out directly to our team at{" "}
            <a href="mailto:support@soilfarmingagent.com" className="text-emerald-600 dark:text-emerald-400 font-semibold underline">
              support@soilfarmingagent.com
            </a>
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/" className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl border-none">
              ← Return to Dashboard
            </Link>
            <Link to="/contactus" className="btn btn-sm btn-outline border-emerald-600 text-emerald-700 dark:text-emerald-300 rounded-xl">
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;
