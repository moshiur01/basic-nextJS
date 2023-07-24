import Image from 'next/image';
import React from 'react';
import  image from "../../public/404-image.jpg"
import { useRouter } from 'next/router';

const ErrorPage = () => {

    const router = useRouter()

    setTimeout(() => {
        
        router.push('/')
    }, 5000)
    return (
        <div>
        <Image src={image}alt='Not Found Image' width={`1200`}></Image>
        
        </div>


    );
};

export default ErrorPage;