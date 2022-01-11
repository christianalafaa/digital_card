import React from 'react';
import { FaGithub, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa/index.esm';

function Footer() {
    return (
        <div className='Footer'>
            <button className='btn'><FaTwitter /></button>
            <button className='btn'><FaFacebookF /></button>
            <button className='btn'><FaInstagram /></button>
            <button className='btn'><FaGithub /></button>
        </div>
    )
}

export default Footer
