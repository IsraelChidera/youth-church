"use client"
import React, { useState } from 'react';
import Container from '@/components/elements/Container';
import Button from '@/components/elements/Button';
import { FiArrowDownRight } from "react-icons/fi";
import Link from 'next/link';


type InitialValuesProps = {
    email: string,
    firstname: string,
    lastname: string,
    message: string
}

type ErrorsProps = {
    email?: string,
    firstname?: string,
    lastname?: string,
    message?: string
}

const Contact = () => {

    const [success, setSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const initialValues: InitialValuesProps = {
        email: "",
        firstname: "",
        lastname: "",
        message: ""
    }

    const validateForm = (values: InitialValuesProps) => {
        const errors: ErrorsProps = {}

        if (!values.firstname) {
            errors.firstname = "First name is required";
        } else if (values.firstname.length <= 3) {
            errors.firstname = 'Must be 3 characters or more';
        }

        if (!values.lastname) {
            errors.lastname = "Last name is required";
        } else if (values.lastname.length <= 3) {
            errors.lastname = 'Must be 3 characters or more';
        }

        if (!values.message) {
            errors.message = "Message is required";
        } else if (values.message.length <= 3) {
            errors.message = 'Must be 3 characters or more';
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        return errors;
    }

    const onContactFormSubmission = async (values: any) => {
        console.log(values);
        setSubmitting(true);
        setSuccess(true);

        if (values) {
            setSubmitting(false);
            window.open(`mailto:lumixusstudio@gmail.com?subject=${`Contact%20Form%20Message%20-%20${values.firstname}%20${values.lastname}`}&body=${`${values.message}`}`, '_blank');
        }

    }

    return (
        <section id="contact" className='bg-[#f2f4ff] py-20'>
            <Container className=' relative pb-10'>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className='mb-2'>
                            <p className='text-sm lg:text-base text-primary font-semibold w-fit'>
                                Contact us
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center space-x-1">
                                <h2 className='uppercase text-[30px] lg:text-[40px] font-bold mt-'>
                                    <span className=''>Worship</span> with us
                                </h2>

                                <FiArrowDownRight className='text-primary text-[60px]' />
                            </div>
                        </div>

                        <div className='mt-2'>
                            <p className="flex items-center space-x-2 ">
                                <Link className="block hover:underline underline-offset-4" href="https://www.instagram.com/lumixus_studio/">
                                    Instagram
                                </Link>
                                <span className="block ">|</span>
                                <Link className="block hover:underline underline-offset-4" href="mailto:lumixusstudio@gmail.com">
                                    Email us
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div>
                        <form className="text-text space-y-10 bg-white py-10 px-4 lg:px-[40px] lg:py-[40px] rounded-lg border border-[#EEEEEE]">
                            <div>
                                <label htmlFor="name" className="block text-lg lg:text-[20px]">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className='border-b border-b-[#757577] focus:border-b-[#757577] focus:outline-none mt-2 w-full bg-transparent'
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-lg lg:text-[20px]">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className='border-b border-b-[#757577] focus:border-b-[#757577] focus:outline-none mt-2 w-full bg-transparent'
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-lg lg:text-[20px]">Message</label>
                                <textarea
                                    rows={4}
                                    cols={4}
                                    className='border-b border-b-[#757577] focus:border-b-[#757577] focus:outline-none mt-2 w-full bg-transparent'
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <Button classType="secondary" className='py-2.5 px-4'>
                                    Send message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section >
    )
}

export default Contact