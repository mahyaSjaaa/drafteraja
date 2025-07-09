import { poppins } from "@/fonts/font"

type Product = {
    id:number
    url:string,
    harga:string,
    deskripsi:string
}

export default function CardSrvc ({url, harga, deskripsi, id}:Product) {
    return(
        <div className="hover:scale-102 transition ease-in-out duration-200 bg-cover w-[340px] h-[252px] flex items-end rounded-lg shadow-xl"
        style={{ backgroundImage: `url(${url})` }}>
            <div className={`bg-[#835A3C]/75 w-[340px] h-[124px] rounded-lg ${poppins.className} text-white`}>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mx-5 mt-4">
                        <p className="">Rp. {harga}</p>
                        <a href={`/detail/${id}`} className="py-1 px-3 bg-[#372415] text-[12px] rounded-md hover:scale-105 transition ease-in-out duration-200">Selengkapnya</a>
                    </div>
                    <p className="mt-1 mx-5 mb-4 line-clamp-2">{deskripsi}</p>
                </div>
            </div>
        </div>
    )
}