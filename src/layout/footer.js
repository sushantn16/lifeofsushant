import Image from "next/image"
import Social from "./social"
export default function Footer() {

    return (
        <footer className="bg-orange absolute w-full bottom-0 flex justify-center md:justify-normal md:block">
            <div className="py-3 px-10 flex justify-between">
            <div className="text-left text-white hidden md:block">
                    <Image src="/logo-white.svg" width={200} height={120} alt="Logo" />
                </div>
                <div className="flex items-center">
                    <Social color={'white'}/>
                </div>

            </div>


        </footer>
    )
}