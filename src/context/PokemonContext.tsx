import api from "../services/api";
import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";
import { Pokemon } from "../interfaces/pokemon";

interface IPokemonProps {
   children: ReactNode;
}

interface IPokemonContextData {
   getPokemons: (pokemonName: string) => Promise<void>;
   pokemons: Pokemon[];
   setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

export const PokemonContext = createContext<IPokemonContextData>(
   {} as IPokemonContextData
);

function PokemonProvider({ children }: IPokemonProps) {
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const getPokemons = async (pokemonName: string) => {
      try {
         const response = await api.get(`pokemon/${pokemonName}`);
         const pokemonData: Pokemon = response.data;
         setPokemons([pokemonData]);
      } catch (error) {
         setPokemons([]);
         toast.error(
            "Pokemon não encontrado. Por favor, verifique o nome e tente novamente."
         );
      }
   };

   return (
      <PokemonContext.Provider value={{ getPokemons, pokemons, setPokemons }}>
         {children}
      </PokemonContext.Provider>
   );
}

export default PokemonProvider;
