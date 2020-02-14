import React from 'react';
import { storiesOf } from '@storybook/react'
import Cart from '../components/cart'
import '../index.css'

storiesOf('Cart', module)
  .add('Cart', () => <Cart />)
