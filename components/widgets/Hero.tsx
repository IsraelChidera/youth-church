import React from 'react'
import Navbar from './Navbar'
import Container from '@/components/elements/Container';
import Button from '@/components/elements/Button';
import Link from 'next/link';

const Hero = () => {
    return (
        <header className='h-screen relative bg-[url(/youth-bg.jpg)] bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Container className='flex items-center h-full'>
                <div className="w-[500px]">
                    <h1 className='text-white text-4xl lg:text-5xl font-bold lg:font-semibold '>
                        It's Okay to not be okay.
                        God meets you where you are.
                    </h1>
                    <p className='mt-2 text-white text-base lg:text-[18px]'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste ipsum iure. Nemo nisi inventore rerum, eius tempora nihil facere!
                    </p>

                    <Link href="#contact">
                        <Button classType='primary' className="py-2.5 px-[20px] mt-4">
                            Contact us
                        </Button>
                    </Link>
                </div>
            </Container>
        </header>
    )
}

export default Hero