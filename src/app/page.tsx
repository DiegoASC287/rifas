import PedraRifa from '@/components/PedraRifa'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className=' flex p-2 w-full h-16 bg-[#FF6800] text-xl font-bold text-[#434343] justify-center items-center'>Rifa em prol do Encontro Paraibano de Empresas Juniores (NEGO)</div>
      <div className='w-full mt-5'>

      <ul className='grid grid-cols-5  md:grid-cols-10 flex-wrap gap-2 justify-between px-5'>
        {Array.from({length: 100}).map((e, i) => <PedraRifa 
        numero={i+1} vendido={true} key={i}/>)}
      </ul>
      </div>
    </main>
  )
}
