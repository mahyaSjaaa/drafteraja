// lib/seo.ts
type GenerateSeoProps = {
  title?: string
  description?: string
  url?: string
  image?: {
    url: string
    alt?: string
  }
  keywords?: string[]
}

export function generateMetadata({
    title= 'Jasa Drafter Autocad Profesional | Shopdrawing, Asbuilt, Gambar Kerja & 3D Visualisasi',
    description= 'Layanan drafter Autocad terpercaya untuk proyek bangunan Anda. Spesialis Shopdrawing, Asbuiltdrawing, Gambar Kerja, dan Visualisasi 3D. Dikerjakan oleh tim berpengalaman & tepat waktu.',
  url = 'http://drafteraja.my.id/',
//   image = {
//     url: 'https://namabrand.com/og-image.jpg',
//     alt: 'Jasa Website UMKM',
//   },
  keywords = ['jasa desain autocad', 'drafter autocad', 'drafter autocad profesional', 'desain autocad profesional']
}: GenerateSeoProps = {}) {
  return {
    title,
    description,
    keywords,
    metadataBase: new URL('http://drafteraja.my.id/'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'drafteraja',
    //   images: [
    //     {
    //       url: image.url,
    //       alt: image.alt || title,
    //     },
    //   ],
      type: 'website',
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title,
    //   description,
    //   images: [image.url],
    // },
    robots: {
      index: true,
      follow: true,
    },
  }
}
