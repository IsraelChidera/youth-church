import React from 'react';
import Container from '@/components/elements/Container';
import Image from 'next/image';

const Feature = () => {

    const feature = [
        {
            image: "/logo.png",
            description: `orem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste ipsum iure. Nemo nisi inventore rerum, eius tempora nihil facere!`
        },
        {
            image: "/logo.png",
            description: `consectetur adipisicing elit. Laboriosam iste ipsum iure. Nemo nisi inventore rerum, eius tempora nihil facere!`
        },
        {
            image: "/logo.png",
            description: `ipsum iure. Nemo nisi inventore rerum, eius tempora nihil facere!`
        }
    ]

    return (
        <section className='py-30'>
            <Container>
                <div>
                    <p className='mb-2 text-center font-semibold text-sm text-tertiary'>Who we are</p>
                    <div className='flex justify-center'>
                        <p className='text-3xl text-center font-semibold text-tertiary lg:w-[600px]'>We want to be a <span className='text-primary'>church</span> that is relevant to our <span className='text-primary'>culture</span></p>
                    </div>

                    <div className="mt-4 lg:mt-10 flex justify-center">
                        <div className='grid lg:grid-cols-3 space-y-6 lg:space-y-0 lg:space-x-10 mt-12'>
                            {
                                feature.map((item) => (
                                    <div key={item.description} className='space-y-2'>
                                        <Image src={item.image} width={150} height={150} alt="icon" />
                                        <p className='pt-2'>
                                            {item.description}
                                        </p>
                                    </div>
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