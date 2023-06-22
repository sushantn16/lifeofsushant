import Image from "next/image"
import Link from "next/link"

export default function Card(props) {
    return (
        <Link href={'blogs/'+props.href}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 bg-white">
            <Image src={props.image} alt={props.alt} height={100} width={300} />
                <div className="px-6 py-4">
                    <div className="font-bold text-grey mb-2 line-clamp-1">{props.title}</div>
                    <p className="text-gray text-base line-clamp-2">
                       {props.content}
                    </p>
                </div>
        </div>
        </Link>
    )
}
