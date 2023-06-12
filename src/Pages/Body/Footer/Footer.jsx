import React from 'react';
import './footer.css'

// react icons

import { AiFillStar, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLine, AiOutlineLinkedin, AiOutlineMessage, AiOutlineRight, AiOutlineRightSquare, AiOutlineSwapRight, AiOutlineTwitter } from 'react-icons/ai'

// image

import Vektor from '../../img/bacgroundXol.svg'
import Vektor2 from '../../img/Group 5728.svg'
import Men from '../../img/menImage.png'
import Logo from '../../img/logo1.svg'
function SecondEnd(props) {
    return (
        <div className='footer footer-top-section'>
            <div className="top-footer">
                <div className="text-footer-1">
                    <h1>What Our User Say
                        About Us</h1>
                    <p>A best and cheapest way of getting know learning to make a better tomorrow.</p>
                </div>
                <div className="vektor-left">
                    <img src={Vektor} alt="#" />
                </div>
                <div className="image-men">
                    <img src={Men} alt="#" />

                </div>
               
                <div className="vector-left-bottom">
                    <img src={Vektor2} alt="#" />
                </div>

                <div className="image-text-1">
                    <p>I'm a sales professional and I have been relying on Sales Axis to provide me with the best matching products. It's helped me close several deals and receive commissions effortlessly! I highly recommend this app!
                    </p>
                    <div className="line-text"> </div>
                    <div className="text-footer-bottom">
                        <div className="left-1">
                            <b>Daniel Sąsiadek</b>
                            <span>Sales Professional</span>
                        </div>
                        <div className='stars-div'>
                            <AiFillStar color='#FF8B00' />
                            <AiFillStar color='#FF8B00' />
                            <AiFillStar color='#FF8B00' />
                            <AiFillStar color='#FF8B00' />
                            <AiFillStar color='#E6E9EC' />
                        </div>
                    </div>
                </div>
                <div className="span">
                    <a  style={{ color: "#FF9C00" }} href="#">See All Feedback <AiOutlineSwapRight color='#FF9C00' /></a>
                </div>
            </div>

           

        </div>
    );
}

export default SecondEnd;