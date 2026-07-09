import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Dela_Gothic_One, Bai_Jamjuree, Open_Sans } from 'next/font/google';

const delta_gothic_one = Dela_Gothic_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-titulo',
})

const bai_jamjuree = Bai_Jamjuree({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-principal',
})

const open_sans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-secundaria',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  
}) {
  return (
    <html lang="pt-BR">
      <body className={`${delta_gothic_one.variable} ${bai_jamjuree.variable} ${open_sans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}