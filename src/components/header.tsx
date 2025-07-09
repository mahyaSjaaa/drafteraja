'use client'
import { poppinsSB, poppins } from "@/fonts/font"
import Card from "@/ui/card"
import { useState, useEffect } from "react"

type Header = {
    service1:string,
    jumlahService1:string,
    service2:string,
    jumlahService2:string,
    service3:string,
    jumlahService3:string,
}

export default function Header({service1, jumlahService1, service2, jumlahService2, service3, jumlahService3,} : Header) {
    const [a, setA] = useState(100)
    const [b, setB] = useState(100)
    const [c, setC] = useState(100)
        
  useEffect(() => {
  const targetA = parseInt(jumlahService1, 10)
  const targetB = parseInt(jumlahService2, 10)
  const targetC = parseInt(jumlahService3, 10)

  // Cek validitas angka
  if (isNaN(targetA) || isNaN(targetB) || isNaN(targetC)) return

  const interval = setInterval(() => {
    setA((prev) => (prev > targetA ? prev - 1 : prev))
    setB((prev) => (prev > targetB ? prev - 1 : prev))
    setC((prev) => (prev > targetC ? prev - 1 : prev))
  }, 50)

    return () => clearInterval(interval);
  }, [jumlahService1, jumlahService2, jumlahService3]);
    return(
        <section className="lg:mt-30 md:mt-24 sm:mt-22 mt-18">
            <div className="flex justify-center">
                <div className="flex flex-col w-[60%]">
                    <div className="h-[303px] bg-[#B05215] rounded-tl-[20px]">
                        <div className="h-full flex lg:mx-10 md:mx-6 sm:mx-4 mx-4 items-center">
                            <div className="flex flex-col">
                                <h1 id="home" className={`${poppinsSB.className} scroll-mt-20 text-white lg:text-[28px] md:text-[22px] sm:text-[18px] text-[16px] mb-3`}>
                                Layanan Drafter Autocad Profesional untuk Proyek Bangunan Anda
                                </h1>
                                <p className={`${poppins.className} text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]`}>
                                Spesialis Shopdrawing, Asbuiltdrawing, Gambar Kerja, dan Visualisasi 3D.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div  className={`${poppins.className} text-white lg:text-[16px] md:text-[14px] sm:text-[13px] text-[9.5px] h-[173px] bg-[#4F2916] rounded-bl-[20px] flex justify-center items-center lg:gap-35 md:gap-15 sm:gap-10 gap-2`}>
                        <p className="">Terpercaya</p>
                        <p>Respon Cepat</p>
                        <p>Konsultasi Gratis</p>
                    </div>
                </div>
                <div className="w-[30%] h-[476px] bg-[url(/bg1.png)] rounded-r-[20px]"></div>
            </div>
            <p className={`${poppinsSB.className} text-[#372415] flex justify-center text-center mt-7 text-[24px]`}>Kami Telah Membantu</p>
            <div className="flex flex-wrap justify-center mx-16 lg:gap-30 md:gap-12 sm:gap-6 gap-2 my-10">
                <Card url={a.toString()} labelAatas={service1}/>
                <Card url={b.toString()} labelAatas={service2}/>
                <Card url={c.toString()} labelAatas={service3}/>
            </div>
        </section>
    )
}