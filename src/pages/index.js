import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import guySvg from '../images/guy.svg'

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title='Home' />

      <section className='text-center'>
        <img alt='illustration' className='block w-1/2 mx-auto' src={guySvg} />

        <h2 className='inline-block p-3 my-8 text-2xl font-bold bg-yellow-400'>
          my personal playground
        </h2>
      </section>
    </Layout>
  )
}

export default IndexPage
