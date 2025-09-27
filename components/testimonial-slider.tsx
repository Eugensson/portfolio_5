"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { testimonialList } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

export const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-120 lg:h-100"
      >
        {testimonialList.map(
          ({ id, authorImg, authorText, authorName, authorPosition }) => (
            <SwiperSlide key={id} className="cursor-pointer">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
                <div className="size-48 lg:size-82 ">
                  <Image
                    src={authorImg}
                    alt={authorName}
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex flex-col max-w-3xl">
                  <h5 className="mb-8 text-sm md:text-2xl font-body font-normal italic">
                    {authorText}
                  </h5>
                  <div>
                    <p className="text-lg text-accent">{authorName}</p>
                    <p>{authorPosition}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};
