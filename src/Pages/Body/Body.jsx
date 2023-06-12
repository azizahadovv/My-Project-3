import React from 'react';
import './body.css'
import SecondEnd from './Footer/Footer';

// swiper slider
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Body(props) {
    return (
        <div className='container w-100 mt-5 '>
            <h2 className='title title-card'>Top Successful Type of Leads</h2>
            <div className="content-box-1">
                <div className="second-card">
                    <div className="left-card">
                        <h3>Manufacturing execution systems (Mes) </h3>
                        <span>Operation Director / COO</span>
                        <p>Do you have any leads match the same position? Lets connect and earn commission.</p>
                    </div>
                    <div className="center-box">
                        <h1 style={{ color: '#28c25d', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>27% </h1>
                        <p style={{
                            color: '#1A1D1F',
                            fontSize: '14px',
                            opacity: 0.6,
                        }} > Conversion rate</p>
                    </div>
                    <div className="center-box-2">
                        <h1 style={{ color: '#2A85FF', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>$10K</h1>
                        <p style={{
                            color: '#1A1D1F',
                            fontSize: '14px',
                            opacity: 0.6,
                        }} >Average Commission </p>
                    </div>
                </div>
                <div className="second-card">
                    <div className="left-card">
                        <h3>Fieldglass Contingent Workforce Management </h3>
                        <span>HR Director / COO </span>
                        <p>Do you have any leads match the same position? Lets connect and earn commission.</p>
                    </div>
                    <div className="center-box">
                        <h1 style={{ color: '#28c25d', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>19% </h1>
                        <p style={{
                            color: '#1A1D1F',
                            fontSize: '14px',
                            opacity: 0.6,
                        }} > Conversion rate</p>
                    </div>
                    <div className="center-box-2">
                        <h1 style={{ color: '#2A85FF', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>$14K</h1>
                        <p style={{
                            color: '#1A1D1F',
                            fontSize: '14px',
                            opacity: 0.6,
                        }} >Average Commission </p>
                    </div>
                </div>
                <div className="second-card">
                    <div className="left-card">
                        <h3>Enterprise Resource Planning (ERP) </h3>
                        <span>Business Owner / CEO / COO </span>
                        <p>Do you have any leads match the same position? Lets connect and earn commission.</p>
                    </div>
                    <div className="center-box">
                        <h1 style={{ color: '#28c25d', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>31% </h1>
                        <p style={{
                            color: '#1A1D1F',
                            fontSize: '14px',
                            opacity: 0.6,
                        }} > Conversion rate</p>
                    </div>
                    <div className="center-box-2">
                        <h1 style={{ color: '#2A85FF', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>$50K</h1>
                        <p style={{
                            color: '#1A1D1F',
                            fontSize: '14px',
                            opacity: 0.6,
                        }} >Average Commission </p>
                    </div>
                </div>

                <div className="second-card">
                    <div className="left-card">
                        <h3 className='no-width'>Wholesale Consumer Goods: Personal Protectionn Equipment</h3>
                        <span>Procurement Director / Product Manager </span>
                        <p>Do you have any leads match the same position? Lets connect and earn commission.</p>
                    </div>
                    <div className="center-box">
                        <h1 style={{ color: '#28c25d', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>19% </h1>
                        <p style={{
                            color: '#1A1D1F',
                            fontSize: '14px',
                            opacity: 0.6,
                        }} > Conversion rate</p>
                    </div>
                    <div className="center-box-2">
                        <h1 style={{ color: '#2A85FF', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>$10K</h1>
                        <p style={{
                            color: '#1A1D1F',
                            fontSize: '14px',
                            opacity: 0.6,
                        }} >Average Commission </p>
                    </div>
                </div>

            </div>

            <div className="content-slider-page">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                >
                    <SwiperSlide> <div className="second-card">

                        <div className="fot">

                            <div className="hed">
                                <div className="left-card">
                                    <h3 className='no-width'>Fieldglass Contingent Workforce Management</h3>
                                    <span>HR Director / COO </span>
                                    <p>Do you have any leads match the same position? Lets connect and earn commission. </p>
                                </div>
                            </div>


                            <div className="fut">
                                <div className="center-box">
                                    <h1 style={{ color: '#28c25d', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>19% </h1>
                                    <p style={{
                                        color: '#1A1D1F',
                                        fontSize: '14px',
                                        opacity: 0.6,
                                    }} > Conversion rate</p>
                                </div>
                                <div className="center-box-2">
                                    <h1 style={{ color: '#2A85FF', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>$10K</h1>
                                    <p style={{
                                        color: '#1A1D1F',
                                        fontSize: '14px',
                                        opacity: 0.6,
                                    }} >Average Commission </p>
                                </div>
                            </div>

                        </div>



                    </div></SwiperSlide>
                    <SwiperSlide> <div className="second-card">

                        <div className="fot">

                            <div className="hed">
                                <div className="left-card">
                                    <h3 className='no-width'>Fieldglass Contingent Workforce Management</h3>
                                    <span>HR Director / COO </span>
                                    <p>Do you have any leads match the same position? Lets connect and earn commission. </p>
                                </div>
                            </div>


                            <div className="fut">
                                <div className="center-box">
                                    <h1 style={{ color: '#28c25d', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>19% </h1>
                                    <p style={{
                                        color: '#1A1D1F',
                                        fontSize: '14px',
                                        opacity: 0.6,
                                    }} > Conversion rate</p>
                                </div>
                                <div className="center-box-2">
                                    <h1 style={{ color: '#2A85FF', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>$10K</h1>
                                    <p style={{
                                        color: '#1A1D1F',
                                        fontSize: '14px',
                                        opacity: 0.6,
                                    }} >Average Commission </p>
                                </div>
                            </div>

                        </div>



                    </div></SwiperSlide>
                    <SwiperSlide> <div className="second-card">

                        <div className="fot">

                            <div className="hed">
                                <div className="left-card">
                                    <h3 className='no-width'>Fieldglass Contingent Workforce Management</h3>
                                    <span>HR Director / COO </span>
                                    <p>Do you have any leads match the same position? Lets connect and earn commission. </p>
                                </div>
                            </div>


                            <div className="fut">
                                <div className="center-box">
                                    <h1 style={{ color: '#28c25d', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>19% </h1>
                                    <p style={{
                                        color: '#1A1D1F',
                                        fontSize: '14px',
                                        opacity: 0.6,
                                    }} > Conversion rate</p>
                                </div>
                                <div className="center-box-2">
                                    <h1 style={{ color: '#2A85FF', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>$10K</h1>
                                    <p style={{
                                        color: '#1A1D1F',
                                        fontSize: '14px',
                                        opacity: 0.6,
                                    }} >Average Commission </p>
                                </div>
                            </div>

                        </div>



                    </div></SwiperSlide>
                    <SwiperSlide> <div className="second-card">

                        <div className="fot">

                            <div className="hed">
                                <div className="left-card">
                                    <h3 className='no-width'>Fieldglass Contingent Workforce Management</h3>
                                    <span>HR Director / COO </span>
                                    <p>Do you have any leads match the same position? Lets connect and earn commission. </p>
                                </div>
                            </div>


                            <div className="fut">
                                <div className="center-box">
                                    <h1 style={{ color: '#28c25d', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>19% </h1>
                                    <p style={{
                                        color: '#1A1D1F',
                                        fontSize: '14px',
                                        opacity: 0.6,
                                    }} > Conversion rate</p>
                                </div>
                                <div className="center-box-2">
                                    <h1 style={{ color: '#2A85FF', fontSize: '20px', lineHeight: "130%", fontWeight: 700, fontFamily: "Inter" }} className='title title-box'>$10K</h1>
                                    <p style={{
                                        color: '#1A1D1F',
                                        fontSize: '14px',
                                        opacity: 0.6,
                                    }} >Average Commission </p>
                                </div>
                            </div>

                        </div>



                    </div></SwiperSlide>


                </Swiper>
            </div>

            <div className="section-text-info">
                <section className='section-cards-info'>
                    <h1 >Who We Are</h1>
                    <p>Sales Axis is the platform for solution providers who are looking to connect with more front end sales & consultants. And it's for front end sales who are looking for new solution to sell. Simply fill out the required information, and you'll get matched with relevant solution providers.</p>
                </section>
            </div>

            <SecondEnd />

        </div >
    );
}

export default Body;