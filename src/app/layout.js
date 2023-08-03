
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/layout/header'
import Footer from '@/layout/footer'
import { DataProvider } from '@/context/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LifeOfSushant',
  description: 'Journey through life\'s wonders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'bg-gold min-h-screen relative font-mono '+ inter.className} suppressHydrationWarning={true} >
      <DataProvider>
        <Header />
        <div className='container mx-auto pb-20'>
          {children}
        </div>
        <Footer />
        </DataProvider>
      </body>
    </html>
  )
}
