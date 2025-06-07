"use client"

import React from 'react';
import Container from '@/components/elements/Container';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ImPointRight } from 'react-icons/im';
import { TiArrowRight } from 'react-icons/ti';


const mission = [
    {
        id: 1,
        details: `To make heaven`,
    },
    {
        id: 2,
        details: `To take as many people as possible with you to heaven`,
    },
    {
        id: 3,
        details: `To preach throughout the world and plant churches`,
    }
]

const vision = [
    {
        id: 1,
        details: `To reach every nation for the Lord Jesus Christ.`,
    },
    {
        id: 2,
        details: `To see a member of RCCG in every family of all nations.`,
    },
    {
        id: 3,
        details: `To plant churches within five(5) minutes walking distance in
        developing countries and five(5) minutes driving distance in developed
        countries`,
    },
    {
        id: 4,
        details: `To grow to 40 million members worldwide by 2032`
    }
]

const About = () => {
    return (
        <section id='about-us' className='bg-[#f2f4ff] pt-30 mb-30'>
            <Container>
                <div className="h-full grid lg:grid-cols-2 space-y-6 lg:space-y-0 lg:gap-4">
                    <div>
                        <Image src="/rccg-youth.jpg" alt="about us" className='w-[532px] h-[354px] object-cover' width={532} height={354} />
                        <div className='h-fit bg-white py-10 px-8'>
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
                        <Image src="/about-us.jpg" alt="about us" className='w-[532px] h-[354px]' width={532} height={354} />
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
                            <motion.ul
                            >
                                <p className="mb-2">
                                    To achieve spiritual salvation and holiness through
                                    various methods including evangelism, church planting,
                                    and community engagement
                                </p>
                                {
                                    mission.map((item) => (
                                        <motion.li
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
                                            key={item.id}
                                            className="flex items-center space-x-2"
                                        >
                                            <TiArrowRight className='text-primary' />
                                            <span>{item.details}</span>
                                        </motion.li>
                                    ))
                                }
                            </motion.ul>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-20">
                    <div className='relative'>
                        <Image src="/gallery-4.jpg" alt="youth gathering" width={1300} height={768} />

                        <div className='absolute bottom-0 left-0 bg-white z-20 lg:w-[600px] h-[300px]'>
                            <div className='flex items-center justify-center h-full'>
                                <div className='px-10'>
                                    <h3 className='font-semibold text-tertiary text-2xl mb-2'>Our Vision</h3>
                                    <motion.ul>
                                        <p className="mb-2">
                                            Our vision is to expand our global reach and impact.
                                        </p>
                                        {
                                            vision.map((item) => (
                                                <motion.li
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
                                                    key={item.id}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <TiArrowRight className='text-2xl text-primary' />
                                                    <span>{item.details}</span>
                                                </motion.li>
                                            ))
                                        }
                                    </motion.ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About