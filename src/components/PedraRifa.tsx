'use client';
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react"

interface PedraRifaProps{
    numero: number
    vendido: boolean
    vendedor?: string
    comprador?: string
    contatoComprador?: string
}
export default function PedraRifa(props: PedraRifaProps){
    const [vendido, setVendido] = useState<boolean>(false)

    function renderizarVendidos(){

    }

    function renderizarPedra(){
            return <li className="border-2 border-[#FF6800] h-12 shadow-md shadow-zinc-300 bg-white  rounded-md p-2 text-2xl hover:bg-zinc-200">
                <button className="flex w-full justify-around items-center">

                <div>{props.numero}</div>
                {props.vendido? <IconCheck color="#FF6800" size={30}/>: null}
                </button>
                
            </li>
    }
    if(vendido){
        return 
    }
    return renderizarPedra()
}