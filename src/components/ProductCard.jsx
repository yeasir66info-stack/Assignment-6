import React from 'react';

const ProductCard = ({ product }) => {
   
    const { name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = product;

    return (
        <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-zinc-700 transition-all">
            
            <div className="relative w-full h-48 sm:h-56 bg-zinc-900">
                <img
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover"
                />
            </div>

           
            <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-3">
                    
                    <div className="flex flex-wrap gap-2">
                        {muscleGroups.map((group, index) => (
                            <span 
                                key={index} 
                                className="bg-[#ccff00] text-black text-[11px] font-extrabold px-2.5 py-1 rounded tracking-wider uppercase"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    
                    <h3 className="text-white font-extrabold text-lg tracking-wide uppercase">
                        {name}
                    </h3>

                    
                    <p className="text-zinc-400 text-xs font-medium">
                        {equipment}
                    </p>
                </div>

                
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="12" r="9" strokeWidth="2" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5l3 3" />
                        </svg>
                        <span>{duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <span className="text-zinc-300">🔥</span>
                        <span>{caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <span className="text-amber-400">★</span>
                        <span className="text-white font-semibold">{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;