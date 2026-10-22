import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = product;

    return (
        <Link 
            href={`/fitlog/${id}`} 
            className="bg-[#12141a] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-zinc-700 transition-all group block"
        >
            <div className="relative w-full h-48 sm:h-56 bg-zinc-900 overflow-hidden">
                <img
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {muscleGroups && muscleGroups.map((group, index) => (
                            <span 
                                key={index} 
                                className="bg-[#ccff00] text-black text-[11px] font-extrabold px-2.5 py-1 rounded tracking-wider uppercase"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-white font-extrabold text-lg tracking-wide uppercase group-hover:text-lime-400 transition-colors">
                        {name}
                    </h3>

                    <p className="text-zinc-400 text-xs font-medium">
                        {equipment}
                    </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                    <span>{duration} min</span>
                    <span>🔥 {caloriesBurned} kcal</span>
                    <span className="text-white font-semibold">★ {rating}</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;