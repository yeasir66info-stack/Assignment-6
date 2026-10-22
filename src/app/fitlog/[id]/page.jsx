'use client';
import React, { use, useState } from 'react';
import { getSingleProduct } from '@/library/api';
import { useProductContext } from '@/context/ProductContext';

const DetailsPage = ({ params }) => {
    const resolvedParams = use(params);
    const id = resolvedParams?.id;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toastMessage, setToastMessage] = useState('');

    const { addToBuildList, addToWishList } = useProductContext();

    React.useEffect(() => {
        if (id) {
            getSingleProduct(id).then((rawData) => {
                const foundProduct = rawData?.data || rawData;
                setProduct(foundProduct);
                setLoading(false);
            }).catch(() => {
                setLoading(false);
            });
        }
    }, [id]);

    const triggerToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => {
            setToastMessage('');
        }, 3000);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
                <p className="text-zinc-400">Loading workout details...</p>
            </div>
        );
    }
    if (!product) {
        return (
            <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
                <p className="text-zinc-400">Workout not found.</p>
            </div>
        );
    }

    const title = product.title || product.name || "BARBELL BENCH PRESS";
    const description = product.description || "A compound press that builds chest thickness, triceps, and pressing power from a stable bench.";
    const image = product.image || product.thumbnail || product.img || "";
    const tags = product.muscleGroups || product.tags || ["Chest", "Arms"];
    const equipment = product.equipment || "Barbell, Bench";
    const difficulty = product.difficulty || "Intermediate";
    const sets = product.sets || "4";
    const reps = product.reps || "6-8";
    const duration = product.duration || product.durationMinutes || "25 min";
    const calories = product.caloriesBurned || product.calories || "180 kcal";
    const rating = product.rating || "4.8";
    
    const instructions = product.instructions || [
        "Lie on the bench with eyes under the bar and feet planted.",
        "Unrack with locked elbows and lower the bar to mid-chest.",
        "Press up in a slight arc until elbows lock without bouncing.",
        "Keep shoulder blades pinched and a natural arch in the back."
    ];
    const handleAddToTodayPlan = () => {
        addToBuildList(product);
        triggerToast("Added to today's plan");
    };

    const handleSaveForLater = () => {
        addToWishList(product);
        triggerToast("Saved for later");
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white px-4 md:px-12 py-10 relative">
            
            {toastMessage && (
                <div className="fixed bottom-8 right-8 bg-lime-400 text-black font-bold px-5 py-3 rounded-xl shadow-2xl z-50 transition-all animate-bounce">
                    {toastMessage}
                </div>
            )}

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                
                <div className="w-full bg-[#12141a] border border-zinc-800/80 rounded-3xl p-4 flex justify-center items-center shadow-2xl">
                    {image ? (
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-[400px] sm:h-[550px] object-cover rounded-2xl"
                        />
                    ) : (
                        <div className="w-full h-[400px] sm:h-[550px] bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-500">
                            Image Not Available
                        </div>
                    )}
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 uppercase">
                            {title}
                        </h1>
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                            {description}
                        </p>
                    </div>
                    
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded uppercase tracking-wider"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                   
                    <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl overflow-hidden divide-y divide-zinc-800/60 text-sm">
                        <div className="flex justify-between px-6 py-4">
                            <span className="text-zinc-400 font-medium">EQUIPMENT</span>
                            <span className="font-semibold text-white">{equipment}</span>
                        </div>
                        <div className="flex justify-between px-6 py-4">
                            <span className="text-zinc-400 font-medium">DIFFICULTY</span>
                            <span className="font-semibold text-white">{difficulty}</span>
                        </div>
                        <div className="flex justify-between px-6 py-4">
                            <span className="text-zinc-400 font-medium">SETS</span>
                            <span className="font-semibold text-white">{sets}</span>
                        </div>
                        <div className="flex justify-between px-6 py-4">
                            <span className="text-zinc-400 font-medium">REPS</span>
                            <span className="font-semibold text-white">{reps}</span>
                        </div>
                        <div className="flex justify-between px-6 py-4">
                            <span className="text-zinc-400 font-medium">DURATION</span>
                            <span className="font-semibold text-white">{duration}</span>
                        </div>
                        <div className="flex justify-between px-6 py-4">
                            <span className="text-zinc-400 font-medium">CALORIES</span>
                            <span className="font-semibold text-white">{calories}</span>
                        </div>
                        <div className="flex justify-between px-6 py-4">
                            <span className="text-zinc-400 font-medium">RATING</span>
                            <span className="font-semibold text-white">★ {rating}</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-white">INSTRUCTIONS</h3>
                        <ol className="list-decimal list-inside space-y-2 text-zinc-400 text-sm leading-relaxed">
                            {Array.isArray(instructions) ? (
                                instructions.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                ))
                            ) : (
                                <li>{instructions}</li>
                            )}
                        </ol>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button 
                            onClick={handleAddToTodayPlan}
                            className="flex-1 bg-lime-400 hover:bg-lime-500 text-black font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm cursor-pointer"
                        >
                            <span>📋 Add to today's plan</span>
                        </button>
                        <button 
                            onClick={handleSaveForLater}
                            className="flex-1 bg-transparent hover:bg-zinc-900 text-white border border-zinc-700 font-semibold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                        >
                            <span>🔖 Save for later</span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DetailsPage;