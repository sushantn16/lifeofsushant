"use client"
import { useEffect, useState } from "react";
import Card from "@/layout/card";
import { useDataContext } from "@/context/data";


export default function Blogs() {

  const [data, setData] = useDataContext()

  return (
    <div className="page-container">
      <div className="page-content flex flex-wrap">
        {data.map((blog) => (
                <Card key={blog.id} href={blog.href} title={blog.title} content={blog.content} image={blog.image} alt={blog.alt} />
            
        ))}
      </div>
    </div>
  );
}
