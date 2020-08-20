import React, { useState } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './styles.css';
import { hexToRgb } from '@material-ui/core';
import Axe from './axe.jpg';
import Winter from './ww.png';
import Antimage from './am.png';

var textos=[0,1,2];
var i=0;

function Strength() {

  return(
      <img src={Axe}></img>
  )
}

function Intelligence(){
  return(
      <img src={Winter}></img>
  )
}

function Agility(){
  return(
    <img src={Antimage}></img>
  )
}

function Botones(props) {

  var noMas, noMenos;
  if(props.indice==0){
    noMenos=true
  }
  if(props.indice>=2){
    noMas=true
  }

  return(
  <div className="botones">
    <div className="Volver">
      <Button disabled={noMenos} color="secondary" onClick={props.hiceclick}>
        Atras 
      </Button>
    </div>
    <div className="Siguiente">
      <Button disabled={noMas} color="primary" onClick={props.hiceclickAdelante}>
        Adelante
      </Button>
    </div>
  </div>
  )

}

function App() {
  var [indice, setearindice]=useState(0);
  var clickadelante=() => {
    if(indice<=1){
      setearindice(indice+1)  
    }else{
      setearindice(indice=0)  
    }
  };
  var clickatras=() => {
    if(indice!==0){
      setearindice(indice-1)
    }else{
      setearindice(indice+2)
    }
  };
  // Codigo de antes:
  // Si vas a usar esta funcion como componente acordate que empiece con mayuscula ej. Imagenamostrar
  // var imagenamostrar=() => {
  // Aca van tres igual '===' 
  //   if(indice==0){
  // Aca tenes que retornar el valor. Estas asignando un componente a una funcion. Es por aca el razonamiento igual, solo que en vez de asignarle
  // el valor a imagenamostrar lo tenes que retornar con return.
  //     imagenamostrar=<Strength></Strength>
  //   }else{
  //     imagenamostrar=<Agility></Agility>
  //   }
  // }

  // Codigo ahora:
  var Imagenamostrar=() => {
    if(indice===0){
      return <Strength></Strength>
    }else{
      return <Agility></Agility>;
    }
  }

  return (<>
<header>
    <h1> Falling in the real-time trap </h1>
    <h2> The behind the scenes in the streaming data world. </h2>
</header>

<body>
    <div className="MainText">
      <Imagenamostrar></Imagenamostrar>
    </div>
    <Botones indice={indice} hiceclick={clickatras} hiceclickAdelante={clickadelante}></Botones>
</body>
  </>);
 
}

export default App;
