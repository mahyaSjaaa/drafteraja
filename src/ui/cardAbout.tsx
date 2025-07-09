import { poppins } from "@/fonts/font"
import Image from "next/image"

type handleCard = {
    url: string,
    labelAatas: string,
}

export default function CardAbout ({url, labelAatas,}: handleCard) {
    return(
        <div className=" w-[350px] hover:scale-102 transition ease-in-out duration-200 mx-5">
            <div className="bg-linear-to-t from-[#372415] to-[#835A3C] flex justify-center items-center rounded-lg py-20">
                <div className="block">
                    <div className="flex justify-center">
                        <Image
                        src={url}
                        alt={url}
                        width={128} // ganti sesuai kebutuhan
                        height={0} // ganti sesuai kebutuhan
                        className="" // opsional, kalau mau tetap styling
                        />
                    </div>
                    <p className={`${poppins.className} text-[16px] mt-8 flex justify-center`}>{labelAatas}</p>
                </div>
            </div>
        </div>
    )
}