'use client'

import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    const codigo = { codigo: parseInt(params.codigo) }

    const codigoJson = JSON.stringify(codigo);

    const req = await fetch("http://localhost:3003/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: codigoJson
    })
    const produtos = await req.json();


    const remover = () => {
        console.log(codigoJson)
        try {
            fetch("http://localhost:3003/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: codigoJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (
        <div>
            <p>{produtos.titulo}</p>
            <p>{produtos.data_cadastro}</p>
            <p>{produtos.preco}</p>
            <p>{produtos.descricao}</p>
            <p>{produtos.imagem}</p>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}