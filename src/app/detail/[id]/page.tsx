// app/produk/[id]/page.tsx
'use client'
import { supabase } from '@/lib/supabase'
import { useEffect, useState, use } from 'react'
import { Check} from "lucide-react";
import { poppins, poppinsSB } from '@/fonts/font';

// interface Props {
//   params: { id: string }
// } 

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
  const [harga, setHarga] = useState<string>('')
  const [desc, setDesc] = useState<[]>([])
  const [noTelp, setNoTelp] = useState<string>('')

    useEffect(() => {
        const fetchData = async() => {
            const { data, error } = await supabase
              .from('product')
              .select('*')
              .eq('id', id)
              .single()
            setHarga(data.harga)
            setDesc(data.desc)
          
            if (error) {
              return <div>Gagal ambil data</div>
            }
        }
        const getSiteSettings = async() => {
            try {
                const { data, error } = await supabase
                .from('site_settings')
                .select('*')

                console.log(data);
                
                
                if(error) console.log(error);
                data?.forEach((item) => {
                    switch (item.key_param) {
                    case 'telp':
                        setNoTelp(item.key_value)
                        break
                    default:
                        break;
                    }
                })
                console.log(data);
                
            } catch (error) {
                console.log(error);
                
            }
        }
        getSiteSettings()
        fetchData()
    }, [id])


  return (
        <section className="h-full">
            <div className="pt-10 lg:px-30 md:px-20 sm:px-15 px-8">
                <h2 className={`${poppinsSB.className} text-[#372415]  flex justify-center text-center lg:text-[32px] md:text-[32px] sm:text-[32px] text-[24px]`}>Deangan harga Rp. {harga} anda akan mendapatkan</h2>
                <div className="px-4 py-4 rounded-md border border-[#835A3C] mt-4 flex-shrink-0 lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px]">
                    {desc.map((item, index) => (
                        <div className={`${poppins.className} text-[#372415] flex gap-3 pb-1`} key={index}>
                            <Check size={16} className="mt-[3.5px] flex-shrink-0" />
                            <p className={`${poppins.className}`}>{item}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center py-8 mx-1">
                    <a href={`https://wa.me/${noTelp}`}>
                    <button className={`${poppins.className} lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] px-25 py-2 bg-[#835A3C] text-white rounded-lg transition ease-in-out duration-200 hover:scale-105 rounded-lg`}>Hubungi Kami</button>
                    </a>
                </div>
            </div>
        </section>
  )
}
