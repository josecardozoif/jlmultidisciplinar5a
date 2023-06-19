"use client"
import Link from 'next/link';


export default async function Cardapio() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main className='container mx-auto'> 
        <div className="grid justify-items-center h-80">
        <img className="w-full max-w-xs mx-auto" src='https://i.kym-cdn.com/news/posts/original/000/002/303/cover5.jpg'></img>
        </div>

        <h1 className="bg-red-500 text-white font-bold font-mono text-5xl p-10 text-center ">FREDDY FAZBEAR'S PIZZARIA</h1>

        
        <nav className="flex justify-center bg-red-800">
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/"> HOME </Link>
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/cadastro"> CADASTRAR </Link>
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/cardapio"> CARDÁPIO </Link>
</nav>
        

        <h2 className="text-red-500 font-mono text-4xl mt-24 ml-48">Nosso</h2>
        <h1 className="text-red-500 font-mono font-bold text-5xl ml-48">CARDÁPIO</h1>
        <div className="bg-red-500 w-52 h-2 mt-5 ml-48 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-4 max-w-screen-2xl shadow-lg">
        {produtos.map(produtos => (
        <div className="border p-4  shadow-xl rounded mb-10" key={produtos.id}>
          <img className="w-full h-auto mb-4" src={produtos.imagem}></img>
          <p className="font-semibold font-mono text-center text-3xl mt-3">{produtos.id}: {produtos.titulo}</p>
          <p className="h-20 font-mono text-center text-1xl m-5">{produtos.descricao}</p>
          <div className="flex justify-between mt-4">
          <Link className="bg-zinc-300 text-center text-black text-xl font-semibold w-52 p-5 rounded-bl-lg
        transition ease-in-out hover:bg-red-500 duration-300 hover:text-white" href={`/produto/${produtos.id}`}>VER MAIS</Link>
          <Link className="bg-zinc-300 text-center text-black text-xl font-semibold w-52 p-5 rounded-br-lg
        transition ease-in-out hover:bg-red-500 duration-300 hover:text-white" href={`/atualiza/${produtos.id}`}>ATUALIZAR</Link>
          </div>
        </div>
      ))}
        </div>
    </main>
  )
}
