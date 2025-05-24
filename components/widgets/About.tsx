"use client"

import React from 'react';
import Container from '@/components/elements/Container';
import Image from 'next/image';
import { motion } from 'motion/react';

const About = () => {
    return (
        <section id='about' className='bg-[#f2f4ff] py-30'>
            <Container>
                <div className="h-full grid lg:grid-cols-2 space-y-6 lg:space-y-0 lg:gap-4">
                    <div>
                        <Image src="/about-us.jpg" alt="about us" width={600} height={400} />
                        <div className=' bg-white py-10 px-8'>
                            <motion.h3
                                initial={{
                                    y: -100,
                                    opacity: 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    // damping: 70,
                                    duration: 4,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1
                                }}
                                className='font-semibold text-tertiary text-2xl mb-2'
                            >
                                About us
                            </motion.h3>
                            <motion.p
                                initial={{
                                    y: -100,
                                    opacity: 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    // damping: 70,
                                    duration: 4,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1
                                }}
                            >
                                Our community exists to equip young people with the Word of God, empower them to walk in their divine purpose, and provide a safe space for growth, mentorship, worship, and authentic connection. We are passionate about helping youths develop strong Christian values while using their gifts and voices to transform lives and influence culture.
                            </motion.p>
                        </div>
                    </div>

                    <div>
                        <Image src="/about-us.jpg" alt="about us" width={600} height={400} />
                        <div className='bg-white py-10 px-8'>
                            <motion.h3 initial={{
                                y: -100,
                                opacity: 0,
                            }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    // damping: 70,
                                    duration: 4,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1
                                }} className='font-semibold text-tertiary text-2xl mb-2'>Our Mission</motion.h3>
                            <motion.p
                                initial={{
                                    y: -100,
                                    opacity: 0,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    // damping: 70,
                                    duration: 4,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1
                                }}>
                                Our mission is to disciple young people through sound biblical teaching and intentional mentorship, creating spaces where they can encounter Jesus and grow in intimacy with Him. We are committed to equipping youths to lead with excellence in ministry, the marketplace, and the community. By fostering authentic relationships that encourage accountability, love, and service, we aim to raise visionary leaders dedicated to revival and the expansion of God's Kingdom in the UK and beyond.
                            </motion.p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        // damping: 70,
                        duration: 4,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    className="mt-20">
                    <div className='relative'>
                        <Image src="/youth-bg.jpg" alt="youth gathering" width={1300} height={768} />

                        <div className='absolute bottom-0 left-0 bg-white z-20 lg:w-[600px] h-[300px]'>
                            <div className='flex items-center justify-center h-full'>
                                <div className='px-10'>
                                    <h3 className='font-semibold text-tertiary text-2xl mb-2'>Our Vision</h3>
                                    <p>
                                        To raise a generation of kingdom-minded youth who know God deeply, love radically, serve sacrificially, and lead boldly in their spheres of influence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export default About