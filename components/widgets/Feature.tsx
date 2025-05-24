"use client";
import { motion } from 'motion/react';
import React from 'react';
import Container from '@/components/elements/Container';
import Image from 'next/image';

const Feature = () => {

    const feature = [
        {
            image: "/logo.png",
            description: `RCCG Youths UK is the youth expression of the Redeemed Christian Church of God (RCCG) in the United Kingdom. We are a dynamic and spirit-led community of young people passionate about loving God, serving people, and influencing culture for Christ.`
        },
        {
            image: "/logo.png",
            description: `We believe that every young person is uniquely gifted and called to impact their world. Through our various fellowships, events, and discipleship programs, we aim to provide a safe and vibrant environment where young believers can encounter God, build meaningful relationships, and grow in faith.`
        },
        {
            image: "/logo.png",
            description: `Our activities range from worship services, Bible study groups, mentorship sessions, conferences, outreach programs, creative arts, tech initiatives, and more.`
        }
    ]

    return (
        <section className='py-30'>
            <Container>
                <div>
                    <motion.p initial={{
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
                        }} className='mb-2 text-center font-semibold text-sm text-tertiary'>Who we are</motion.p>
                    <motion.div initial={{
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
                        }} className='flex justify-center'>
                        <p className='text-3xl text-center font-semibold text-tertiary lg:w-[600px]'>We want to be a <span className='text-primary'>church</span> that is relevant to our <span className='text-primary'>culture</span></p>
                    </motion.div>

                    <div className="mt-4 lg:mt-10 flex justify-center">
                        <div className='grid lg:grid-cols-3 space-y-6 lg:space-y-0 lg:space-x-10 mt-12'>
                            {
                                feature.map((item) => (
                                    <motion.div initial={{
                                        y: -100,
                                        opacity: 0,
                                    }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            // damping: 70,
                                            delay: 0.2,
                                            duration: 4,
                                        }}
                                        whileInView={{
                                            y: 0,
                                            opacity: 1
                                        }} key={item.description} className='space-y-2'>
                                        <Image src={item.image} width={150} height={150} alt="icon" />
                                        <p className='pt-2'>
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Feature