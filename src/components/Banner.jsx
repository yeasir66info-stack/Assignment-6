import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="hero bg-zinc-950 min-h-[85vh] px-4 py-8 md:px-8">

            <div className="hero-content bg-[#12141a] border border-zinc-800/80 rounded-2xl p-6 sm:p-10 md:p-16 w-full max-w-7xl flex-col lg:flex-row-reverse justify-between items-center shadow-2xl">


                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
                    <Image
                        src="/banner.png"
                        alt="Workout hero component"
                        width={450}
                        height={450}
                        className="w-full max-w-[280px] sm:max-w-sm md:max-w-md object-contain"
                        priority
                        />
                   </div>
                  
    


                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-left">
                    <span className="text-yellow-400 font-bold tracking-widest text-xs sm:text-sm uppercase block">
                        Workout Library
                    </span>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight sm:leading-none">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                    </p>

                    <div className="pt-2">
                        <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-bold border-none px-6 sm:px-8 py-3 rounded-xl transition-all shadow-lg text-sm sm:text-base">
                            BROWSE WORKOUTS
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;