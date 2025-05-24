import React from 'react';
import Container from '@/components/elements/Container';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import { FaLinkedin, FaLocationPin } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='py-20'>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>
                    <div className='col-span-2'>
                        <Image src="/logo.png" className='lg:block hidden' alt="logo" width={312} height={55} />
                        <Image src="/logo.png" className='block lg:hidden' alt="logo" width={212} height={45} />

                        <p className='text-sm lg:text-[18px] text-gray-500 mt-2'>
                            We are committed to preaching the undiluted word of God. We aim at returning the heart of the people of God back to bible Christianity.
                        </p>

                        <div className='flex text-base lg:text-2xl items-center space-x-4 mt-4'>
                            <FaFacebook className='cursor-pointer text-gray-500 hover:text-primary transition-colors duration-200' />
                            <FaTwitter className='cursor-pointer text-gray-500 hover:text-primary transition-colors duration-200' />
                            <FaInstagram className='cursor-pointer text-gray-500 hover:text-primary transition-colors duration-200' />
                            <FaLinkedin className='cursor-pointer text-gray-500 hover:text-primary transition-colors duration-200' />
                        </div>
                    </div>

                    <ul className='space-y-2 text-left lg:text-center'>
                        <li className='text-sm lg:text-[18px] text-tertiary font-semibold mb-'>
                            Quick Links
                        </li>
                        <li>
                            <Link href="/" className='text-gray-500 hover:text-primary transition-colors duration-200 font-medium'>Home</Link>
                        </li>
                        <li>
                            <Link href="#about" className='text-gray-500 hover:text-primary transition-colors duration-200 font-medium'>About Us</Link>
                        </li>
                    </ul>

                    <ul className='col-span-2 space-y-2'>
                        <li>
                            <p className='text-base lg:text-[18px] text-tertiary font-semibold mb-1'>Contact Information</p>
                        </li>

                        <li className="flex space-x-2 items-start">
                            <FaPhone className='text-primary ' />

                            <div>
                                <p className='text-gray-500 hover:text-primary transition-colors duration-200 font-medium'>+234 123 4567</p>
                                <p className='text-gray-500 hover:text-primary transition-colors duration-200 font-medium'>+234 123 4567</p>
                            </div>
                        </li>

                        <li className="flex space-x-2 items-start">
                            <FaMailBulk className='text-primary ' />

                            <div>
                                <p className='text-gray-500 hover:text-primary transition-colors duration-200 font-medium'>info@rccg.com</p>
                                <p className='text-gray-500 hover:text-primary transition-colors duration-200 font-medium'>info@youthchurch.com</p>
                            </div>
                        </li>

                        <li className="flex space-x-2 items-start">
                            <FaLocationPin className='text-primary ' />

                            <div>
                                <p className='text-gray-500 hover:text-primary transition-colors duration-200 font-medium'>The old church building, 86 Newport Road Cardiff CF24 1PU</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer