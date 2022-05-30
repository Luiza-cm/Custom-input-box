import React, {useEffect, useState} from 'react';
import SelectSearchBox from './components/InputSelect';
import './assets/styles/global.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3030/').then(response => {
      setData(response.data)
    })
  },[])
  function search(text: string){
    axios.get(`http://localhost:3030/search?search_field=${text}`).then(response =>{
      setData(response.data)
    })
  }
  return (
    <div id="select-container">
      <h1>Caixa de entrada/seleção customizada</h1>
      <SelectSearchBox 
        onInputChange={search}
        data={data}
        label='Fornecedor'
      />
    </div>
  );
}

export default App;
