import Link from "next/link";

export default function Breadcrumb(props) {

    return (
        <div className="breadcrumb-container pb-4">
            <Link className="text-orange" href={"/"}>Home</Link>
            <Link className="text-orange" href={"/blogs"}> / Blogs</Link>
            
            <p className="inline text-light-orange"> / {props.title}</p>
        </div>

    )
}