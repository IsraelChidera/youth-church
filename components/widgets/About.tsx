import React from 'react';
import Container from '@/components/elements/Container';
import Image from 'next/image';

const About = () => {
    return (
        <section className='bg-[#f2f4ff] py-30'>
            <Container>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Image src="/about-us.jpg" alt="about us" width={600} height={400} />
                        <div className='bg-white py-10 px-8'>
                            <h3 className='font-semibold text-tertiary text-2xl mb-2'>About us</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, ipsum quo alias vero incidunt quisquam debitis maxime minima ullam amet dolor placeat voluptatem odit delectus possimus vitae perspiciatis aliquam aut.</p>
                        </div>
                    </div>

                    <div>
                        <Image src="/about-us.jpg" alt="about us" width={600} height={400} />
                        <div className='bg-white py-10 px-8'>
                            <h3 className='font-semibold text-tertiary text-2xl mb-2'>Our Mission</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, ipsum quo alias vero incidunt quisquam debitis maxime minima ullam amet dolor placeat voluptatem odit delectus possimus vitae perspiciatis aliquam aut.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <div className='relative'>
                        <Image src="/youth-bg.jpg" alt="youth gathering" width={1300} height={768} />

                        <div className='absolute bottom-0 left-0 bg-white z-20 w-[600px] h-[300px]'>
                            <div className='flex items-center justify-center h-full'>
                                <div className='px-10'>
                                    <h3 className='font-semibold text-tertiary text-2xl mb-2'>Our Mission</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, ipsum quo alias vero incidunt quisquam debitis maxime minima ullam amet dolor placeat voluptatem odit delectus possimus vitae perspiciatis aliquam aut.</p>
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