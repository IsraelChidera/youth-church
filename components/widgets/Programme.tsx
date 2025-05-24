import React from 'react';
import Container from '@/components/elements/Container';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Programme = () => {
    return (
        <section className=' py-30'>
            <Container>
                <div>
                    <p className='mb-2 text-center font-semibold text-sm text-primary'>Our programmes</p>
                    <div className='flex justify-center'>
                        <p className='text-3xl text-center font-semibold text-tertiary w-[600px]'>Worship with us</p>
                    </div>
                </div>

                <div className="mt-10 grid lg:grid-cols-2 space-y-6 lg:space-y-0 gap-4">
                    <div>
                        <Image src="/youth-bg.jpg" className='h-fit rounded-br-[80px]' alt="about us" width={600} height={200} />
                    </div>

                    <div className='space-y-6 lg:space-y-4'>
                        <div>
                            <h3 className='font-semibold text-tertiary text-xl mb-2'>Sunday Service</h3>
                            <p className='text-base'>Libero, ipsum quo alias vero incidunt quisquam debitis maxime minima ullam amet dolor placeat voluptatem odit delectus possimus vitae.</p>
                            <MdOutlineArrowOutward className='text-4xl mt-2 text-primary bg-[#f2f4ff] rounded-full p-1' />
                        </div>

                        <div>
                            <h3 className='font-semibold text-tertiary text-xl mb-2'>Sunday Service</h3>
                            <p className='text-base'>Libero, ipsum quo alias vero incidunt quisquam debitis maxime minima ullam amet dolor placeat voluptatem odit delectus possimus vitae.</p>
                            <MdOutlineArrowOutward className='text-4xl mt-2 text-primary bg-[#f2f4ff] rounded-full p-1' />
                        </div>

                        <div>
                            <h3 className='font-semibold text-tertiary text-xl mb-2'>Sunday Service</h3>
                            <p className='text-base'>Libero, ipsum quo alias vero incidunt quisquam debitis maxime minima ullam amet dolor placeat voluptatem odit delectus possimus vitae.</p>
                            <MdOutlineArrowOutward className='text-4xl mt-2 text-primary bg-[#f2f4ff] rounded-full p-1' />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Programme