"use client"
import DashboardLayout from '@/layouts/DashboardLayout'
import dynamic from 'next/dynamic'
import React from 'react'

const Map = dynamic( () => import("@/layouts/Map"), {ssr: false})

const page = () => {
  return (
    <DashboardLayout>
        <Map />
    </DashboardLayout>
  )
}

export default page
