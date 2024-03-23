import PedraRifa from '@/components/PedraRifa'
import GetAll from './actions/GetAll'
import Create from './actions/Create'

export default async function Home() {

  const listaRifas = await GetAll()
  console.log(listaRifas)

  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className=' flex p-2 w-full h-16 bg-[#FF6800] text-xl font-bold text-[#434343] justify-center items-center'>Rifa em prol do Encontro Paraibano de Empresas Juniores (NEGO)</div>
      <div className='w-full mt-5'>

      <ul className='relative grid grid-cols-4  md:grid-cols-10 flex-wrap gap-2 justify-between px-5'>
        {listaRifas.map(rifa => <PedraRifa numero={rifa.id} vendido={false} key={rifa.id}/> )}
      </ul>
      </div>
    </main>
  )
}
