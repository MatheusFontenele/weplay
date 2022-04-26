import type { NextPage } from 'next'
import Head from 'next/head'
import Header from 'src/components/Header'
import Navbar from 'src/components/Navbar'
import Sidebar from 'src/components/Sidebar'
import { SliderCards, SliderImages } from 'src/components/Slider'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SliderImages />
      <div className="slider" style={{ margin: '0 5%' }}>
        <SliderCards />
      </div>
      <Sidebar />
    </div>
  )
}

export default Home
