
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

  const isPersonalSegment =
  children.props && // Check if children.props is defined
  children.props.childProp && // Check if children.props.childProp is defined
  children.props.childProp.segment !== 'personal';

  return (
    <html lang="en"  suppressHydrationWarning={true}>

          <body  className={ isPersonalSegment?'bg-gold min-h-screen relative font-mono ' + inter.className:""} >
            {isPersonalSegment ?
            <DataProvider>
              <Header />
              <div className='container mx-auto pb-20'>
                {children}
              </div>
              <Footer />
            </DataProvider>
            :
            <div className='container mx-auto pb-20'>
              {children}
            </div>
            }
            </body>
        

      
    </html>
  )
}
