import React from "react";
import { useState,KeyboardEvent } from "react";
import "./style.modules.css";

type Item = {
    id:number;
    value:string;
    estilo:string;
}

interface Entrada {
    descricao:Item;
    lista:Item[];
    ApagarItem:(valor:Item)=>void;
    Editar:(oldvalor:Item,newValor:Item,lista:Item[])=>void;
}


export function CheckBoxList({descricao,ApagarItem,lista,Editar}:Entrada){
   
    const [Edit, setEdit] = useState<boolean>(false);
    const[item,setItem] = useState<Item>(descricao); 
    function keyPressHandler(e:KeyboardEvent<HTMLInputElement>){       
        if(e.key==='Enter'){              
            setEdit(false);
            Editar(descricao,item,lista);
        }
      };
     function setInputText(value: string) { 
            if((value.indexOf('ler') > -1)||(value.indexOf('estudar') > -1)|| (value.indexOf('Ler') > -1)||(value.indexOf('Estudar') > -1)){
                var nItem:Item = {id:item.id,value:value,estilo:"special"};
            }else{
                var nItem:Item = {id:item.id,value:value,estilo:""} 
            }
           
            setItem(nItem);   
     }

    function DeleteItem(){
        ApagarItem(item);
        setEdit(false);
    } 

    const handleClick = (event: { detail: any; }) => {
        switch (event.detail) {
          case 2: {
            setEdit(true);
            break;
          }
        }
      };

    if(!Edit){  
        return (
            <div  className="listCheck" >
            <input type="checkbox" name={item.value} />
              <label className={item.estilo}  onClick={handleClick} htmlFor={item.value}>{item.value}</label>            
            </div>
        );
    }else{
        return (
            <div  className="listCheck" >
                    <input type="checkbox" name={item.value} />
                    <input  type="text" 
                    name={item.value}
                    value={item.value}
                    onKeyUp={(e) => {
                        keyPressHandler(e);
                    }}
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
                    placeholder={item.value}
                    />
                   <i className="fa fa-trash-o" aria-hidden="true" onClick={DeleteItem}></i>
            </div>
        );
    }
}

