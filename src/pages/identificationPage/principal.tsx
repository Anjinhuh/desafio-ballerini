import React, { useState} from 'react';
import $ from 'jquery';
import './App.css';


function mostraDiv(){
  $(".resultado-div").show()
  console.log("ok")
}
document.addEventListener('DOMContentLoaded', function() {
  $(".resultado-div").hide()
});
function App() {

  let [nome, setNome] = useState('NOME NÃO INSERIDO')
  let [idade, setIdade] = useState('IDADE NÃO INSERIDA')
  let [tec, setTech] = useState('TECNOLOGIA NÃO INSERIDA')

  return (

    <div className="app"  >
      <form onSubmit={(e) =>{e.preventDefault()}}>
        <div className="div-inputs">
          <input onChange={(e) => {setNome(e.target.value)} } placeholder="Qual o seu nome?" type="text" />
          <input onChange={(e) => {setIdade(e.target.value)} } placeholder="Quantos anos vocë tem?" type="text" />
          <input onChange={(e) => {setTech(e.target.value)} } placeholder="Qual tecnologia você está estudando?" type="text" />
          <button onClick={() => {mostraDiv()}} >Registrar</button>
        </div>
      </form>
      <div className="resultado-div">
        <p id='nome'>Nome: {nome}</p>
        <p id='idade'>Idade: {idade}</p>
        <p id='tecnologia'>Tecnologia que está estudando: {tec}</p>
      </div>
    </div>


  );
}

export default App;
