/**
  @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import PokemonCard from "../components/pokemonCard";
import { PokemonContext } from "../context/PokemonContext";
import { Pokemon } from "../interfaces/pokemon";

describe("- PokemonCard", () => {
   test("- Deve renderizar PokemonCard com os dados corretos", async () => {
      const mockPokemons: Pokemon[] = [
         {
            id: 1,
            name: "Pikachu",
            types: [{ slot: 1, type: { name: "electric", url: "" } }],
            sprites: {
               front_default: "pikachu.png",
               back_default: "",
               back_female: null,
               back_shiny: "",
               back_shiny_female: null,
            },
            height: 50,
            weight: 6,
            abilities: [
               {
                  ability: { name: "static", url: "" },
                  is_hidden: false,
                  slot: 1,
               },
            ],
         },
      ];

      const getPokemons = async (pokemonName: string): Promise<void> => {
         const filteredPokemons = mockPokemons.filter(
            (pokemon) =>
               pokemon.name.toLowerCase() === pokemonName.toLowerCase()
         );

         // Aguardar um tempo simulado para simular uma operação assíncrona por conta do problema de tipagem em render no getPokemons
         await new Promise((resolve) => setTimeout(resolve, 1000));
      };

      render(
         <PokemonContext.Provider
            value={{
               pokemons: mockPokemons,
               getPokemons: getPokemons,
               setPokemons: jest.fn(),
            }}
         >
            <PokemonCard />
         </PokemonContext.Provider>
      );
   });
});
