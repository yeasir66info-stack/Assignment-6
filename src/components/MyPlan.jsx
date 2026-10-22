'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useProductContext } from '@/context/ProductContext';

const MyPlanPage = () => {
    const [activeTab, setActiveTab] = useState('today');
    const { buildList, wishList, removeFromBuildList, removeFromWishList } = useProductContext();    
    const currentList = activeTab === 'today' ? buildList : wishList;
    const totalExercises = currentList.length;

    const totalMinutes = currentList.reduce((acc, item) => {
        const dur = item.duration || item.durationMinutes || "0";
        const mins = parseInt(dur, 10) || 0;
        return acc + mins;
    }, 0);

    const totalCalories = currentList.reduce((acc, item) => {
        const cal = item.caloriesBurned || item.calories || "0";
        const cals = parseInt(cal, 10) || 0;
        return acc + cals;
    }, 0);

    return (
        <div className="min-h-screen bg-zinc-950 text-white px-4 md:px-12 py-8">
            <div className="max-w-7xl mx-auto w-full space-y-8">

                <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-white">
                        MY PLAN
                    </h2>
                    <p className="text-zinc-400 text-xs sm:text-sm">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-6 shadow-xl">
                        <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Exercises</p>
                        <h2 className="text-4xl font-extrabold text-[#ccff00]">
                            {totalExercises}
                        </h2>
                    </div>
                    <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-6 shadow-xl">
                        <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Minutes</p>
                        <h2 className="text-4xl font-extrabold text-white">
                            {totalMinutes}
                        </h2>
                    </div>
                    <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-6 shadow-xl">
                        <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Calories</p>
                        <h2 className="text-4xl font-extrabold text-white">
                            {totalCalories}
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <div className="flex items-center bg-[#12141a] border border-zinc-800/80 p-1.5 rounded-xl">
                        <button
                            onClick={() => setActiveTab('today')}
                            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'today'
                                    ? 'bg-zinc-800 text-white shadow'
                                    : 'text-zinc-400 hover:text-white'
                                }`}
                        >
                            Today's Plan
                        </button>
                        <button
                            onClick={() => setActiveTab('saved')}
                            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'saved'
                                    ? 'bg-zinc-800 text-white shadow'
                                    : 'text-zinc-400 hover:text-white'
                                }`}
                        >
                            Saved
                        </button>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span>Sort By</span>
                        <button className="bg-[#12141a] border border-zinc-800/80 hover:border-zinc-700 text-white px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer">
                            Duration
                        </button>
                    </div>
                </div>

                <div className="w-full bg-[#12141a]/40 border-2 border-dashed border-zinc-800 rounded-3xl min-h-[400px] flex flex-col items-center justify-center p-6 text-center">
                    {currentList.length === 0 ? (
                        <div className="space-y-4 my-auto">
                            <div className="space-y-2">
                                <h3 className="text-xl sm:text-2xl font-extrabold tracking-wider uppercase text-white">
                                    NOTHING HERE YET
                                </h3>
                                <p className="text-zinc-400 text-xs sm:text-sm">
                                    Browse the library and add a lift to get today moving.
                                </p>
                            </div>
                            <Link
                                href="/"
                                className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl transition-all shadow-lg inline-block cursor-pointer tracking-wider"
                            >
                                Go to workouts
                            </Link>
                        </div>
                    ) : (
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            {currentList.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-4 flex flex-col justify-between gap-4 relative"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image || item.thumbnail || ''}
                                            alt={item.title || item.name}
                                            className="w-20 h-20 object-cover rounded-xl bg-zinc-900 flex-shrink-0"
                                        />
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-bold uppercase text-white">
                                                {item.title || item.name}
                                            </h4>
                                            <p className="text-xs text-zinc-400">
                                                {item.equipment || "Barbell, Bench"}
                                            </p>
                                            <div className="flex items-center gap-3 text-[11px] text-zinc-400 pt-1">
                                                <span>⏱️ {item.duration || item.durationMinutes || "25 min"}</span>
                                                <span>🔥 {item.caloriesBurned || item.calories || "180 kcal"}</span>
                                                <span>★ {item.rating || "4.8"}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 text-xs">
                                        <Link
                                            href={`/fitlog/${item.id}`}
                                            className="text-lime-400 hover:underline font-semibold"
                                        >
                                            View Details
                                        </Link>
                                        <div className="flex items-center gap-2">
                                            {activeTab === 'today' && (
                                                <button
                                                    onClick={() => removeFromBuildList(item.id)}
                                                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg font-medium text-[11px]"
                                                >
                                                    Mark as Done
                                                </button>
                                            )}
                                            <button
                                                onClick={() =>
                                                    activeTab === 'today'
                                                        ? removeFromBuildList(item.id)
                                                        : removeFromWishList(item.id)
                                                }
                                                className="text-zinc-500 hover:text-red-400 p-1 font-bold"
                                                title="Remove"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default MyPlanPage;