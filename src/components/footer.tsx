'use client'
import { MessageCircle, MapPin } from 'lucide-react';
import { poppins, poppinsSB } from '@/fonts/font';

type Footer = {
alamat:string,
notelp:string,
linkGps:string
}

export default function Footer ({alamat, notelp, linkGps}:Footer) {
  return (
    <div className="w-full bg-[#372415] rounded-t-lg pt-10 text-white pb-20 mt-30" id="contact">
      <p id='contact' className={`${poppinsSB.className} text-[24px] text-center`}>drafteraja</p>

      <div
        className={`
          ${poppins.className}
          flex flex-col items-center text-center gap-6
          sm:flex-col
          md:flex-row md:justify-evenly md:items-start
          mt-10 px-6
        `}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <MessageCircle size={18} />
            <p>WhatsApp</p>
          </div>
          <a href={`https://wa.me/${notelp}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
            CS: {notelp}
          </a>
        </div>

        <div className="space-y-2 max-w-md">
          <div className="flex items-center justify-center gap-2">
            <MapPin size={18} />
            <p>Alamat</p>
          </div>
          <address>
            <a
              href={linkGps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {alamat}
            </a>
          </address>
        </div>
      </div>
    </div>
  );
}
