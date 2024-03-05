import axios from 'axios';
import md5 from 'md5';

const PublicKey='55d13e26d30251423fa0b6271ae359ec';
const PrivateKey='0d70148aedc2c1676278df216a6fcac42b5cf209'

export const fetchCharacter= async (characterName:string)=>{
    const timeStamp= new Date().getTime();
    const hash=md5(timeStamp+PrivateKey+PublicKey);
    const baseURL= "https://gateway.marvel.com/v1/public/characters";

    try{
        const response = await axios.get(`${baseURL}?name=${characterName}&ts=${timeStamp}&apikey=${PublicKey}&hash=${hash}`);
        const character=response.data.data.results[0];

        if (character) {
            // Se o personagem foi encontrado, retorne-o
            return character;
        } else {
            // Se não encontrou nenhum personagem, retorne null ou uma indicação de que não foi encontrado
            console.log("Nenhum personagem encontrado para o nome: ", characterName);
            return null;
        }

    }
    catch(error){
        console.error('Erro ao buscar personagem',error);
        return null;
    }
    
};