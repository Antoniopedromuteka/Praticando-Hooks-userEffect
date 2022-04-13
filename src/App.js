 import React from 'react';
 import Produto from './Produto';



function App() {

  const [produto, setProduto] = React.useState(null); 


  React.useEffect(()=>{

    const produtoLocal = JSON.parse(window.localStorage.getItem('produto'));

    if(produtoLocal !== null ) setProduto(produtoLocal);

  },[]);



  React.useEffect(()=>{

    if(produto !== null) localStorage.setItem('produto',JSON.stringify(produto));

  },[produto]);


  const handleClick = (event)=>{


    console.log(event.target.innerText);
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    .then(response => response.json())
    .then(json => setProduto(json))
 

  }
  
return (
    <div>
     <p>Preferência: {produto?.nome}</p>
      <button style={{marginRight: '1rem'}} onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

       <Produto dados={produto} /> 
      
    </div>
  );
}

export default App;
