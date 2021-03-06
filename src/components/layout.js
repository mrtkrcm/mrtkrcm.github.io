import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'

function Layout({children}) {
  return (
    <div className='flex flex-col min-h-screen font-sans text-gray-900'>
      <Header />

      <main className='flex flex-col flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:justify-center md:p-8'>
        {children}
      </main>

      <footer className='bg-gray-500'>
        <nav className='flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8'>
          <p className='text-white'>
            Created by{` `}
            <a
              className='font-bold text-white no-underline'
              href='https://www.linkedin.com/in/muratkaracam/'
            >
              murat karacam
            </a>
          </p>

          <p>
            <a className='font-bold text-white no-underline' href='https://github.com/mrtkrcm/'>
              GitHub
            </a>
            <a
              className='pl-5 font-bold text-white no-underline'
              href='https://twitter.com/mrtkrcm/'
            >
              Twitter
            </a>
          </p>
        </nav>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
