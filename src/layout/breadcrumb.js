import Link from "next/link";

export default function Breadcrumb(props) {

    return (
        <div className="breadcrumb-container p-4 md:px-10 text-sm text-md">
            <Link className="text-orange" href={"/blogs"}>Blogs</Link>
            <p className="inline text-light-orange"> / {props.title}</p>
        </div>

    )
}