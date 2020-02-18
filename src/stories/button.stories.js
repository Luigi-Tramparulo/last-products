import React from 'react';
import { storiesOf } from '@storybook/react'
import Buttons from '../components/button'
import '../index.css'

storiesOf('Buttons', module)
  .add('Buttons', () => <Buttons />)
