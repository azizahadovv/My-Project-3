import React, { useRef, useState } from "react";
import './Home.css'
import Foooter from "../Body/Footer/Foooter";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



// Icons
import { AiFillMoneyCollect, AiOutlineCheck, AiOutlineRocket } from 'react-icons/ai'
import { FaCheck, FaTicketAlt } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'


// photo 


import Logo1 from '../img/logo1.svg'
import Bacg2 from '../img/bacg2.png'
import Bacg1 from '../img/bacg1.svg'

import Image2 from '../img/card1.svg'
import Body from "../Body/Body";

export default function Home() {

    const [Menu, setMenu] = useState(false)




    return (
        <>
            <div className="fon">

                <div className="container ">
                    <div className="content ">
                        <div className="navbar content-1">
                            <img src={Logo1} alt="#" />
                            <div className="Log-in-btn ">
                                <button className="button is-outline">Log in</button>
                                <button className="button ml-4 is-info">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="hero container" >
                    <div className="bac-img-2">
                        <img className="image img-1" src={Bacg2} alt="" />
                        <img className="image img-2" src={Bacg1} alt="#" />
                        <div className="text-div">
                            <div className="noname-dive">
                                <strong className="strong" >TRENDING PRODUCT</strong> <br />
                                <b>Business Network for Logistics</b> <br />
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>

                            <div className="buttons-div">
                                <button >Product Commission:  12%</button>
                                <button className="button2">Project Size Range: 500K USD</button>
                            </div>
                        </div>


                    </div>


                    <div className="section">
                        <h1 className="section-hed-text " >Top Products by Leads Industries</h1>

                        <div className="ded-card">

                            <div className="card">

                                <div className="card-image">
                                    <img className="image" src={Image2} alt="Placeholder image" />
                                </div>

                                <div className="card-content">
                                    <div className="top-text">
                                        <p>Consulting</p>
                                        <b>Southeast Asia market research and management consulting services</b>
                                    </div>
                                    <hr className="line" />
                                    <div className="card-price">
                                        <div className="top-price">
                                            <p className="child-t-1"><FaTicketAlt /> Commission </p>
                                            <span className="child-t-2"><p>15%</p></span>
                                        </div>
                                        <div className="bottom-price">
                                            <span className="child-1"><MdAttachMoney className="m-0" /> Project size range:</span>
                                            <span className="child-2">$50K+</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="card">

                                <div className="card-image">
                                    <img className="image" src={Image2} alt="Placeholder image" />
                                </div>

                                <div className="card-content">
                                    <div className="top-text">
                                        <p>Consulting</p>
                                        <b>Southeast Asia market research and management consulting services</b>
                                    </div>
                                    <hr className="line" />
                                    <div className="card-price">
                                        <div className="top-price">
                                            <p className="child-t-1"><FaTicketAlt /> Commission </p>
                                            <span className="child-t-2"><p>15%</p></span>
                                        </div>
                                        <div className="bottom-price">
                                            <span className="child-1"><MdAttachMoney className="m-0" /> Project size range:</span>
                                            <span className="child-2">$50K+</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="card">

                                <div className="card-image">
                                    <img className="image" src={Image2} alt="Placeholder image" />
                                </div>

                                <div className="card-content">
                                    <div className="top-text">
                                        <p>Consulting</p>
                                        <b>Southeast Asia market research and management consulting services</b>
                                    </div>
                                    <hr className="line" />
                                    <div className="card-price">
                                        <div className="top-price">
                                            <p className="child-t-1"><FaTicketAlt /> Commission </p>
                                            <span className="child-t-2"><p>15%</p></span>
                                        </div>
                                        <div className="bottom-price">
                                            <span className="child-1"><MdAttachMoney className="m-0" /> Project size range:</span>
                                            <span className="child-2">$50K+</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card-slider">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                            >
                                <SwiperSlide><div className="card">

                                    <div className="card-image">
                                        <img className="image" src={Image2} alt="Placeholder image" />
                                    </div>

                                    <div className="card-content">
                                        <div className="top-text">
                                            <p>Consulting</p>
                                            <b>Southeast Asia market research and management consulting services</b>
                                        </div>
                                        <hr className="line" />
                                        <div className="card-price">
                                            <div className="top-price">
                                                <p className="child-t-1"><FaTicketAlt /> Commission </p>
                                                <span className="child-t-2"><p>15%</p></span>
                                            </div>
                                            <div className="bottom-price">
                                                <span className="child-1"><MdAttachMoney className="m-0" /> Project size range:</span>
                                                <span className="child-2">$50K+</span>
                                            </div>
                                        </div>

                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="card">

                                    <div className="card-image">
                                        <img className="image" src={Image2} alt="Placeholder image" />
                                    </div>

                                    <div className="card-content">
                                        <div className="top-text">
                                            <p>Consulting</p>
                                            <b>Southeast Asia market research and management consulting services</b>
                                        </div>
                                        <hr className="line" />
                                        <div className="card-price">
                                            <div className="top-price">
                                                <p className="child-t-1"><FaTicketAlt /> Commission </p>
                                                <span className="child-t-2"><p>15%</p></span>
                                            </div>
                                            <div className="bottom-price">
                                                <span className="child-1"><MdAttachMoney className="m-0" /> Project size range:</span>
                                                <span className="child-2">$50K+</span>
                                            </div>
                                        </div>

                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="card">

                                    <div className="card-image">
                                        <img className="image" src={Image2} alt="Placeholder image" />
                                    </div>

                                    <div className="card-content">
                                        <div className="top-text">
                                            <p>Consulting</p>
                                            <b>Southeast Asia market research and management consulting services</b>
                                        </div>
                                        <hr className="line" />
                                        <div className="card-price">
                                            <div className="top-price">
                                                <p className="child-t-1"><FaTicketAlt /> Commission </p>
                                                <span className="child-t-2"><p>15%</p></span>
                                            </div>
                                            <div className="bottom-price">
                                                <span className="child-1"><MdAttachMoney className="m-0" /> Project size range:</span>
                                                <span className="child-2">$50K+</span>
                                            </div>
                                        </div>

                                    </div>
                                </div></SwiperSlide>


                            </Swiper>
                        </div>
                    </div>



                    <Body />
                </div>




            </div>
            <Foooter/>
        </>

    )


};

















