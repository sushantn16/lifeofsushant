import Image from "next/image"
import Link from "next/link"

export default function Card(props) {
    return (
        <Link className="m-5" href={'blogs/' + props.href}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
                <div className="relative h-72">
                    <Image src={props.image} alt={props.alt} fill={true} />
                    <div className="hover-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100 hover:backdrop-blur-md">
                        <span className="text-gold text-lg">Read More</span>
                    </div>
                </div>
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
