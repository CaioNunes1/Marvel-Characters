import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import React,{useState} from 'react';
import { fetchCharacter } from '../script';

interface Character{
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface NavbarProps {
  onCharacterSearch: (character: Character) => void;
}


function Navbar({onCharacterSearch}:NavbarProps) {
  const [searchTerm,setSearchTerm]=useState('');

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault(); // Impede o recarregamento da página
  const character = await fetchCharacter(searchTerm);
  if(character) {
    const characterData = {
      id: character.id,
      name: character.name,
      description: character.description,
      thumbnail: { // Mantém thumbnail como um objeto
        path: character.thumbnail.path,
        extension: character.thumbnail.extension
      }
    };

    onCharacterSearch(characterData);
  } else {
    console.log("Personagem não encontrado.");
  }
    
  };

    return(
        <nav id="navbar" >
          <div style={{display:'flex', justifyContent:'center',marginBottom:'1em'}}>
          <h2 >
            <Link to='/' > Marvel Characters</Link>
          </h2>
          </div>
            
          <form style={{display:'grid', 
            gridTemplateColumns:'9fr 3fr', gap:'1em'}} onSubmit={handleSubmit}>
            <input type="text" placeholder="Busque um personagem" className="input color #ffffff" style={{padding:'1em 0.5em',backgroundColor:'#3a3939',
          color:'#ffffff',border:'none',borderRadius:'0.5em',outline:'none' } } value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}  />
            
            <button type="submit" style={{outline:'none', borderRadius:'0.5em',border:'none', backgroundColor:'#e01a38'}}>
                <BiSearchAlt2/>
            </button>
          </form>
          
        </nav>
    )
}
export default Navbar;