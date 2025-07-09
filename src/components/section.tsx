'use client'
import { poppinsSB, poppins } from "@/fonts/font"
import Testi from "@/ui/cardTesti"
import Porto from "@/ui/cardPorto"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cardsrvc from "@/ui/CardSrvc";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"

type Portofolio = {
  id: number
  img_url: string
  desc1: string
  desc2: string
}

type Testimoni = {
  id: number
  headline:string
  testi: string
  nama: string
}

type Product = {
  id: number
  img_url:string
  harga: string
  desc: string
}
type Main = {
    about:string
    notelp:string
}

export default function Section( {about, notelp}:Main) {
    const [data, setData] = useState<Portofolio[]>([])
    const [dataTesti, setDataTesti] = useState<Testimoni[]>([])
    const [dataProduct, setDataProduct] = useState<Product[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from('portofolio').select('*').order('id', { ascending: false })
            if (error) console.error(error)
                else setData(data)
        }
        const fetchDataTesti = async () => {
            const { data, error } = await supabase.from('testimoni').select('*').order('id', { ascending: false })
            if (error) console.error(error)
                else setDataTesti(data)
        }
        const fetchDataProduct = async () => {
            const { data, error } = await supabase.from('product').select('*').order('id', { ascending: false })
            if (error) console.error(error)
                else setDataProduct(data)
        }
        fetchData()
        fetchDataTesti()
        fetchDataProduct()
    }, [])
    return(
        <div className="mt-20">
            <section className="text-[#372415] mx-8">
                <motion.h2 initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} id="about" className={`${poppinsSB.className} text-[24px] scroll-mt-20`}>Tentang Kami</motion.h2>
                <motion.p initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className={`${poppins.className} text-[16px]`}>{about}</motion.p>
                <motion.h2 initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className={`${poppinsSB.className} text-[24px] mt-10 mb-5`}>Contoh Projek yang Menggunakan Jasa drafteraja</motion.h2 >
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }} className="flex justify-center flex-wrap gap-5">
                    {data.map((item) => (
                        <Porto key={item.id} img_url={item.img_url} desc1={item.desc1} desc2={item.desc2} />
                    ))}
                </motion.div>
                <h2 className={`${poppinsSB.className} text-[24px] mt-10 mb-5`}>Apa Kata Mereka?</h2>
            <div className="w-full flex justify-center mb-10 mt-5">
                <div className="w-full max-w-6xl">
                    <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    className="!pl-0 !ml-0 w-full" 
                    spaceBetween={10}
                    loop={false}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        0: {
                        slidesPerView: 1,
                        },
                        640: {
                        slidesPerView: 1.5,
                        },
                        1024: {
                        slidesPerView: 1.5,
                        },
                        1116: {
                        slidesPerView: 1.5,
                        },
                        1200: {
                        slidesPerView: 2,
                        },
                    }}
                    onSwiper={(swiper) => {
                        console.log('Swiper ready', swiper);
                        if (swiper?.autoplay) swiper.autoplay.start();
                    }}
                    >
                    {dataTesti.map((item) => (
                        <SwiperSlide key={item.id} className="!pl-0 !ml-0">
                            <Testi headline={item.headline} testi={item.testi} nama={item.nama}/>
                        </SwiperSlide>
                    ))}
                        <div className="text-white">.</div>
                    </Swiper>
                </div>
            </div>
            <h2 id="product" className={`${poppinsSB.className} text-[24px] mt-10 mb-5 scroll-mt-20`}>Yang Kami Tawarkan</h2>
                <div className="flex justify-center flex-wrap gap-5">
                    {dataProduct?.map((item) => (
                        <div key={item.id}>
                            <Cardsrvc url={item.img_url} harga={item.harga} deskripsi={item.desc} id={item.id}/>
                        </div>
                    ))}
                </div>
            <h2 className={`${poppinsSB.className} flex justify-center text-center text-[24px] mt-10 mb-5`}>Tunggu Apa Lagi? Yuk Hubungi Kami!</h2>
            <div className="flex justify-center">
                <button className="py-2 px-20 rounded-lg bg-[#835A3C] text-white hover:scale-105 transition ease-in-out duration-200">
                    <a href={`https://wa.me/${notelp}`} className="">
                        Konsultasi Sekarang! Gratis!!!
                    </a>
                </button>
            </div>
            </section>
        </div>
    )
}