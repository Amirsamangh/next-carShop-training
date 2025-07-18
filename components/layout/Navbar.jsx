'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className="top-area">
            <div className="header-area">
                <nav className="navbar navbar-default bootsnav bg_navbar navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                    <div className="container">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="index.html">carvilla<span></span></a>

                        </div>
                        <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className={`${pathname == '/' ? 'active' : ''}`}><Link href="/">home</Link></li>
                                <li className={`${pathname == '/services' ? 'active' : ''}`}><Link href="/services">services</Link></li>
                                <li className={`${pathname == '/featuredCars' ? 'active' : ''}`}><Link href="/featuredCars">featured cars</Link></li>
                                <li className={`${pathname == '/newCars' ? 'active' : ''}`}><Link href="#newCars">new cars</Link></li>
                                <li className={`${pathname == '/brands' ? 'active' : ''}`}><Link href="#brands">brands</Link></li>
                                <li className={`${pathname == '/contact' ? 'active' : ''}`}><Link href="#contact">contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="clearfix"></div>

            </div>
        </div>
    );
}

export default Navbar;
