import {  useContext, useState } from "react";
import "./estilo.modules.css";
import avatar from "../../assets/img/avatar.jpg";
import { nomeContexto } from "../Body";



export function SaidaUsuario({ name }: { name: string |undefined }){
    let {nome} = useContext(nomeContexto) 
        
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
            
                <p>Mussum Ipsum, cacilds vidis litro abertis.</p>
                <p> Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. </p>
                <p>Aenean sit amet nisi.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. 
                    Sed non consequat odio.</p>
                <p>Quem num gosta di mim que vai caçá sua turmis!Manduma pindureta quium dia nois paga.</p>
            </div>
        </article>
    );
}