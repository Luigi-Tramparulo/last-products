import React from 'react';
import { storiesOf } from '@storybook/react'
import OrderComplete from '../components/orderComplete'
import '../index.css'

storiesOf('OrderComplete', module)
  .add('OrderComplete', () => <OrderComplete />)
