import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = ({ products }) => {
    return (
        <div className='container mx-auto px-4 py-12'>
            <div className='mb-8'>
                <h2 className='text-xl md:text-2xl font-extrabold tracking-wider text-white'>THE LIBRARY</h2>
                <p className='text-zinc-400 text-sm mt-1'>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllProducts;