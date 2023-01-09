import {  useContext, useState } from "react";
import { nomeContexto } from "../Body";
import "./entrada.css";


export function EntradaUsuario(){
    let {nome,setNome} = useContext(nomeContexto) 
    function setInputText(e:string){
        setNome(e);
    }

    return(
         <div className="entrada">
            <label>Quem é você?</label>
            <input type="text" name="lname" 
                  onChange={(e) => {
                    setInputText(e.target.value);
                   }}
                   placeholder={nome}
                   />
         </div>
        );
}


