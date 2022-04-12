 import React from 'react';


function App() {

  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  /*
  React.useEffect(()=>{

    console.log("Executou");

  },[]);

  const titulo = 'total';
  React.useEffect(()=>{

    document.title = titulo + contar;

  },[contar])
*/
  
React.useEffect(()=>{

  fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
  .then(response => response.json())
  .then(json => setDados(json))

},[]);

return (
    <div>
      {dados && <div>
        <h1>{dados?.nome}</h1>  
        <p>{dados.preco}</p>
      </div>}
       <button onClick={()=>setContar(contar+1)}>{contar}</button>
    </div>
  );
}

export default App;
