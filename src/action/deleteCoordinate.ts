"use server"

import prisma from "@/libs/db";
import { revalidatePath } from "next/cache";

export async function deleteCoordinate(i:unknown, id: number) {
    console.log(id);
    await prisma.coordinate.delete({
        where: {
            id
        }
    })
    revalidatePath("/dashboard")
}