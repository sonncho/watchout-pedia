import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import Header from './Header';
import Footer from './Footer';

const Layouts = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default Layouts;