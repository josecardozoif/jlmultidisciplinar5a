"use client"
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {

  const req = await fetch("https://joselucasmultidisciplinar5a.vercel.app/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main className='container mx-auto'> 
        <div className="grid justify-items-center h-80">
        <Image width={300} height={300} className='w-full max-w-xs mx-auto' src='https://i.kym-cdn.com/news/posts/original/000/002/303/cover5.jpg'></Image>
        </div>

        <h1 className='text-5xl p-10 font-bold text-center bg-red-500 text-white font-bold font-mono '>FREDDY FAZBEAR'S PIZZARIA</h1>

        
 <nav className="flex justify-center bg-red-800">
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/"> HOME </Link>
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/cadastro"> CADASTRAR </Link>
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/cardapio"> CARDÁPIO </Link>
</nav>
        

        <h2 className='text-red-500 font-mono text-4xl mt-8 ml-48'>Pizzas</h2>
        <h1 className='text-red-500 font-mono font-bold text-5xl ml-48'>SALGADAS</h1>
        <div className='bg-red-500 w-52 h-2 mt-5 ml-48 rounded'></div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-4'>
        {produtos.map(produtos => (
        <div className='border p-4 shadow-xl rounded mb-10' key={produtos.id}>
          <Image width={300} height={300} className='w-full h-auto mb-4' src={produtos.imagem}></Image>
          <p className="text-lg text-red-500 font-semibold font-mono text-center text-3xl mt-3">{produtos.titulo}</p>
          <p className="text-red-800 h-20 font-mono text-center text-lg m-2">{produtos.descricao}</p>
          <div className='flex justify-between mt-4'>
          <Link className='bg-red-500 text-center text-white text-xl font-semibold w-80 p-5 rounded-bl-lg
        transition ease-in-out hover:bg-zinc-300 duration-300 hover:text-black' href={`/produto/${produtos.id}`}>VER MAIS</Link>
          <Link className='bg-red-500 text-center text-white text-xl font-semibold w-80 p-5 rounded-br-lg
        transition ease-in-out hover:bg-zinc-300 duration-300 hover:text-black' href={`/atualiza/${produtos.id}`}>ATUALIZAR</Link>
          </div>
        </div>
      ))}
        </div>
        
    </main>
  )
}
