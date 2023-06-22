"use client"
import { useDataContext } from "@/context/data";
import Content from "@/layout/content";
import { usePathname } from "next/navigation";


export default function BlogPage() {

    var pathname = usePathname()
    pathname = pathname.split('/').reverse()[0]

    const [data, setData] = useDataContext();
    const blog = data.find(blog => blog.href === pathname)



    return (
        <>
            { blog && <Content blog={blog} /> }
        </>

    )
}