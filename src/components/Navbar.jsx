'use client';
import React from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import { useProductContext } from '@/context/ProductContext';

const Navbar = () => {
    const { buildList, wishList } = useProductContext();
    const navItems = (
        <>
            <li>
                <NavLinks
                    href="/Workouts"
                    className="bg-zinc-800/80 text-lime-400 font-semibold px-5 py-2 rounded-full hover:bg-zinc-800 transition-all"
                >
                    Workouts
                </NavLinks>
            </li>
            <li>
                <NavLinks
                    href="/MyPlan"
                    className="text-zinc-400 hover:text-white font-medium px-4 py-2 transition-all"
                >
                    My Plan
                </NavLinks>
            </li>
        </>
    );

    return (
        <div className="navbar bg-zinc-950 text-white border-b border-zinc-900 px-4 md:px-12 py-3 flex justify-between items-center">

            <div className="navbar-start w-auto">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white p-0 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#12141a] border border-zinc-800 rounded-2xl z-20 mt-3 w-52 p-3 shadow-2xl space-y-2">
                        {navItems}
                    </ul>
                </div>

                <Link href="/Workouts" className="flex items-center gap-2 text-white hover:opacity-80 transition-all">
                    <span className="text-xl font-extrabold tracking-wider text-white">FITLOG</span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-2 text-sm">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end w-auto flex items-center gap-6 text-sm">
               
                <Link href="/MyPlan" className="flex items-center gap-2 font-medium text-zinc-300 hover:text-white transition-all cursor-pointer">
                    <span>Plan</span>
                    <span className="w-5 h-5 bg-lime-400 text-black text-xs font-bold rounded-full flex items-center justify-center">
                        {buildList.length}
                    </span>
                </Link>

                <Link href="/MyPlan" className="flex items-center gap-2 font-medium text-zinc-300 hover:text-white transition-all cursor-pointer">
                    <span>Saved</span>
                    <span className="w-5 h-5 border border-zinc-700 text-zinc-400 text-xs font-semibold rounded-full flex items-center justify-center">
                        {wishList.length}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
