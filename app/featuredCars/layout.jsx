import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

const Layout = ({ children }) => {
    return (
        <>
            {children}
            <div className='d-flex justify-content-center align-items-center '>
                <button className='cart_btn bg-primary'>
                    My Cart <br /> <FaCartShopping size={20} className='my-2 text-bg-danger' />
                </button>
            </div>
        </>
    );
}

export default Layout;
