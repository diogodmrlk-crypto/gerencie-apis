"use client"
import { useState } from "react";
import "./globals.css";

export default function Home(){

 const [name,setName] = useState("");
 const [project,setProject] = useState(null);

 async function createProject(){

  const res = await fetch("/api/project",{
   method:"POST",
   body:JSON.stringify({name})
  });

  const data = await res.json();
  setProject(data.id);
 }

 return(
  <main style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>

   <div className="card" style={{width:"350px"}}>

    <h1 style={{color:"#22c55e"}}>MockKey Dashboard</h1>

    <input
     placeholder="Nome do Projeto"
     style={{width:"100%",marginTop:"15px"}}
     onChange={e=>setName(e.target.value)}
    />

    <button style={{width:"100%",marginTop:"15px"}} onClick={createProject}>
     Criar Projeto
    </button>

    {project && (
     <a href={`/project/${project}`} style={{color:"#4ade80",display:"block",marginTop:"15px"}}>
      Abrir Projeto
     </a>
    )}

   </div>

  </main>
 )
}
