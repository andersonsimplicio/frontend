import {  useContext, useState,KeyboardEvent, useEffect} from "react";
import "./estilo.modules.css";
import avatar from "../../assets/img/avatar.jpg";
import { nomeContexto } from "../Body";
import {CheckBoxList} from "../CheckBoxList";

type Item = {
    id:number;
    value:string;
    estilo:string;
}

export function SaidaUsuario({ name }: { name: string |undefined }){
    let {nome} = useContext(nomeContexto); 
    const[id,setId] = useState(0);  
    const[texto,setTexto] = useState<string>(""); 
    const [lista,setLista] = useState<Item[]>([]);


    const handlerDeleteItem = (valor:Item)=>{
        var filter:Item[]= lista.filter((item)=>item.id!==valor.id);
        setLista(filter);
    }

    const handlerEditItem = (oldvalor:Item,newValor:Item,lista:Item[])=>{
        if(newValor.value!==''){
          let posicao:number = lista.findIndex(item => item.id ===oldvalor.id);
          lista[posicao]=newValor;
        }
    }


    const keyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {       
        if(e.key==='Enter' && texto!=='' && texto!=undefined && texto!== ' '){   
             
            if((texto.indexOf('ler') > -1)||(texto.indexOf('estudar') > -1)|| (texto.indexOf('Ler') > -1)||(texto.indexOf('Estudar') > -1)){
                var elemento:Item = {id:id,value:texto,estilo:"special"};
            }else{
                var elemento:Item = {id:id,value:texto,estilo:""};
            }
                
            setLista([...lista,elemento]);  
            setId(id+1);       
            setTexto("");
        }
      };
      
    const setInputText = (value: string) =>{
       setTexto(value);   
    }

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
                    onKeyUp={(e) => {
                        keyPressHandler(e);
                    }}
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                    placeholder="Add Item"
                    />
            </div>
            <div className="listaItens">
                    {                    
                     lista.length > 0?(  
                        lista.map((valor) =>(
                           <CheckBoxList key={valor.id}
                            descricao={valor} 
                            ApagarItem={handlerDeleteItem} 
                            Editar={handlerEditItem}
                            lista={lista}
                            />    
                        ))
                     ):(
                        <></>
                     )
                    }
                    
            </div>
            
        </article>
    );
}