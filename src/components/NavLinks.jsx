"use client"
import  Link  from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href,children,className}) => {
    const pathName = usePathname();
    const isActive = href === '/' ? pathName === '/' : pathName.startsWith(href);

    return (

        <Link href={href} className={`${className} ${isActive?"text-primary":""} `}>
        {children}
        </Link>

    );
};

export default NavLinks; 
