'use client'

import { useRouter } from "next/navigation";
import Link from 'next/link';

export default async function Produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }
    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3003/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();


    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3003/produtos", {
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
        <div>
        <div className={`grid justify-items-center h-80`}>
        <img className={`w-3/5 h-3/5`} src='https://i.kym-cdn.com/news/posts/original/000/002/303/cover5.jpg'></img>
        </div>

        <h1 className={`bg-red-500 text-white font-bold font-mono text-5xl p-10 text-center mt-14`}>FREDDY FAZBEAR'S PIZZARIA</h1>

        
        <div className={`bg-red-800 flex justify-center`}>
        <Link className={`bg-red-500 text-center text-white text-xl font-semibold w-48 p-6 rounded m-2
        transition ease-in-out hover:bg-white duration-300 hover:text-black 'voltar'`}  href="/"> HOME </Link>
        <Link className={`bg-red-500 text-center text-white text-xl font-semibold w-48 p-6 rounded m-2
        transition ease-in-out hover:bg-white duration-300 hover:text-black`} href="/cadastro"> CADASTRAR </Link>
        <Link className={`bg-red-500 text-center text-white text-xl font-semibold w-48 p-6 rounded m-2
        transition ease-in-out hover:bg-white duration-300 hover:text-black`} href="/cardapio"> CARDÁPIO </Link>
        </div>       
            
        <div className={`flex justify-center`}>
        <img className={`w-2/5 h-1/2 mt-48`} src={produto.imagem}></img>
        <div className={`bg-red-500 w-screen h-max p-60`}>
            <p className={`text-white font-semibold font-mono text-center text-3xl mt-3`}>PIZZA - {produto.titulo}</p>
            <div className={`flex justify-center mt-5`}>
            <p className={`text-white font-semibold font-mono text-center text-2xl`}>Ingredientes: </p>
            <p className={`text-red-500`}>.</p>
            <p className={`text-white font-mono text-center text-xl mt-1`}> {produto.descricao}</p>
            </div>
            <div className={`flex justify-center mt-5`}>
            <p className={`text-white font-semibold font-mono text-center text-2xl`}>Data de Cadastro: </p>
            <p className={`text-red-500`}>.</p>
            <p className={`text-white font-mono text-center text-xl mt-1`}> {produto.data_cadastro}</p>
            </div>
            <p className={`text-white font-semibold font-mono text-center text-3xl mt-5`}>R${produto.preco}</p>
            
            
            <div className={`flex justify-center mt-12`}>

            <div className={`bg-red-800 text-center text-white text-xl font-semibold w-60 p-5 m-2 rounded
        transition ease-in-out hover:bg-zinc-300 duration-300 hover:text-black`}>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>
            </div>

            <div className={`bg-red-800 text-center text-white text-xl font-semibold w-60 p-5 m-2 rounded
        transition ease-in-out hover:bg-zinc-300 duration-300 hover:text-black`}><a href='/'>VOLTAR</a></div>
            </div>
        </div>
        </div>

        </div>

    )
}