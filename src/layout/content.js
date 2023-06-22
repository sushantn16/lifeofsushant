import Image from "next/image"
import Breadcrumb from "./breadcrumb"
export default function Content(props) {

    return (
        <>
        <Breadcrumb title={props.blog.title} />
            <div className="">
                <p>{props.blog.date}</p>
                <p>{props.blog.location}</p>
            </div>
            <p>{props.blog.title}</p>
            <p>{props.blog.quote}</p>
            <div className="content">
                <Image src={props.blog.image} alt={props.blog.alt} height={500} width={500}/>
                <p>{props.blog.content}</p>
            </div>
        </>

    )
}