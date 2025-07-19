'use client'

import React, { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const Template = ({ children }) => {
    const [input, setInput] = useState('default')
    return (
        <div>
            {children}
            <div className='d-flex justify-content-center align-items-center '>
                <button className='cart_btn bg-primary'>
                    {input} <br /> <FaCartShopping size={20} className='my-2 text-bg-danger' />
                </button>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='cart_input' />
            </div>
        </div>
    );
}

export default Template;
