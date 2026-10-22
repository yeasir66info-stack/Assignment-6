"use client";
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import { ProductProvider } from '@/context/ProductContext';

const ClientLayout = ({children}) => {
    return (
        <div>
                
       <ProductProvider>
        <nav >
        <Navbar />
       </nav>
       
        <main className="min-h-[60vh]">
          {children}
        </main>
         
        <Footer></Footer>
        <Toaster />
        
       </ProductProvider>
        </div>
    );
};

export default ClientLayout;