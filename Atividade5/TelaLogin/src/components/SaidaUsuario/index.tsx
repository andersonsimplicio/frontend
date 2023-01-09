import {  useContext, useState, useEffect} from "react";
import "./estilo.modules.css";
import avatar from "../../assets/img/avatar.jpg";
import avalogout from "../../assets/img/Logout.png";
import { nomeContexto } from "../Body";


type Item = {
    id:number;
    value:string;
    estilo:string;
}

export function SaidaUsuario({ name }: { name: string |undefined }){
    let {nome} = useContext(nomeContexto); 
    const[texto,setTexto] = useState<string>(""); 
    const[tam,setTamTexto] = useState(0); 
    const[login,setLogin] = useState<boolean>(false);

    useEffect(()=>{
        setTamTexto(texto.length);
    },[texto])
        
    const setInputText = (value: string) =>{
       setTexto(value);   
    }
    const logar = () =>{
        setLogin(true);
    }
    const logout = () =>{
        setLogin(false);
    }


    if(login){
                return  (
                    <article className="cmpAvatar">
                        <header>
                            <div className="autor">
                                <img className="avatar" src={avatar} />
                                <div className="autorinfo">
                                    <strong>{nome==""?name:nome}</strong>
                                    <span>Ciêntista de Dados</span>
                                </div>
                                </div>
                            <time dateTime="2022-11-14 8:00:00">Publicado a 1 mês</time>
                        </header>
                        <div className="conteudo">
                            Sobre Autor: <a href="https://andersonsimplicio.github.io/works/" target="_blank">https://andersonsimplicio.github.io/works/</a>
                        </div>
                        <div className="conteudo-dois">
                            <input type="text" name="lname" id="entrada"
                                value={texto}
                                onChange={(e) => {
                                    setInputText(e.target.value);
                                }}
                                placeholder="Digite Aqui"
                                />
                            <h2>Numero de Caracter {tam}</h2>
                        </div>
                        <div className="conteudo-dois">
                        <a className="buttonClass" onClick={()=>logout()}>Logout</a>
                        </div>
                    </article>
                );
    }else{
        return  (
            <article className="cmpAvatar">
                <header>
                    <div className="autor">
                        <img className="avatar" src={avalogout} />
                        <div className="autorinfo">
                            <strong>Zé Ninguém</strong>
                            <span>Favor Fazer Login</span>
                        </div>
                        </div>
                    <time dateTime="2022-11-14 8:00:00">Publicado a 1 mês</time>
                </header>
                <div className="conteudo">
                    Sobre Autor: <a href="https://andersonsimplicio.github.io/works/" target="_blank">https://andersonsimplicio.github.io/works/</a>
                </div>
                <div className="conteudo-dois">
                <a className="buttonClass" onClick={()=>logar()}>Login</a>
                </div>
                
            </article>
        );
    }
}