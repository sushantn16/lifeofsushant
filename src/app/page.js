"use client"
import Carousel from "@/layout/carousel";
import { useDataContext } from "@/context/data";
import Card from "@/layout/card";

export default function Home() {
  const [data, setData] = useDataContext()
  return (
    <>
      <div className="carousel-container m-5 rounded">
        <Carousel />
      </div>
      <div className="mt-10">
        <p className="text-2xl text-orange mx-5">
          Trending Blogs
        </p>
        <div className="page-content flex flex-wrap">
          {data.slice(0,3).map((blog) => (
            <Card key={blog.id} href={blog.href} title={blog.title} content={blog.content} image={blog.image} alt={blog.alt} />
          ))}
        </div>
      </div>

    </>
  )
}

