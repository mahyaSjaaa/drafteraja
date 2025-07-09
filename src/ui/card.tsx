import { poppinsSB } from "@/fonts/font"

type handleCard = {
    url: string,
    labelAatas: string,
}

export default function Card ({url, labelAatas,}: handleCard) {
    return(
        <div className="lg:w-[200px] lg:h-[120px] md:w-[200px] md:h-[120px] sm:w-[120px] sm:h-[120px] w-[120px] h-[120px] flex hover:scale-105 transition ease-in-out duration-200">
        <div className="bg-[#4F2916] text-[#FEF0D5] h-full w-full">
            <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center text-center mx-2 h-full py-2 gap-2 md:gap-5">
            <h3 className={`${poppinsSB.className} text-[20px] md:text-[24px]`}>{url}</h3>
            <p className={`${poppinsSB.className} text-[12px] md:text-[16px]`}>{labelAatas}</p>
            </div>
        </div>
        </div>
    )
}