"use client"

import { useEffect,useState } from "react";

export default function Project({params}){

 const [keys,setKeys] = useState([]);
 const [newKey,setNewKey] = useState("");

 async function load(){
  const res = await fetch(`/api/key/${params.id}`);
  setKeys(await res.json());
 }

 async function createKey(){

  await fetch(`/api/key/${params.id}`,{
   method:"POST",
   body:JSON.stringify({key:newKey})
  });

  setNewKey("");
  load();
 }

 useEffect(()=>{ load(); },[])

 return(
  <main style={{padding:"40px"}}>

   <h1 style={{color:"#22c55e"}}>Projeto Keys</h1>

   <input
    placeholder="Nova Key"
    value={newKey}
    onChange={e=>setNewKey(e.target.value)}
   />

   <button onClick={createKey} style={{marginLeft:"10px"}}>
    Criar Key
   </button>

   <table style={{width:"100%",marginTop:"30px",background:"#111827"}}>
    <thead>
     <tr>
      <th>Key</th>
      <th>Usada</th>
      <th>Device</th>
     </tr>
    </thead>

    <tbody>
     {keys.map(k=>(
      <tr key={k.id}>
       <td>{k.key}</td>
       <td>{k.used?"Sim":"Não"}</td>
       <td>{k.device}</td>
      </tr>
     ))}
    </tbody>
   </table>

  </main>
 )
}
