"use client"
import Carousel from "@/layout/carousel";
import { useDataContext } from "@/context/data";
import Card from "@/layout/card";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useDataContext()
  return (
    <>
      <div className="carousel-container m-5 rounded">
        <Carousel />
      </div>
      <div className="mt-10">
        <div className="flex justify-between">
          <p className="text-2xl text-orange mx-5">
            Trending Blogs
          </p>
          <Link className="text-xl text-orange mx-5 hover:underline" href="/blogs">View All</Link>
        </div>
        <div className="page-content flex flex-wrap">
          {data.slice(0, 3).map((blog) => (
            <Card key={blog.id} href={blog.href} title={blog.title} content={blog.content} image={blog.image} alt={blog.alt} />
          ))}
        </div>
      </div>

    </>
  )
}

