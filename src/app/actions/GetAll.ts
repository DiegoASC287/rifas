'use server'

import prisma from "@/libs/prisma"

export default async function GetAll() {
    const pedras = await prisma.pedra.findMany()
    return pedras
}
