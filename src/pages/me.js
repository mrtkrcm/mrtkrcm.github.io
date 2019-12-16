import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import programming from '../images/programming.svg'

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title='About' />
      <div className='flex flex-wrap'>
        <div className='w-full mb-4 bg-gray-500 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'></div>
        <div className='w-full mb-4 bg-gray-400 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'></div>
        <div className='w-full mb-4 bg-gray-500 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'></div>
        <div className='w-full mb-4 bg-gray-400 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'></div>
        <div className='w-full mb-4 bg-gray-500 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6'></div>
        <div className='w-full mb-4 bg-gray-400 sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6'></div>
      </div>
      <section className='flex flex-col items-center md:flex-row'>
        <figure className='w-full'>
          <img alt='A dog relaxing' src={programming} />
        </figure>
      </section>
    </Layout>
  )
}

export default AboutPage
