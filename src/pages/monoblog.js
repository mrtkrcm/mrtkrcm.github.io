import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title='Blog' />

      <div className='font-sans text-gray-700 bg-gray-100'>
        <div className='flex flex-wrap p-6 sm:p-10 md:p-16'>
          <div className='order-3 w-full md:w-1/2 md:pr-32 md:order-1'>
            <div className='max-w-md leading-loose tracking-tight md:float-right md:text-right md:sticky md:top-0 '>
              <p className='my-4 font-bold md:my-12'>Previous Posts</p>

              <ul className='flex flex-col flex-wrap justify-between'>
                <li>
                  <a href='/' className='nav'>
                    Previous blog posts links
                  </a>
                </li>
                <li>
                  <a href='/' className='nav'>
                    A diam sollicitudin tempor id eue
                  </a>
                </li>
                <li>
                  <a href='/' className='nav'>
                    Lectus vestibulum mattis ullamcorper velit sed ullamcorper
                  </a>
                </li>
                <li>
                  <a href='/' className='nav'>
                    Pulvinar etiam non quam lacus suspendisse faucibus
                  </a>
                </li>
              </ul>
              <a href='/' className='font-bold normal hover:font-bold'>
                more...
              </a>
            </div>
          </div>
          <div className='order-1 w-full md:w-1/2 md:order-2'>
            <div className='max-w-md leading-loose tracking-tight'>
              <h1 className='my-12 font-bold'>Post Title</h1>

              <p className='mb-8'>
                Lorem ipsum dolor sit amet, consectetur <a href='/'>random link</a> adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel risus commodo
                viverra maecenas accumsan lacus vel facilisis volutpat. Vitae aliquet nec
                ullamcorper sit. Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in
                nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam vehicula ipsum
                a arcu. Nec nam aliquam sem et tortor consequat. Eget mi proin sed libero enim sed
                faucibus turpis in. Hac habitasse platea dictumst quisque. In aliquam sem fringilla
                ut. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Accumsan lacus
                vel facilisis volutpat est velit egestas dui id. At tempor commodo ullamcorper a.
                Volutpat commodo sed egestas egestas fringilla. Vitae congue eu consequat ac.
              </p>

              <p className='mb-8'>
                Netus et malesuada fames ac turpis egestas sed. Sociis natoque penatibus et magnis
                dis. Pulvinar etiam non quam lacus suspendisse faucibus. Vulputate mi sit amet
                mauris commodo quis imperdiet massa tincidunt. Eget nullam non nisi est sit amet
                facilisis. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.
                Vulputate mi sit amet mauris commodo quis. Vestibulum mattis ullamcorper velit sed
                ullamcorper morbi tincidunt. Feugiat pretium nibh ipsum consequat nisl vel pretium
                lectus quam. Enim blandit volutpat maecenas volutpat blandit. Scelerisque fermentum
                dui faucibus in ornare. Ultricies tristique nulla aliquet enim tortor at auctor urna
                nunc. Id interdum velit laoreet id. Ut lectus arcu bibendum at varius vel pharetra
                vel turpis.
              </p>

              <p className='mb-8'>
                A diam sollicitudin tempor id eu. Lectus vestibulum mattis ullamcorper velit sed
                ullamcorper. Sit amet facilisis magna etiam tempor. Non diam phasellus vestibulum
                lorem sed risus. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Quam
                quisque id diam vel quam elementum pulvinar etiam. Eu volutpat odio facilisis
                mauris. Molestie ac feugiat sed lectus vestibulum mattis. In vitae turpis massa sed
                elementum tempus egestas sed sed. Sed id semper risus in hendrerit gravida rutrum
                quisque non. Quis lectus nulla at volutpat diam ut venenatis. Ultrices eros in
                cursus turpis massa tincidunt dui. Phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor aliquam. Lobortis mattis aliquam faucibus purus.
                Egestas sed tempus urna et pharetra pharetra. Tellus pellentesque eu tincidunt
                tortor aliquam nulla.
              </p>

              <p className='mb-8'>
                Cras fermentum odio eu feugiat pretium nibh ipsum. Integer vitae justo eget magna
                fermentum iaculis eu non diam. Tellus molestie nunc non blandit massa enim nec dui.
                Ullamcorper morbi tincidunt ornare massa eget egestas. Orci a scelerisque purus
                semper eget duis at tellus at. Consequat id porta nibh venenatis cras sed. Enim eu
                turpis egestas pretium. Mi in nulla posuere sollicitudin aliquam ultrices sagittis
                orci. Dui vivamus arcu felis bibendum. Eu consequat ac felis donec et odio. Ultrices
                gravida dictum fusce ut placerat orci nulla. Leo urna molestie at elementum eu
                facilisis. Vulputate mi sit amet mauris commodo. Eu consequat ac felis donec et odio
                pellentesque.
              </p>
            </div>
          </div>

          <div className='order-4 w-full pt-12 md:w-1/2 md:pr-32 md:pt-0 md:sticky md:bottom-0 md:order-3'>
            <div className='max-w-md leading-loose tracking-tight md:float-right md:text-right md:mb-16'>
              <p className='my-4 font-bold md:my-12'>Contact Me</p>

              <ul className='flex flex-row flex-wrap justify-between md:flex-col'>
                <li>
                  <a href='/' className='mx-2 nav md:mx-0'>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href='/' className='mx-2 nav md:mx-0'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href='/' className='mx-2 nav md:mx-0'>
                    Dribbble
                  </a>
                </li>
                <li>
                  <a href='/' className='mx-2 nav md:mx-0'>
                    etc
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='order-2 w-full md:w-1/2 md:order-4'>
            <div className='max-w-md leading-loose tracking-tight'>
              <p className='my-4 font-bold md:my-12'>About Me</p>

              <p className='mb-8'>
                Arcu risus quis varius quam quisque id diam vel. Consectetur adipiscing elit ut
                aliquam purus sit amet. Nibh tortor id aliquet lectus proin nibh.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
