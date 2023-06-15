'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

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
        <div>
            <form onSubmit={atualizar}> 
                <input
                    type="text"
                    placeholder='Titulo:'
                    nome="titulo"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input
                    type="date"
                    placeholder='data de cadastro:'
                    nome="data_cadastro"
                    onChange={e => setData_Cadastro(e.target.value)}
                /><br/>
                <input
                    type="number"
                    placeholder='preço:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                  <input
                    type="text"
                    placeholder='descricao:'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                /><br/>
                 <input
                    type="text"
                    placeholder='imagem:'
                    nome="imagem"
                    onChange={e => setImagem(e.target.value)}
                /><br/>

                  <button onClick={e => e.preventDefault(atualizar())}>ATUALIZAR</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}