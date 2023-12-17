'use client'
//import '../styles/globals.css';
import Data from "Data/Data.json";
// import Footer from '@/components/Footer'
import React, { useState, useEffect } from 'react';
import {NextUIProvider} from "@nextui-org/react";
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProductOverview from '@/components/ProductOverview'
import Product from '@/components/Product'
import About from '@/components/About'
import ArticleList from '@/components/ArticleList'
import Footer from '@/components/Footer'
/*

 */

export default function Home() {
  return (
      <NextUIProvider>
      <main id="home">
        <Nav />
        <Hero />
        <ProductOverview />
        <About />
        <ArticleList />
        <Footer />
      </main>
        </NextUIProvider>
  )
}
