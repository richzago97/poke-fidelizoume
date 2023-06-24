/**
  @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchPokemon from "../components/searchPokemon";
import { PokemonContext } from "../context/PokemonContext";
import { toast } from "react-toastify";


jest.mock("react-toastify", () => ({
   __esModule: true,
   toast: {
      error: jest.fn(),
   },
}));

describe("- SearchPokemon", () => {
   test("- Deve renderizar a entrada de pesquisa", () => {
      render(<SearchPokemon />);
      const searchInput = screen.getByPlaceholderText("Nome do Pokemon");
      expect(searchInput).toBeInTheDocument();
   });

   test("- Deve acionar a função fetchPokemons quando o botão de pesquisa é clicado", () => {
      const mockGetPokemons = jest.fn();

      const { getByPlaceholderText, getByText } = render(
         <PokemonContext.Provider
            value={{
               getPokemons: mockGetPokemons,
               pokemons: [],
               setPokemons: jest.fn(),
            }}
         >
            <SearchPokemon />
         </PokemonContext.Provider>
      );

      const searchInput = getByPlaceholderText("Nome do Pokemon");
      const searchButton = getByText("Search");

      fireEvent.change(searchInput, { target: { value: "Pikachu" } });
      fireEvent.click(searchButton);

      expect(mockGetPokemons).toHaveBeenCalledTimes(1);
   });

   test("- Deve exibir um aviso de erro quando a entrada de pesquisa estiver vazia ou contiver apenas espaços em branco", async () => {
      const mockGetPokemons = jest.fn();

      const { getByRole } = render(
         <PokemonContext.Provider
            value={{
               getPokemons: mockGetPokemons,
               pokemons: [],
               setPokemons: jest.fn(),
            }}
         >
            <SearchPokemon />
         </PokemonContext.Provider>
      );

      const searchButton = getByRole("button", { name: "Search" });
      fireEvent.click(searchButton);

      await waitFor(() => {
         expect(toast.error).toHaveBeenCalledWith(
            "Por favor, digite o nome de um Pokemon."
         );
      });

      expect(mockGetPokemons).not.toHaveBeenCalled();
   });
});
