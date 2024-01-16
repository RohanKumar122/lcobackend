import React from 'react'
import "./footer.css"
import { FaFacebookSquare,FaTwitterSquare, FaInstagramSquare,FaYoutubeSquare,FaLinkedin } from 'react-icons/fa';
const footer = () => {
    return (
        <div>
            <div className='FooterContainer'>
                <div className='FBox'>
                    <div className='Fpro'>
                    <div className='followBox'>
                    <h1>    FOLLOW US </h1>
                   <div >
                   <FaFacebookSquare  className='icons'/>
                    <FaTwitterSquare  className='icons'/>
                    <FaInstagramSquare  className='icons'/>
                    <FaYoutubeSquare className='icons'/>
                    <FaLinkedin className='icons'/>
                   </div>
                        <div>About Dainik Jagran inext</div>
                    </div>
                    <div className='FContent'>
                    Since its inception in 2006, Inext has evolved to keep pace with its ever changing,
                     dynamic and quirky readers, who in turn have always chosen inext as their favorite newspaper.
                      With an interesting mix of serious and fun content, vivid photographs and engaging features,
                       inext has surged ahead to carve a niche for itself in the reading routine of youngsters.
                        The last 5 years have seen inext winning several national and international awards,
                         hosting several popular events like Bikeathon, Fresh N' Crazy, Health Meter, Teacher Meter,
                          etc. and producing some path-breaking and memorable cover stories for our readers.
                    </div>
                    </div>
                    <div className='privacyBox'>
                        <div>Terms & Conditions
Security</div>
<div className='refund'>Cancellation / Refund Policy
Privacy Policy</div>
                    </div>
                    
                </div>
                <div className='CopyRightSec'>
                        <div className='CRBox'>
                        <div>Copyright © Jagran Prakashan Ltd.</div>
<div>Design & Developed by Kraftors Web Solution Pvt. Ltd.</div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default footer