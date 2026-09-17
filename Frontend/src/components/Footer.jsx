import React from 'react'

function Footer() {
  return (
    <div>
        <hr />
      <footer className="footer footer-center text-base-content rounded p-10 bg-slate-50 dark:bg-slate-900 dark:text-gray-300">
        <nav className="grid grid-flow-col gap-6 font-medium">
          <a href="/#advisor-agent" className="link link-hover hover:text-green-600">Soil Advisor</a>
          <a href="/course" className="link link-hover hover:text-green-600">Soil Directory</a>
          <a href="/aboutus" className="link link-hover hover:text-green-600">About Us</a>
          <a href="/contactus" className="link link-hover hover:text-green-600">Contact</a>
        </nav>
        <aside>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Copyright © {new Date().getFullYear()} - All rights reserved by Soil Farming Agent
          </p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
