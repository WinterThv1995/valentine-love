import React, { useState } from 'react';
import taekook from './imagen/taekook.png';

function App() {
  const [textoBoton, setTextoBoton] = useState("No");
  const [estiloBoton, setEstiloBoton] = useState({});
  const [estiloBotonSi, setEstiloBotonSi] = useState({});

  const cambiarTexto = () => {
    if (textoBoton === "No") {
      setTextoBoton("¿Estás seguro?");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '3em' });
    } else if (textoBoton === "¿Estás seguro?") {
      setTextoBoton("¿Super seguro?");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '5em' });
    } else if (textoBoton === "¿Super seguro?") {
      setTextoBoton("¿Realmente estás seguro?");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '7em' });
    } else if (textoBoton === "¿Realmente estás seguro?") {
      setTextoBoton("Por favor acepta");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '9em' });
    } else if (textoBoton === "Por favor acepta") {
      setTextoBoton("Solo piénsalo");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '11em' });
    } else if (textoBoton === "Solo piénsalo") {
      setTextoBoton("Si dices que no estaré triste");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '13em' });
    } else if (textoBoton === "Si dices que no estaré triste") {
      setTextoBoton("Estaré muy triste");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '15em' });
    } else if (textoBoton === "Estaré muy triste") {
      setTextoBoton("Estaré muy muy triste");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '17em' });
    } else if (textoBoton === "Estaré muy muy triste") {
      setTextoBoton("Estaré muy muy muy triste");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '19em' });
    } else if (textoBoton === "Estaré muy muy muy triste") {
      setTextoBoton("Estaré muy muy muy muy triste");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '21em' });
    } else if (textoBoton === "Estaré muy muy muy muy triste") {
      setTextoBoton("Está bien, dejaré de preguntar...");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '23em' });
    } else if (textoBoton === "Está bien, dejaré de preguntar...") {
      setTextoBoton("Es broma, por favor di que sí");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '25em' });
    } else if (textoBoton === "Es broma, por favor di que sí") {
      setTextoBoton("De verdad estaré muy muy triste");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '27em' });
    } else if (textoBoton === "De verdad estaré muy muy triste") {
      setTextoBoton("Estás rompiendo mi corazoncito de pollo");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '29em' });
    } else if (textoBoton === "Estás rompiendo mi corazoncito de pollo") {
      setTextoBoton("Que quede en tu conciencia");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '31em' });
    } else if (textoBoton === "Que quede en tu conciencia") {
      setTextoBoton("¿De verdad estás seguro?");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '33em' });
    } else if (textoBoton === "¿De verdad estás seguro?") {
      setTextoBoton("Ok, entonces será como dicen las Twice");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '35em' });
    } else if (textoBoton === "Ok, entonces será como dicen las Twice") {
      setTextoBoton("¡Si!");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '38em' });
    }
    else if (textoBoton === "¡Si!") {
      setTextoBoton("¡Si!");
      setEstiloBoton({});
      setEstiloBotonSi({ fontSize: '38em' });
      window.location.href = "https://il0veu.netlify.app/";
    }
  };

  const otraPagina = () => {
    window.location.href = "https://il0veu.netlify.app/";
  };

  return (
    <body>
      <div className='principal'>
        <div className='centro'>
          <div className='imagen'>
            <img src={taekook} alt="" />
          </div>
          <br /><p>¿Quieres ser mi San Valentin?</p><br />
          <div className='botones'>
            <button onClick={() => otraPagina()} className='si' style={estiloBotonSi}>Si</button>
            <button onClick={() => cambiarTexto()} className='no' style={estiloBoton}>{textoBoton}</button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
