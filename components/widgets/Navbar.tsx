import Link from 'next/link'
import React from 'react'
import Button from '@/components/elements/Button';
import Container from '@/components/elements/Container';
import Image from 'next/image';

const Navbar = () => {

    const navLinks = [
        {
            name: "Benefits",
            link: "/"
        },
        {
            name: "Product",
            link: "/about"
        },
        {
            name: "Testimonials",
            link: "/contact"
        },
        {
            name: "Contact",
            link: "/blog"
        }
    ]

    return (
        <nav className='relative w-full py-6'>
            <Container>
                <div className='flex items-center justify-between'>
                    <Image src="/logo.png" className="lg:block hidden" alt="logo" width={212} height={35} />
                    <Image src="/logo.png" className="block lg:hidden" alt="logo" width={112} height={35} />


                    <div className='block lg:flex items-center space-x-6'>
                        <ul className='hidden lg:flex items-center space-x-6'>
                            {
                                navLinks.map((link) => (
                                    <li key={link.name} className='mx-2'>
                                        <Link href={link.link} className='text-white text-base font-medium hover:pb-1 hover:border-b-2 hover:border-b-white transition-all duration-200 ease-linear'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="flex lg:block">
                            <Button className='px-6 py-2 text-[14px] font-medium' classType='primary'>Sign up</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar