import { poppins, poppinsSB } from "@/fonts/font"

type handleCard = {
    headline: string,
    nama: string,
    testi: string,
}

export default function Testi ({headline, nama, testi}: handleCard) {
    return(
        <div className="lg:min-w-[550px] md:min-w-[300px] ms:min-h-[350px] lg:max-w-[80%] md:max-w[90%]  transition ease-in-out duration-200">
            <div className="bg-white lg:min-h-[300px] lg:max-h-[300px] overflow:hidden bg-red-200 border border-[#780001] border-2 flex justify-center items-center rounded-lg py-8">
                <div className="block text-[#780001] mx-10 pb-2">
                    <h3 className={`${poppinsSB.className} text-[16px] flex justify-center`}>&quot;{headline}&quot;</h3>
                    <p className={`${poppins.className} lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] mt-8 flex justify-center`}>{testi}</p>
                    <p className={`${poppins.className} text-[14px] mt-8 flex`}>~{nama}</p>
                </div>
            </div>
        </div>
    )
}