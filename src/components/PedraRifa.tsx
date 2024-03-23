'use client';
import { IconCheck, IconX } from "@tabler/icons-react";
import { useState } from "react"
import FormAdd from "./FormAdd";

interface PedraRifaProps{
    numero: number
    vendido: boolean
    vendedor?: string
    comprador?: string
    contatoComprador?: string
}
export default function PedraRifa(props: PedraRifaProps){
    const [clicou, setClicou] = useState<boolean>(false)
    function renderizarVendidos(){

    }

    function renderizarPedra(){
            return <li className="border-2 border-[#FF6800] h-12 shadow-md shadow-zinc-300 bg-white  rounded-md p-2 text-2xl hover:bg-zinc-200">
                <button onClick={e => setClicou(true)} className="flex w-full justify-around items-center">

                <div>{props.numero}</div>
                {props.vendido? <IconCheck color="#FF6800" size={30}/>: null}
                </button>
                {clicou ? <FormAdd pedra={props.numero} atualizarClicou={() => setClicou(false)}/> : null}
                
            </li>
    }
    return renderizarPedra()
}