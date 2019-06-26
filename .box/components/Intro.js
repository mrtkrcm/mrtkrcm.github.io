import React from 'react'

//
const Main = props => (
  <article
    {...props}
    style={{
      padding: 15,
      lineHeight: 1.4,
      fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
      backgroundColor: '#fff'
    }}
  />
)

//
const Title = ({ children, ...props }) => <h1 {...props}>{children}</h1>

//
const Link = ({ children, href, ...props }) => (
  <a
    href={href}
    {...props}
    style={{
      color: '#1474f3',
      textDecoration: 'none',
      borderBottom: '1px solid #1474f3',
      paddingBottom: 2
    }}
  >
    {children}
  </a>
)

//
const Note = props => (
  <p
    {...props}
    style={{
      opacity: 0.5
    }}
  />
)

//
const Intro = props => (
  <Main>
    <Title>Welcome to MFP Sandbox</Title>

    <p>This is a UI component dev environment for MCH Multi-Fair (web) Platforms</p>
    <p>There are some simple examples included for your quick start.</p>
    <p>
      Just like that, you can add your own components as stories.
      <br />
      You can also edit those components and see changes right away.
      <br />
      (Try editing the <strong>Button</strong> stories located at{' '}
      <strong>src/stories/index.js</strong>
      .)
    </p>

    <blockquote>
      Technically, a story is a function that returns something that can be rendered to screen.
    </blockquote>

    <p>
      It's recommended to create stories with smaller UI components in the app.
      <br />
      Have a look at the{' '}
      <Link
        href="https://storybook.js.org/basics/writing-stories"
        target="_blank"
        rel="noopener noreferrer"
      >
        Writing Stories
      </Link>{' '}
      section to get better understanding before jump in.
    </p>

    <Note>
      <b>NOTE:</b>
      <br />
      The <strong>.box </strong> directory doesn't contain neither any business logic nor component.
      <br />
      All your business logic and components must live outside of <strong>.box</strong> directory,
      <br />
      and only to be get imported in the <strong>.box</strong> for prototyping and showcase.
    </Note>
  </Main>
)

export default Intro
