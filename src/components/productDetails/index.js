"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Link from 'next/link';
import { FaLongArrowAltLeft } from "react-icons/fa";
import ProductDetailSlider from '../../components/productDetailSlider'
import { ShoeImages } from './ShoeImages';
import ProductDetailRightside from './ProductDetails';
import ProductList from '../Home/product-list/ProductList';
import ReviewSection from '../Home/product-list/ReviewSection';
import ProductAccordion from '../Home/product-list/ProductAccordion';

const ProductDetails = ({ title, price, productData }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(1)

    const handleNumberOfCreatorsChange = (type) => {
        setQuantity((prev) => {
            const newValue = type === 'increase' ? prev + 1 : Math.max(1, prev - 1);
            return newValue;
        });
    };
    console.log(productData)
    
    return (
        <div className="  py-5 mt-36 md:w-[80%] mx-auto">
            <div className="md:flex ">
                {/* Left Section - Image Slider */}
                <div className=" md:w-[60%]">
                  <ShoeImages/>
                </div>

                {/* Right Section - Product Details */}
              <div className='md:w-[40%]  '>
              <ProductDetailRightside {...productData} />
              </div>
            </div>
            <div><ProductAccordion/></div>
            <div> <ReviewSection/></div>
<div>
    <ProductList/>
</div>
        </div>
    );
};

export default ProductDetails;