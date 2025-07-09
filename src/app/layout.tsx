import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateMetadata } from "@/utils/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateMetadata({
    title: 'Jasa Drafter Autocad Profesional | Shopdrawing, Asbuilt, Gambar Kerja & 3D Visualisasi',
    description:
    'Layanan drafter Autocad terpercaya untuk proyek bangunan Anda. Spesialis Shopdrawing, Asbuiltdrawing, Gambar Kerja, dan Visualisasi 3D. Dikerjakan oleh tim berpengalaman & tepat waktu.',
  url: 'http://drafteraja.my.id/',
  // image: {
  //   url: 'https://namabrand.com/og-home.jpg',
  //   alt: 'Landing Page NamaBrand'
  // },
  keywords: ['jasa desain autocad', 'drafter autocad', 'drafter autocad profesional', 'desain autocad profesional']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        {/* JSON-LD Schema untuk logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "drafteraja jasa drafter autocad",
              "url": "http://drafteraja.my.id/",
              "logo": "http://drafteraja.my.id/logo.png"
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
