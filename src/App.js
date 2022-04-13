 import React from 'react';
 import Produto from './Produto';



function App() {

  const [produto, setProduto] = React.useState(null); 

  React.useEffect(()=>{

    localStorage.setItem("Produto",JSON.stringify(produto?.nome));

    console.log(localStorage.getItem('Produto'));

  },[produto]);


  const handleClick = (event)=>{


    console.log(event.target.innerText);
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    .then(response => response.json())
    .then(json => setProduto(json))
 

  }
  
return (
    <div>
      {produto?.nome && <p>Preferência: {produto?.nome}</p>}
      <button style={{marginRight: '1rem'}} onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      <Produto dados={produto} />
      
    </div>
  );
}

export default App;
