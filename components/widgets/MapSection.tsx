"use client"

import React from 'react';
import Container from '@/components/elements/Container';
import { FaLocationPin, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'motion/react';

const MapSection = () => {
    return (
        <section className='py-20 bg-white'>
            <Container>
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Location Info */}
                    <motion.div
                        initial={{
                            x: -100,
                            opacity: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            duration: 4,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        className="space-y-8"
                    >
                        <div>
                            <p className='text-sm lg:text-base text-primary font-semibold mb-2'>
                                Visit us
                            </p>
                            <h2 className='text-2xl lg:text-3xl font-bold text-tertiary'>
                                Find Us Here
                            </h2>
                            <p className='text-gray-600 mt-2'>
                                Come and worship with us at our church location. We'd love to meet you!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <FaLocationPin className='text-primary text-xl mt-1 flex-shrink-0' />
                                <div>
                                    <h3 className='font-semibold text-tertiary text-lg'>Address</h3>
                                    <p className='text-gray-600'>
                                        The old church building,<br />
                                        86 Newport Road<br />
                                        Cardiff CF24 1PU
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <FaClock className='text-primary text-xl mt-1 flex-shrink-0' />
                                <div>
                                    <h3 className='font-semibold text-tertiary text-lg'>Service Times</h3>
                                    <div className='text-gray-600 space-y-1'>
                                        <p>Youth Sunday: Every 3rd Sunday</p>
                                        <p>Bible Study: Wednesday 8-9pm</p>
                                        <p>Prayer Meeting: Friday 7-8pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <FaPhone className='text-primary text-xl mt-1 flex-shrink-0' />
                                <div>
                                    <h3 className='font-semibold text-tertiary text-lg'>Contact</h3>
                                    <div className='text-gray-600 space-y-1'>
                                        <p>+234 123 4567</p>
                                        <p>info@rccg.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            duration: 4,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.8234567890123!2d-3.1729!3d51.4816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1cb5f7d4e5e5%3A0x1234567890abcdef!2s86%20Newport%20Rd%2C%20Cardiff%20CF24%201PU%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="RCCG Youth Church Location"
                        />
                    </motion.div>
                </div>

                {/* Directions Button */}
                <motion.div
                    initial={{
                        y: 50,
                        opacity: 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: 4,
                        delay: 0.2,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    className="mt-10 text-center"
                >
                    <a 
                        href="https://www.google.com/maps/dir//86+Newport+Rd,+Cardiff+CF24+1PU,+UK" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
                    >
                        <FaLocationPin />
                        <span>Get Directions</span>
                    </a>
                </motion.div>
            </Container>
        </section>
    );
};

export default MapSection;