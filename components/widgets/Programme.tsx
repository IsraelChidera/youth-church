"use client"

import React from 'react';
import Container from '@/components/elements/Container';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { motion } from 'motion/react';


const Programme = () => {

    const programmes = [
        {
            id: 1,
            title: "Sunday Worship Service",
            description: "Every Sunday, 10am",
        },
        {
            id: 2,
            title: "Youth Bible Study",
            description: "Tuesday, 7-8pm",
        },
        {
            id: 3,
            title: "Youth Prayer Meeting",
            description: "Thursday, 7-8pm",
        },
        {
            id: 4,
            title: "Monthly Thanksgiving",
            description: "First Sunday of the Month",
        },
    ]
    return (
        <section id="#programmes" className=' py-30'>
            <Container>
                <div>
                    <p className='mb-2 text-center font-semibold text-sm text-primary'>Our programmes</p>
                    <div className='flex justify-center'>
                        <p className='text-3xl text-center font-semibold text-tertiary w-[600px]'>Worship with us</p>
                    </div>
                </div>

                <div className="mt-10 grid lg:grid-cols-2 space-y-6 lg:space-y-0 lg:gap-10">
                    <div>
                        <Image src="/rccg-youth.jpg" className='h-fit rounded-br-[80px]' alt="about us" width={600} height={200} />
                    </div>

                    <div className='space-y-6 lg:space-y-4'>
                        {
                            programmes?.map((item: any) => (
                                <motion.div
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
                                    className="" key={item.id}>
                                    <h3 className='font-semibold text-tertiary text-xl mb-2'>{item.title}</h3>
                                    <p className='text-base'>{item.description}</p>
                                    <MdOutlineArrowOutward className='text-4xl mt-2 text-primary bg-[#f2f4ff] rounded-full p-1' />
                                </motion.div>
                            ))
                        }

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Programme