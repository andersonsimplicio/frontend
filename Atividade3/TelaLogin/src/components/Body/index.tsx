import { createContext, useState } from "react";
import './body.modules.css';
import {EntradaUsuario } from "../EntradaUsuario";
import { SaidaUsuario } from "../SaidaUsuario";


interface nomeContextType {
    nome:string|undefined;
    setNome:(nome:string|undefined)=>void
}

export const nomeContexto = createContext({} as nomeContextType);

export function Body(){
    const[nome,setName] = useState<string|undefined>(""); 
    function setNome(nome:string|undefined){
        setName(nome);
    }

    return(
       < nomeContexto.Provider value={{nome,setNome}}>
       <div className="corpo">               
                <EntradaUsuario
                />
                <SaidaUsuario 
                   name="Anderson Jose Simplicio"
                />
       </div>
       </ nomeContexto.Provider> 
    );
}