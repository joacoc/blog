import React, { useState } from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './styles.css';
import { hexToRgb, FormGroup } from '@material-ui/core';
import Axe from './axe.jpg';
import Winter from './ww.png';
import Antimage from './am.png';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex'
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div class='esen'>
    <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>EN</Grid>
          <Grid item>
            <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
          </Grid>
          <Grid item>ES</Grid>
        </Grid>
      </Typography>
      </div>
  );
}

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
  var espanol="cayendo";
  var ingles="falling";
  const titulo=[espanol,ingles];
  const heroes=[<Strength></Strength>,<Intelligence></Intelligence>,<Agility></Agility>];
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

  return (<>
<header>
  <div className='titles'>
  {titulo=[0]}
  </div>
    <h2> The behind the scenes in the streaming data world. </h2>
</header>

<body>
    <div className='enes'>
      <CustomizedSwitches></CustomizedSwitches>
    </div>
    <div className="MainText">
      {heroes[indice]}
    </div>
    <Botones indice={indice} hiceclick={clickatras} hiceclickAdelante={clickadelante}></Botones>
</body>
  </>);
 
}

export default App;
