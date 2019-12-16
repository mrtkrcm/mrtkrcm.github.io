import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

function ContactPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title='Contact' />
      <section>
        <form className='mx-auto md:w-1/2'>
          <p className='mb-8 leading-loose'>
            Here is an example of a form built using Tailwind. More form examples are available{` `}
            <a
              className='font-bold text-gray-700 no-underline'
              href='https://tailwindcss.com/docs/examples/forms'
            >
              here
            </a>
            .
          </p>

          <label className='block mb-2 text-xs font-bold uppercase' htmlFor='first-name'>
            First Name
          </label>

          <input
            className='block w-full px-3 py-2 mb-6 text-gray-700 bg-gray-200 appearance-none rounded-md'
            id='first-name'
            placeholder='Bill'
            type='text'
          />

          <label className='block mb-2 text-xs font-bold uppercase' htmlFor='last-name'>
            Last Name
          </label>

          <input
            className='block w-full px-3 py-2 mb-6 text-gray-700 bg-gray-200 appearance-none rounded-md'
            id='last-name'
            placeholder='Murray'
            type='text'
          />

          <label className='block mb-2 text-xs font-bold uppercase' htmlFor='message'>
            Message
          </label>

          <textarea
            className='w-full px-3 py-2 mb-6 text-gray-700 bg-gray-200 appearance-none rounded-md'
            id='message'
            placeholder='Say something...'
            rows='8'
          />

          <button className='px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600'>
            Submit
          </button>
        </form>
      </section>
    </Layout>
  )
}

export default ContactPage
