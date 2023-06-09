'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";
import { useDataContext } from "@/context/data";
import Link from "next/link";


export default function Carousel() {
  const [data, setData] = useDataContext();

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          data.map((blog) =>
          (
            <SwiperSlide key={blog.id}>
              <div className="image-container max-h-96 object-cover">
              <img src={blog.image} alt={blog.alt}/>
              </div>
              <div className="text-container absolute bottom-10 right-10 text-3xl">
                <p className="text-light-orange">{blog.title}</p>
                <Link className="text-orange" href={'blogs/' + blog.href}>Read More</Link>
              </div>
            </SwiperSlide>
          )
          )
        }
      </Swiper>
    </>
  );
}

