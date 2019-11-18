import React, { Component } from 'react'
import Header from './Header'
import SignInScreen from '../Screens/Auth/SignInScreen'
import SignUpScreen from '../Screens/Auth/SignUpScreen'

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <SignInScreen />
        <SignUpScreen />
      </>
    )
  }
}
