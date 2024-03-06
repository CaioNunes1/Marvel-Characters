import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import {useState} from 'react';

interface CharacterData{
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

function App() {
// Atualize a chamada de useState para especificar o tipo do estado como CharacterData | null
    const[characterData,setCharacterData]=useState <CharacterData| null>(null);
  
    const handleCharacterSearch = (character:CharacterData) => {
      setCharacterData(character); // Atualiza o estado com os dados do personagem
    };

  return (
    <>
     <div className='App ' >
        <h2></h2>
        <div style={{background:'#171821' ,width:'90%',maxWidth:"500px",margin:"0 auto",padding:"3em 2em", marginTop:"1em",
          position:'absolute',transform:'translate(-50%)', left:'50%',right:'50%',borderRadius:'1em',paddingBottom:'5em'}}>
          <Navbar onCharacterSearch={handleCharacterSearch}/>
          {/*se characterData não for nulo ele mostra o personagem */}
        {characterData && <div style={{ textAlign: 'center', marginTop: '3em',color:'white' }}> {/* Ajuste o estilo conforme necessário */}
          <img src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`} alt={characterData.name} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
          <h2>{characterData.name}</h2>
          <p>{characterData.description || 'Descrição não disponível.'}</p>
        </div>}
        </div>
        
        
        <Outlet/>
        
      </div>
    </>
  )
}

export default App
