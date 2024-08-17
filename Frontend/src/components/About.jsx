import React from 'react';

function AboutUs() {
  return (
    <div className="px-8 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-8">About Us</h1>
        <p className="text-lg leading-relaxed mb-12">
          Welcome to <span className="font-semibold text-green-700">Soil Farming Agent</span>, where we are dedicated to revolutionizing agriculture through advanced soil management. Our mission is to empower farmers with essential tools and information to optimize soil health, enhance crop yield, and promote sustainable farming practices.
        </p>

        <h2 className="text-3xl font-semibold text-green-600 mb-6">Our Vision</h2>
        <p className="text-lg leading-relaxed mb-12">
          Our vision is to create a future where every farmer has access to accurate, timely, and actionable soil data. We believe that informed soil management is the cornerstone of successful farming and is crucial for food security and environmental sustainability.
        </p>

        <h2 className="text-3xl font-semibold text-green-600 mb-6">What We Do</h2>
        <ul className="text-left list-disc list-inside mb-12">
          <li className="mb-2"><span className="font-semibold">Comprehensive Soil Data:</span> Detailed information about various soil types, including their suitability for different crops, required fertilizers, and soil health indicators.</li>
          <li className="mb-2"><span className="font-semibold">User-Friendly Interface:</span> A modern and intuitive interface that allows farmers to easily access and manage soil data.</li>
          <li className="mb-2"><span className="font-semibold">Advanced Features:</span> Tools and features to help users make informed decisions about soil treatment and crop selection.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-green-600 mb-6">Why It Matters</h2>
        <p className="text-lg leading-relaxed mb-12">
          Soil is the foundation of agriculture, and its health directly impacts crop productivity and quality. By providing farmers with reliable and actionable soil information, we aim to:
        </p>
        <ul className="text-left list-disc list-inside mb-12">
          <li className="mb-2"><span className="font-semibold">Improve Crop Yield:</span> Help farmers select the best crops for their soil and optimize fertilizer usage.</li>
          <li className="mb-2"><span className="font-semibold">Enhance Soil Health:</span> Promote practices that improve soil quality and sustainability.</li>
          <li className="mb-2"><span className="font-semibold">Support Sustainable Farming:</span> Reduce environmental impact through better soil management.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-green-600 mb-6">Our Team</h2>
        <p className="text-lg leading-relaxed mb-12">
          Our team is composed of passionate individuals with expertise in soil science, agriculture, and technology. We are dedicated to developing innovative solutions that address the challenges faced by modern farmers.
        </p>

        <h2 className="text-3xl font-semibold text-green-600 mb-6">Contact Us</h2>
        <p className="text-lg leading-relaxed">
          We are here to help! If you have any questions or need support, please feel free to reach out to us at <a href="mailto:kunal@gmail.com" className="text-blue-500 hover:underline">kunal@gmail.com</a>. Follow us on social media for the latest updates and farming tips.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
