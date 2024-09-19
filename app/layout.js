import {  Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight:["400", "500","600","700","800","900"] });

export const metadata = {
  title: 'Blured UI',
  description: 'Blured UI is a versatile UI component builder inspired by Shad CN, designed for rapid prototyping and seamless integration in Next.js applications.',
  keywords: 'Blured UI, UI component builder, Next.js, Shad CN, design system, web development, customizable components',
  openGraph: {
    title: 'Blured UI',
    description: 'Create stunning, customizable UI components effortlessly with Blured UI. Perfect for Next.js developers.',
    images: [], 
    url: 'https://blured-ui.vercel.app/',
    site_name: 'Blured UI',
  },
  twitter: {
    title: 'Blured UI',
    description: 'Elevate your web projects with Blured UI, the intuitive UI component builder for Next.js.',
    images: [], 
    card: 'summary_large_image',
    creator: 'bishal',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
