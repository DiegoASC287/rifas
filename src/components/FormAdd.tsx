'use client';
import { IconX } from "@tabler/icons-react";
import { useState } from "react";

interface FormAddProps{
    atualizarClicou: () => void
    pedra: number

}
export default function FormAdd({atualizarClicou, pedra}:FormAddProps){
    const [nomeComprador, setNomeComprador] = useState<string>("")
    return <div className="absolute top-0 left-0 w-full h-full flex p-5">
    <div className="w-full h-full bg-zinc-200 flex p-2">
        <div className="flex-grow">
            <div className=" p-1">Pedra {pedra}</div>
            <input type="text" className="bg-red-500" value={nomeComprador} onChange={e => setNomeComprador(e.target.value)} />
        </div>
        <div>
            <button className="" onClick={(e) => atualizarClicou()}>
            <IconX size={30}/>
            </button>
        </div>
    </div>
</div>
}