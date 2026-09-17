// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';

function Navbar() {
    const [authUser] = useAuth(); 
    const [sticky, setSticky] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = (
        <>
            <li>
                <Link to="/" className="font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Home
                </Link>
            </li>
            <li>
                <a href="/#advisor-agent" className="font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Soil Advisor
                </a>
            </li>
            <li>
                <Link to="/course" className="font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Soil Directory
                </Link>
            </li>
            <li>
                <Link to="/aboutus" className="font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    About Us
                </Link>
            </li>
            <li>
                <Link to="/contactus" className="font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                    Contact Us
                </Link>
            </li>
        </>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            sticky 
                ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-200/60 dark:border-slate-800" 
                : "bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-b border-transparent"
        }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    
                    {/* Brand Logo & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <div className="dropdown lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl z-[1] mt-3 w-52 p-3 shadow-xl border border-slate-100 dark:border-slate-700">
                                {navItems}
                            </ul>
                        </div>

                        <Link to="/" className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 group">
                            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
                                🌱
                            </span>
                            <span className="tracking-tight">
                                Soil <span className="text-emerald-600 dark:text-emerald-400">Agent</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center">
                        <ul className="menu menu-horizontal px-1 gap-1 text-slate-700 dark:text-slate-200 font-medium">
                            {navItems}
                        </ul>
                    </nav>

                    {/* Right Actions: Theme Toggle & Login/Logout */}
                    <div className="flex items-center gap-3">
                        {/* Dark Mode Toggle */}
                        <button
                            type="button"
                            aria-label="Toggle dark theme"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="btn btn-ghost btn-circle btn-sm text-slate-600 dark:text-slate-300"
                        >
                            {theme === "dark" ? (
                                <svg className="h-5 w-5 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5 fill-current text-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            )}
                        </button>

                        {/* User Auth Button */}
                        {authUser ? (
                            <Logout />
                        ) : (
                            <div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const modal = document.getElementById("my_modal_2");
                                        if (modal && typeof modal.showModal === "function") {
                                            modal.showModal();
                                        }
                                    }}
                                    className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 rounded-xl border-none shadow-sm transition-all duration-200"
                                >
                                    Login
                                </button>
                                <Login />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
