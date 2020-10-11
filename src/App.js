import React from 'react';
function App() {
 let numero = 0;
  function clicou(dividir){
    numero = numero + 1;
    let dividido;
    if(dividir === true){
     dividido = numero/2;
    }
    alert(numero);
    alert(dividido);
  }
  return (
    <div>
 <h1>Hello World</h1>
 <button onClick={()=>clicou(false)}>+ um</button>
 <button onClick={()=>clicou(true)}>+ um e divide</button>
     </div>
  );
}

export default App;
