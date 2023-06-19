'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function Atualizar({params}) {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_Cadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

   const idinteiro = parseInt(params.id)

    const atualizar = () => {
        
        
        const produto = {
            titulo: titulo,
            data_cadastro: data_cadastro,
            preco: preco,
            descricao:descricao,
            imagem:imagem,
            id: idinteiro
       
        }
    const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produtos", {
            method: "PUT",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }


    return (
        <div className="bg-white">

        <div className="grid justify-items-center h-80">
        <img className="w-3/5 h-3/5" src='https://i.kym-cdn.com/news/posts/original/000/002/303/cover5.jpg'></img>
        </div>

        <h1 className="bg-red-500 text-white font-bold font-mono text-5xl p-10 text-center mt-14">FREDDY FAZBEAR'S PIZZARIA</h1>

        
        <nav className="flex justify-center bg-red-800">
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/"> HOME </Link>
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/cadastro"> CADASTRAR </Link>
  <Link className="mx-4 bg-red-500 text-center text-white text-lg md:text-xl font-semibold py-4 md:py-6 px-6 md:px-8 rounded m-2
  transition ease-in-out hover:bg-white duration-300 hover:text-black" href="/cardapio"> CARDÁPIO </Link>
</nav>
        <h2 className="text-red-500 font-mono text-4xl mt-24 ml-48">Realizar</h2>
        <h1 className="text-red-500 font-mono font-bold text-5xl ml-48">ATUALIZAÇÃO</h1>
        <div className="bg-red-500 w-72 h-2 mt-5 ml-48 rounded"></div>

        <div className="max-w-screen-5xl mt-10">
            <div className="w-4/5 ml-48 mt-12 rounded flex justify-center">
            <form className="shadow-xl" onSubmit={atualizar}> 
                <input className="bg-zinc-300 text-black w-96 h-16 text-xl font-mono rounded mt-4 ml-4 p-5"
                type="text" placeholder='TÍtulo:' nome="titulo" value={titulo} onChange={e => setTitulo(e.target.value)}/><br/>
                <input className="bg-zinc-300 text-black w-96 h-16 text-xl font-mono rounded mt-4 ml-4 p-5"
                type="date" placeholder='Data de Cadastro:' nome="data_cadastro" onChange={e => setData_Cadastro(e.target.value)}/><br/>
                <input className="bg-zinc-300 text-black w-96 h-16 text-xl font-mono rounded mt-4 ml-4 p-5"
                type="number" placeholder='Preço:' nome="preco" onChange={e => setPreco(e.target.value)}/><br/>
                <input className="bg-zinc-300 text-black w-96 h-16 text-xl font-mono rounded mt-4 ml-4 p-5"
                type="text" placeholder='Descrição:'nome="descricao"onChange={e => setDescricao(e.target.value)}/><br/>
                <input className="bg-zinc-300 text-black w-96 h-16 text-xl font-mono rounded mt-4 ml-4 p-5"
                type="text" placeholder='Imagem:'nome="imagem"onChange={e => setImagem(e.target.value)}/><br/>

                
                <div className="flex justify-center mt-12 mb-10">
                <div  className="bg-red-500 text-center text-white text-xl font-semibold w-52 p-5 rounded-bl-lg
        transition ease-in-out hover:bg-zinc-300 duration-300 hover:text-black">
                <button onClick={e => e.preventDefault(atualizar())}>ATUALIZAR</button>
                </div>

                <div className="bg-red-500 text-center text-white text-xl font-semibold w-52 p-5 rounded-br-lg
        transition ease-in-out hover:bg-zinc-300 duration-300 hover:text-black"><a href='/'>VOLTAR</a></div>
                <div>
                </div>
                </div>
            </form>
            </div>
            </div>
        </div>
    );
}