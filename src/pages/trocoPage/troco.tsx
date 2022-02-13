import { off } from 'process'
import React, {useState} from 'react'
import './AppTroco.css'



export default function Troco(){
    let [arrNotas, setArrNotas] = useState([{
            '50':{
                quantidade: 0
            },
            '20':{
                quantidade: 0
            },
            '10':{
                quantidade: 0
            },
            '5':{
                quantidade: 0
            },
            '1':{
                quantidade: 0
            }
        
        }]    )
    function executaTroco(valor:any) {
        
        // Notas disponíveis
        var notas = [50, 20, 10, 5, 1]
        // Troco é um objeto, associando notas com a quantidade necessária
        
        var loco = {
            '50':{
                quantidade: 0
            },
            '20':{
                quantidade: 0
            },
            '10':{
                quantidade: 0
            },
            '5':{
                quantidade: 0
            },
            '1':{
                quantidade: 0
            },
        }
        
        // Itero sobre o array de notas
        for (var nota of notas) {
          
          while (valor >= nota) {
            switch(nota){
                case 1:
                    loco[1].quantidade ++
                    break
                case 5:
                    loco[5].quantidade ++
                    break
                case 10:
                    loco[10].quantidade ++
                    break
                case 20:
                    loco[20].quantidade ++
                    break
                case 50:
                    loco[50].quantidade ++
                    break
            }
            
            // e reduzo o valor restante pelo valor da nota
            valor -= nota
          }
        }
      
        setArrNotas([loco])
      }
    let [troco, setTroco] = useState('')
    let [notasDef, setNotasDef] = useState([])

    return(
        <div className='app'>
           <input type="number" onChange={(e) => setTroco(e.target.value)} placeholder='Qual é o troco desejado?' />
            <button onClick={() => {executaTroco(troco)}}>Mostrar TROCO</button>
           {arrNotas.map((e) =>(
               
               <div className='trocoDiv'>
                   {e[1].quantidade > 0 ? <p> {e[1].quantidade} moeda(s) de 1 real</p> : <div></div>}
                   {e[5].quantidade > 0 ? <p>{e[5].quantidade} nota(s) de 5 reais </p> : <div></div>  }
                   {e[10].quantidade > 0 ? <p>{e[10].quantidade} nota(s) de 10 reais </p> : <div></div> }
                   {e[20].quantidade > 0 ? <p>{e[20].quantidade} nota(s) de 20 reais  </p> : <div></div>}
                   {e[50].quantidade > 0 ? <p>{e[50].quantidade} nota(s) de 50 reais </p> : <div></div>}
                   
               </div>
           ))}
        </div>
    )
}