import React from 'react';
import Image from '../Images/Profile-Photo.jpg';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa/index.esm';

function Info() {
    return (
        <div>
            <img src={Image} alt='Profile' />
            <h1>Christian Alafaa</h1>
            <h4 className='Role'>Frontend Developer</h4>
            <p><small>chrisalafaa.com</small></p>
            <button className='Email'><FaEnvelope /> Email</button>
            <button className='LinkedIn'><FaLinkedin /> LinkedIn</button>
        </div>
    )
}

export default Info
