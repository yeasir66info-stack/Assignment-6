import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content p-6 flex flex-col md:flex-row items-center justify-between border-t border-zinc-800">
            
            <div className="flex items-center gap-2">
                
                <Image
                    src="/logo.png"
                    alt="FitLog Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                />
                <span className="text-xl font-bold tracking-wider text-white-400">
                    FITLOG
                </span>
            </div>

            <div className="text-sm text-zinc-400">
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    );
};

export default Footer;