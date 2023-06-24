import React, { useContext, useState } from "react";
import { Button, SearchContainer, Input } from "./style";
import { PokemonContext } from "../../context/PokemonContext";
import { toast } from "react-toastify";

const SearchPokemon = () => {
   const { getPokemons } = useContext(PokemonContext);
   const [pokemonName, setPokemonName] = useState("");

   const fetchPokemons = async () => {
      if (pokemonName.trim() === "") {
         toast.error("Por favor, digite o nome de um Pokemon.");
         return;
      }

      await getPokemons(pokemonName.toLowerCase());
   };

   return (
      <SearchContainer>
         <Input
            type="text"
            value={pokemonName}
            placeholder="Nome do Pokemon"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               setPokemonName(e.target.value)
            }
         />
         <Button onClick={fetchPokemons}>Search</Button>
      </SearchContainer>
   );
};

export default SearchPokemon;
