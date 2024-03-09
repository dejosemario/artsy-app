import SideNav from '@/components/molecules/sideNav'
import Products from '@/components/molecules/productsCard'
import React from 'react'

export default function Marketplace() {
  return (
    <section className='container'>
      <SideNav />
      <Products />
    </section>
  )
}
