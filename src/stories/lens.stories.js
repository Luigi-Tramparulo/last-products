import React from 'react';
import { storiesOf } from '@storybook/react'
import Header from '../components/header'
import '../index.css'

storiesOf('Header', module)
  .add('header', () => <Header />)
