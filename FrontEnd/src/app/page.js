"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.id}>
          <p>{produtos.titulo}</p>
          <p>{produtos.descricao}</p>
          <img src={produtos.imagem}></img>
          <Link href={`/produto/${produtos.id}`}>ver mais</Link><br/>
          <Link href={`/atualiza/${produtos.id}`}>atualizar</Link>
        </div>
      ))}
    </main>
  )
}
