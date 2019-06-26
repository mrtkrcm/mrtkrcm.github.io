import React from 'react'
import { storiesOf } from '@storybook/react'

import HelloWorld from '../components'
import Intro from '../components/Intro'

storiesOf('Welcome', module).add('Introduction', () => <Intro />)

storiesOf('samples', module).add('simple component', () => <HelloWorld />)
