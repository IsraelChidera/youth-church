"use client"

import React from 'react';
import { motion } from 'motion/react';

type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    onClick?: any,
    type?: any,
    props?: any,
    disabled?: boolean,
    classType?: string,
}

const index = ({ classType, children, className, onClick, type, disabled, ...props }: ButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.95 }}
            type={type}
            onClick={onClick}
            className={`${classType === "primary" && "border bg-primary hover:border-white hover:text-primary hover:bg-white rounded-2xl text-white border-white"} 
            ${classType === "secondary" && "bg-transparent text-gold border-primary text-primary border rounded-2xl"} 
             text-[14px] lg:text-[15px] font-medium 
            hover:cursor-pointer transition-all duration-75 delay-75 ease-linear
            ${className}`
            }
            {...props}
            disabled={disabled}
        >
            {children}
        </motion.button>
    )
}

export default index