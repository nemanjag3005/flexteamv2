import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Hero from '../components/Landing/Hero';
import TicketSection from '../components/Landing/TicketSection';
import NewsSection from '../components/Landing/NewsSection';
import Footer from '../components/Footer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Hero toggle={toggle} isOpen={isOpen}/>
        <TicketSection />
        <NewsSection />
        <Footer />
      </div>
      
  )
}
