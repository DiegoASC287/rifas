'use server'

import prisma from "@/libs/prisma"

export default async function Create() {
    Array.from({length: 100}).map(async (e, i) => await prisma.pedra.create({
        data: {
            id: i+1,
        }
    }
    ))
}
