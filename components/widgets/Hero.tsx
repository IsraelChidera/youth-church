import React from 'react'
import Navbar from './Navbar'
import Container from '@/components/elements/Container';
import Button from '@/components/elements/Button';
import Link from 'next/link';
import { PiTelevisionSimpleFill } from 'react-icons/pi';

const Hero = () => {
    return (
        <header className='h-screen relative bg-[url(/gallery3.png)] bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Container className='flex items-center h-full'>
                <div className="w-[500px]">
                    <h1 className='text-white text-shadow-lg text text-4xl lg:text-5xl font-bold lg:font-semibold '>
                        Empowering a Generation for Christ
                    </h1>
                    <p className='mt-2 text-shadow-sm text-white text-base lg:text-[18px]'>
                        We Welcome you to worship with us. God Loves you and so do we.
                    </p>

                    <Link href="#contact" className='mt-4 flex items-center space-x-4'>
                        <Button classType='primary' className="py-2.5 px-[20px] ">
                            Contact us
                        </Button>

                        {/* <Button classType='secondary' className="text-white py-2.5 px-[20px]">
                            <div className="flex items-center space-x-2">
                                <PiTelevisionSimpleFill className='text-primary' />
                                <span className="">Watch online</span>
                            </div>
                        </Button> */}
                    </Link>
                </div>
            </Container>
        </header>
    )
}

export default Hero