'use client'

import Navbar from "@/ui/navbar";
import Header from "@/components/header";
import Section from "@/components/section";
import Footer from "@/components/footer";
import { useEffect,useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
    const [service1, setService1] = useState<string>('')
    const [jumlahService1, setjumlahService1] = useState<string>('')
    const [service2, setService2] = useState<string>('')
    const [jumlahService2, setjumlahService2] = useState<string>('')
    const [service3, setService3] = useState<string>('')
    const [jumlahService3, setjumlahService3] = useState<string>('')
    const [about, setAbout] = useState<string>('')
    const [noTelp, setNoTelp] = useState<string>('')
    const [alamat, setAlamat] = useState<string>('')
    const [linkGps, setLinkGps] = useState<string>('')

  useEffect(() => {
        const getSiteSettings = async() => {
            try {
                const { data, error } = await supabase
                .from('site_settings')
                .select('*')

                console.log(data);
                
                
                if(error) console.log(error);
                data?.forEach((item) => {
                    switch (item.key_param) {
                    case 'service1':
                        console.log('haloo');
                        
                        setService1(item.key_value)
                        break;
                    case 'jumlah_service1':
                        setjumlahService1(item.key_value)
                        break
                    case 'service2':
                        setService2(item.key_value)
                        break
                    case 'jumlah_service2':
                        setjumlahService2(item.key_value)
                        break
                    case 'service3':
                        setService3(item.key_value)
                        break
                    case 'jumlah_service3':
                        setjumlahService3(item.key_value)
                        break
                    case 'about':
                        setAbout(item.key_value)
                        break
                    case 'telp':
                        setNoTelp(item.key_value)
                        break
                    case 'alamat':
                        setAlamat(item.key_value)
                        break
                    case 'linkGps':
                        setLinkGps(item.key_value)
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
  },[])
  return (
    <div className="">
              <a
          href={`https://wa.me/${noTelp}?text=Halo,%20saya%20mau%20tanya%20tentang%20jasa%20pembuatan%20web`}
          className="fixed bottom-4 right-4 z-50 bg-[#835A3C] text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="white">
            <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 1.64 6L0 24l6.26-1.64A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.23-6.18-3.48-8.52zM12 22a9.94 9.94 0 0 1-5.1-1.39l-.36-.22-3.7.97.99-3.6-.23-.37A9.94 9.94 0 1 1 22 12c0 5.51-4.49 10-10 10zm5.14-7.6c-.27-.14-1.59-.79-1.84-.88-.25-.1-.43-.14-.61.14s-.7.88-.86 1.06c-.16.18-.32.2-.6.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.57-1.47-1.84-.15-.27-.02-.41.12-.55.12-.11.27-.3.41-.45.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.99 2.66 1.12 2.84c.14.18 1.95 2.98 4.74 4.18.66.28 1.18.45 1.58.57.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
          </svg>
          <span>Konsultasi Gratis!!</span>
        </a>
      <header>
        <Navbar notelp={noTelp}/>
      </header>
      <main>
        <Header service1={service1} jumlahService1={jumlahService1} service2={service2} jumlahService2={jumlahService2} service3={service3} jumlahService3={jumlahService3}/>
        <Section about={about} notelp={noTelp}/>
      </main>
      <footer>
        <Footer alamat={alamat} notelp={noTelp} linkGps={linkGps}/>
      </footer>
    </div>
  );
}
