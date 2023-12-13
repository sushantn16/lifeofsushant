import Link from 'next/link';
import Header from '@/layout/header';
import { DataProvider } from '@/context/data';
import Footer from '@/layout/footer';

export default function NotFound() {
  return (
    <div className='text-center mt-10'>
      <div className='container mx-auto text-2xl text-orange'>Page Not Found</div>
      <Link href="/" className='text-orange text-xl hover:underline'>Return Home</Link>
    </div>
  )
}