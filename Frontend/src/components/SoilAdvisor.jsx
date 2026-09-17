import React, { useState } from 'react';

const ADVISORY_DATA = {
  alluvial: {
    name: "Alluvial Soil (Khadar & Bhangar)",
    characteristics: "Formed by river silt deposits; rich in potash, phosphoric acid, and lime; low in nitrogen.",
    bestCrops: ["Wheat", "Paddy (Rice)", "Sugarcane", "Jute", "Oilseeds", "Maize"],
    fertilizer: "NPK Ratio 4:2:1 with supplemental Urea (Nitrogen) & organic compost to replenish organic matter.",
    irrigation: "Moderate to high irrigation; excellent drainage and water retention.",
    expertTip: "Rotate with leguminous pulses (gram, moong) between cereal cycles to naturally restore soil nitrogen."
  },
  black: {
    name: "Black Soil (Regur / Vertisol)",
    characteristics: "Volcanic origin; high moisture retention, high clay content, rich in calcium carbonate, magnesium, potash.",
    bestCrops: ["Cotton", "Soybean", "Groundnut", "Sorghum (Jowar)", "Pigeon Pea (Tur)", "Wheat"],
    fertilizer: "Requires moderate Nitrogen and Phosphorus; avoid over-fertilizing with potassium.",
    irrigation: "Deep irrigation with long intervals; drains slowly, prevent waterlogging during monsoon.",
    expertTip: "Ensure deep summer ploughing to improve aeration and manage clay compaction."
  },
  red: {
    name: "Red & Yellow Soil",
    characteristics: "High iron oxide content; porous and friable; generally acidic to neutral, deficient in nitrogen, humus, and phosphorus.",
    bestCrops: ["Millets (Ragi, Bajra)", "Groundnut", "Tobacco", "Pulses", "Potatoes", "Mango & Citrus Orchards"],
    fertilizer: "Apply lime or gypsum if acidic; heavy application of Farm Yard Manure (FYM) and NPK 12:32:16.",
    irrigation: "Frequent light irrigation; low moisture retention capacity.",
    expertTip: "Mulching is highly recommended to retain moisture in topsoil layers during dry spells."
  },
  sandy: {
    name: "Sandy / Arid Soil",
    characteristics: "Coarse texture with very high porosity; extremely low water retention and organic humus.",
    bestCrops: ["Pearl Millet (Bajra)", "Guar (Cluster Beans)", "Barley", "Watermelon", "Carrots", "Mustard"],
    fertilizer: "Slow-release neem-coated urea and heavy doses of compost/vermicompost to build soil structure.",
    irrigation: "Drip irrigation is mandatory for high efficiency and water conservation.",
    expertTip: "Incorporate cover crops and biochar to progressively boost organic matter and moisture holding capacity."
  },
  laterite: {
    name: "Laterite Soil",
    characteristics: "Formed by intense leaching due to heavy rainfall; rich in iron and aluminum, acidic, low in organic content.",
    bestCrops: ["Tea", "Coffee", "Cashew Nuts", "Rubber", "Coconut", "Tapioca"],
    fertilizer: "Liming to regulate soil pH; balanced application of rock phosphate, potash, and biofertilizers.",
    irrigation: "Regular irrigation with well-drained terraces to mitigate soil erosion on slopes.",
    expertTip: "Practice contour terracing and plant vetiver grass borders to avoid topsoil runoff."
  },
  loamy: {
    name: "Loam / Silt Loam (Universal Farm Soil)",
    characteristics: "Ideal balance of sand, silt, and clay (40-40-20); superior aeration, moisture retention, and high microbial activity.",
    bestCrops: ["Tomatoes", "Peppers", "Cauliflower", "Leafy Greens", "Wheat", "Maize", "Strawberries"],
    fertilizer: "Balanced NPK 19:19:19 with annual top-dressing of aged vermicompost.",
    irrigation: "Standard scheduled irrigation; supports drip, sprinkler, and furrow methods.",
    expertTip: "Maintain high organic carbon levels by avoiding excessive till and recycling crop residue."
  }
};

