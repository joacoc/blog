import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './styles.css';

var textos=[1,2,3];

class TextoPrincipal extends React.Component{
  renderBotones(i){
    return<botones value={i}/>;
  }
}

class Botones extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value: null,
    };
  }

  render(){
    return(
      <Button 
      className="boton"
      variant="contained"
      color="secondary"
      >
        {this.state.value}
      </Button>
    );
  }
}

var i=0;

function App() {
  return (<>
<header>
    <h1> Falling in the real-time trap </h1>
    <h2> The behind the scenes in the streaming data world. </h2>
</header>

<body>
    <div className="MainText">
        <p>
          {textos[i]}
        </p>
    </div>
    <div className="botones">
      <div className="Volver">
        <Botones color="secondary" onClick={}>
          Atras 
        </Botones>
      </div>
      <div className="Siguiente">
        <Botones color="primary">
          Adelante
        </Botones>
      </div>
    </div>
</body>
  </>);
 
}

export default App;
