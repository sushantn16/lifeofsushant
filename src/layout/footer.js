import Image from "next/image"
import Social from "./social"
export default function Footer() {

    return (
        <footer className="bg-orange absolute w-full bottom-0">
            <div className="p-3 flex justify-between">
            <div className="text-left text-white pl-10">
                    <Image src="/logo-white.svg" width={200} height={120} alt="Logo" />
                </div>
                <div className="flex items-center pr-10">
                    <Social color={'white'}/>
                </div>

            </div>


        </footer>
    )
}