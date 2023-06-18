"use client"
import Link from 'next/link';


export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> 
        <div class={`grid justify-items-center h-80`}>
        <img class={`w-3/5 h-3/5`} src='https://i.kym-cdn.com/news/posts/original/000/002/303/cover5.jpg'></img>
        </div>

        <h1 class={`bg-red-500 text-white font-bold font-mono text-5xl p-10 text-center mt-14`}>FREDDY FAZBEAR'S PIZZARIA</h1>

        
        <div class={`bg-red-800 flex justify-center`}>
        <Link class={`bg-red-500 text-center text-white text-xl font-semibold w-48 p-6 rounded m-2
        transition ease-in-out hover:bg-white duration-300 hover:text-black`} href="/" className='voltar'> HOME </Link>
        <Link class={`bg-red-500 text-center text-white text-xl font-semibold w-48 p-6 rounded m-2
        transition ease-in-out hover:bg-white duration-300 hover:text-black`} href="/cadastro" className='voltar'> CADASTRAR </Link>
        <Link class={`bg-red-500 text-center text-white text-xl font-semibold w-48 p-6 rounded m-2
        transition ease-in-out hover:bg-white duration-300 hover:text-black`} href="/cardapio" className='voltar'> CARDÁPIO </Link>
        </div>
        

        <h2 class={`text-red-500 font-mono text-4xl mt-24 ml-48`}>Nosso</h2>
        <h1 class={`text-red-500 font-mono font-bold text-5xl ml-48`}>CARDÁPIO</h1>
        <div class={`bg-red-500 w-52 h-2 mt-5 ml-48 rounded`}></div>

        <div class={`grid grid-cols-3 gap-3 max-w-screen-2xl shadow-lg`}>
        {produtos.map(produtos => (
        <div class={`w-4/5 ml-48 mt-12 shadow-xl rounded mb-10`} key={produtos.id}>
          <img class={`w-96 ml-2`} src={produtos.imagem}></img>
          <p class={`font-semibold font-mono text-center text-3xl mt-3`}>{produtos.id}: {produtos.titulo}</p>
          <p class={`h-20 font-mono text-center text-lg m-5`}>{produtos.descricao}</p>
          <div class={`flex justify-center`}>
          <Link class={`bg-zinc-300 text-center text-black text-xl font-semibold w-52 p-5 rounded-bl-lg
        transition ease-in-out hover:bg-red-500 duration-300 hover:text-white`} href={`/produto/${produtos.id}`}>VER MAIS</Link>
          <Link class={`bg-zinc-300 text-center text-black text-xl font-semibold w-52 p-5 rounded-br-lg
        transition ease-in-out hover:bg-red-500 duration-300 hover:text-white`} href={`/atualiza/${produtos.id}`}>ATUALIZAR</Link>
          </div>
        </div>
      ))}
        </div>
    </main>
  )
}
