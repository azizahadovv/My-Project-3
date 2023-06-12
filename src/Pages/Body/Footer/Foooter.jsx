import React from 'react';
import './foooter.css'

// react icons

import { AiFillStar, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLine, AiOutlineLinkedin, AiOutlineMessage, AiOutlineRight, AiOutlineRightSquare, AiOutlineSwapRight, AiOutlineTwitter } from 'react-icons/ai'

// image

import Men from '../../img/menImage.png'
import Logo from '../../img/logo1.svg'
function Foooter(props) {
       return (
              <div style={{width:'100%'}}>
                     <div className="footer-bottom ">
                            <div className="top-footer-2 container">
                                   <div className="section-2">
                                          <div className="left-2">
                                                 <img className="images" src={Logo} alt="#" />
                                                 <span>Our webapp, Sales Axis, is the platform for solution providers who are looking to connect with more front end sales & consultants.</span>
                                          </div>
                                          <div className="left-pages">
                                                 <h4>Page’s</h4>
                                                 <p><a href="#">Product View</a></p>
                                                 <p><a href="#">User dashboard</a></p>
                                                 <p><a href="#">User's Lead page</a></p>
                                          </div>
                                          <div className="left-pages">
                                                 <h4>About</h4>
                                                 <p><a href="#">Our Story</a></p>
                                                 <p><a href="#">Privacy policy</a></p>
                                          </div>
                                          <div className="left-contact">
                                                 <h4>Subscribe to our
                                                        newsletter</h4>
                                                 <form className='forma'>
                                                        <input placeholder='Email address' type="text" />
                                                        <button style={{
                                                               background: "#2A85FF", width: '50px', height: '50px',
                                                               border: "none",
                                                               borderRadius: '8px 8px 0px 0px'
                                                        }} className='button '><AiOutlineRight color='#f3f3f3' /></button>
                                                 </form>
                                                 <div className="icons">
                                                        <span><a className='icons-btn' href="#"><AiOutlineFacebook /> </a></span>
                                                        <span><a className='icons-btn' href="#"><AiOutlineInstagram /> </a></span>
                                                        <span><a className='icons-btn' href="#"><AiOutlineTwitter /> </a></span>
                                                        <span><a className='icons-btn' href="#"><AiOutlineLinkedin /> </a></span>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            <div className="bottom-footer-2">
                                   <p>All right @ SEALES AXIS </p>
                            </div>
                     </div>
              </div>
       );
}

export default Foooter;
