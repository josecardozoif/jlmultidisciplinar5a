'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_Cadastro] = useState();
    const [preco, setpreco] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            data_cadastro: data_cadastro,
            preco: preco
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produtos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='Nome:'
                    nome="nome"
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input
                    type="date"
                    placeholder='Idade:'
                    nome="idade"
                    onChange={e => setData_Cadastro(e.target.value)}
                /><br/>
                <input
                    type="number"
                    placeholder='UF:'
                    nome="uf"
                    onChange={e => setpreco(e.target.value)}
                /><br/>
                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}