export default function SoilAdvisor() {
  const [selectedSoil, setSelectedSoil] = useState("alluvial");
  const [season, setSeason] = useState("kharif");
  const [farmScale, setFarmScale] = useState("medium");
  const [report, setReport] = useState(ADVISORY_DATA["alluvial"]);
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setReport(ADVISORY_DATA[selectedSoil]);
  };

  const handleCopyReport = () => {
    const text = `Soil Farming Advisory Report:\nSoil Type: ${report.name}\nSeason: ${season.toUpperCase()}\nRecommended Crops: ${report.bestCrops.join(", ")}\nFertilizer Strategy: ${report.fertilizer}\nIrrigation: ${report.irrigation}\nExpert Tip: ${report.expertTip}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="advisor-agent" className="py-12 px-4 md:px-8 bg-gradient-to-b from-green-50/50 to-white dark:from-slate-900 dark:to-slate-800 rounded-3xl my-10 border border-green-100 dark:border-slate-700 shadow-sm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="badge badge-success text-white font-semibold py-3 px-4 mb-3 uppercase tracking-wide">
            Interactive AI Decision Agent
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white">
            Smart Crop & Soil Farming Advisor
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
            Input your field characteristics to receive instant, data-backed agricultural advisory on crop suitability, fertilizer scheduling, and irrigation strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Form */}
          <form onSubmit={handleGenerate} className="lg:col-span-5 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  1. Select Soil Classification
                </label>
                <select
                  value={selectedSoil}
                  onChange={(e) => setSelectedSoil(e.target.value)}
                  className="select select-bordered w-full dark:bg-slate-700 dark:text-white"
                >
                  <option value="alluvial">Alluvial Soil (River Basin / Plains)</option>
                  <option value="black">Black Soil (Regur / Deccan Trap)</option>
                  <option value="red">Red & Yellow Soil (Peninsular Plateau)</option>
                  <option value="loamy">Loam Soil (Horticulture & Mixed)</option>
                  <option value="sandy">Sandy / Semi-Arid Soil</option>
                  <option value="laterite">Laterite Soil (High Rainfall Areas)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  2. Planting Season
                </label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className="select select-bordered w-full dark:bg-slate-700 dark:text-white"
                >
                  <option value="kharif">Kharif Season (Monsoon: June - Oct)</option>
                  <option value="rabi">Rabi Season (Winter: Oct - April)</option>
                  <option value="zaid">Zaid Season (Summer: March - June)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                  3. Farming Scale & Target
                </label>
                <select
                  value={farmScale}
                  onChange={(e) => setFarmScale(e.target.value)}
                  className="select select-bordered w-full dark:bg-slate-700 dark:text-white"
                >
                  <option value="small">Smallholder / Homestead Farm</option>
                  <option value="medium">Commercial Field Farming</option>
                  <option value="horticulture">Intensive Horticulture / Greenhouse</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full btn bg-green-600 hover:bg-green-700 text-white border-none shadow-md font-semibold"
            >
              Generate Advisory Report
            </button>
          </form>

          {/* Advisory Output */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between border-b pb-4 mb-4 dark:border-slate-700">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-700 dark:text-green-400">
                    {report.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Season: <span className="font-semibold capitalize">{season}</span> • Target: <span className="font-semibold capitalize">{farmScale}</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyReport}
                  className="btn btn-xs btn-outline btn-success"
                >
                  {copied ? "Copied! ✓" : "Copy Report"}
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-100 block mb-1">
                    🌾 Recommended Optimal Crops:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {report.bestCrops.map((crop, idx) => (
                      <span key={idx} className="badge badge-outline border-green-500 text-green-700 dark:text-green-300 font-medium">
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-100 block mb-1">
                    🧪 Fertilizer & Nutrient Prescription:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed bg-green-50/50 dark:bg-slate-700/50 p-3 rounded-lg border border-green-100 dark:border-slate-600">
                    {report.fertilizer}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-100 block mb-1">
                    💧 Irrigation & Water Management:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300">
                    {report.irrigation}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-100 block mb-1">
                    💡 Agronomist Expert Tip:
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{report.expertTip}"
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t dark:border-slate-700 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
              <span>Soil Farming Advisory Engine v2.0</span>
              <span className="text-green-600 dark:text-green-400 font-medium">Verified Agricultural Heuristics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
