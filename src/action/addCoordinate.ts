"use server"

import prisma from "@/libs/db"


export async function addCoordinate(i: unknown, formData: FormData){
    const latitude = formData.get("latitude") as string
    const longitude = formData.get("longitude") as string
    const keterangan = formData.get("keterangan") as string


    const data = {
        latitude,
        longitude,
        keterangan
    }

    await prisma.coordinate.create({
        data
    })
    
}
