'use client'

import { useRouter } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image'

export default async function Produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }
    const idJson = JSON.stringify(id);

    const req = await fetch("https://joselucasmultidisciplinar5a.vercel.app/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })

    const produto = await req.json();


    const remover = () => {
        console.log(idJson)
        try {
            fetch("https://joselucasmultidisciplinar5a.vercel.app/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }

    return (
        <div className="container mx-auto">
  <div className="container mx-auto grid justify-items-center h-80 md:flex">
    <Image className="w-full max-w-xs mx-auto" src='https://i.kym-cdn.com/news/posts/original/000/002/303/cover5.jpg' alt="Imagem da pizzaria"></Image>
  </div>

  <h1 className="font-bold text-center bg-red-500 text-white font-bold font-mono text-4xl md:text-5xl p-6 md:p-10">FREDDY FAZBEAR'S PIZZARIA</h1>

  <nav className="flex justify-center bg-red-800">
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/"> HOME </Link>
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/cadastro"> CADASTRAR </Link>
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/cardapio"> CARDÁPIO </Link>
</nav>

  <div className="flex flex-col md:flex-row items-center bg-red-500">
    <Image className="w-full md:w-1/2 h-auto mx-auto md:mr-4" src={produto.imagem} alt="Imagem do produto"></Image>
    <div className="w-full md:w-1/2 text-lg bg-red-500">
      <p className="text-white font-semibold font-mono text-center text-3xl py-6">PIZZA - {produto.titulo}</p>
      <div className="text-white font-mono">
        <p className="text-center">Ingredientes:</p>
        <p className="text-center">{produto.descricao}</p>
        <p className="text-center">Data de Cadastro:</p>
        <p className="text-center">{produto.data_cadastro}</p>
        <p className="text-center">R${produto.preco}</p>
      </div>

      <div className="flex justify-center mt-4">
        <div className="bg-red-800 text-center text-white text-xl font-semibold w-60 py-2 px-4 rounded
        transition ease-in-out hover:bg-zinc-300 duration-300 hover:text-black">
          <button onClick={e => e.preventDefault(remover())}>REMOVER</button>
        </div>
        <div className="bg-red-800 text-center text-white text-xl font-semibold w-60 py-2 px-4 rounded
        transition ease-in-out hover:bg-zinc-300 duration-300 hover:text-black">
          <a href='/'>VOLTAR</a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}