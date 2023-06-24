/**
  @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { PokemonContext } from "../context/PokemonContext";
import Chart from "chart.js/auto";
import { Pokemon, Stat } from "../interfaces/pokemon";
import PokemonChart from "../components/pokemonChart";

jest.mock("chart.js/auto", () => {
   const mockChart = {
      destroy: jest.fn(),
   };

   return jest.fn().mockImplementation(() => mockChart);
});

describe("- PokemonChart", () => {
   test("- Não deve renderizar gráfico quando não há pokémons", () => {
      const { queryByTestId } = render(
         <PokemonContext.Provider
            value={{
               getPokemons: jest.fn(),
               pokemons: [],
               setPokemons: jest.fn(),
            }}
         >
            <PokemonChart />
         </PokemonContext.Provider>
      );

      expect(queryByTestId("pokemon-chart")).toBeNull();
   });

   test("- Deve renderizar gráfico com dados corretos", () => {
      const mockPokemons: Pokemon[] = [
         {
            id: 1,
            name: "Pikachu",
            types: [],
            sprites: {},
            height: 0,
            weight: 0,
            abilities: [],
            stats: [
               { base_stat: 20, effort: 0, stat: { name: "stat1", url: "" } },
               { base_stat: 30, effort: 0, stat: { name: "stat2", url: "" } },
               { base_stat: 40, effort: 0, stat: { name: "stat3", url: "" } },
            ],
         },
      ];

      const { container } = render(
         <PokemonContext.Provider
            value={{
               getPokemons: jest.fn(),
               pokemons: mockPokemons,
               setPokemons: jest.fn(),
            }}
         >
            <PokemonChart />
         </PokemonContext.Provider>
      );

      expect(container.querySelector("canvas")).toBeInTheDocument();
      expect(Chart).toHaveBeenCalledTimes(1);
      expect(Chart).toHaveBeenCalledWith(expect.any(HTMLCanvasElement), {
         type: "doughnut",
         data: {
            labels: ["stat1", "stat2", "stat3", "Total"],
            datasets: [
               {
                  label: "Stats",
                  data: [20, 30, 40, 90],
                  backgroundColor: ["green", "blue", "red", "gray"],
               },
            ],
         },
         options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
               legend: {
                  display: true,
                  position: "right",
               },
            },
            layout: {
               padding: 2,
            },
            elements: {
               arc: {
                  borderWidth: 0,
               },
            },
         },
      });
   });

   test("- Deve atualizar o gráfico com novos dados", () => {
      const mockPokemons: Pokemon[] = [
         {
            id: 1,
            name: "Pikachu",
            types: [],
            sprites: {},
            height: 0,
            weight: 0,
            abilities: [],
            stats: [
               { base_stat: 10, effort: 0, stat: { name: "stat1", url: "" } },
               { base_stat: 20, effort: 0, stat: { name: "stat2", url: "" } },
               { base_stat: 30, effort: 0, stat: { name: "stat3", url: "" } },
            ],
         },
      ];

      const { rerender } = render(
         <PokemonContext.Provider
            value={{
               getPokemons: jest.fn(),
               pokemons: mockPokemons,
               setPokemons: jest.fn(),
            }}
         >
            <PokemonChart />
         </PokemonContext.Provider>
      );

      const updatedPokemons: Pokemon[] = [
         {
            id: 1,
            name: "Pikachu",
            types: [],
            sprites: {},
            height: 0,
            weight: 0,
            abilities: [],
            stats: [
               { base_stat: 5, effort: 0, stat: { name: "stat1", url: "" } },
               { base_stat: 15, effort: 0, stat: { name: "stat2", url: "" } },
               { base_stat: 25, effort: 0, stat: { name: "stat3", url: "" } },
            ],
         },
      ];

      rerender(
         <PokemonContext.Provider
            value={{
               getPokemons: jest.fn(),
               pokemons: updatedPokemons,
               setPokemons: jest.fn(),
            }}
         >
            <PokemonChart />
         </PokemonContext.Provider>
      );

      expect(Chart).toHaveBeenCalledTimes(3);
      expect(Chart).toHaveBeenLastCalledWith(expect.any(HTMLCanvasElement), {
         type: "doughnut",
         data: {
            labels: ["stat1", "stat2", "stat3", "Total"],
            datasets: [
               {
                  label: "Stats",
                  data: [5, 15, 25, 45],
                  backgroundColor: ["green", "blue", "red", "gray"],
               },
            ],
         },
         options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
               legend: {
                  display: true,
                  position: "right",
               },
            },
            layout: {
               padding: 2,
            },
            elements: {
               arc: {
                  borderWidth: 0,
               },
            },
         },
      });
   });

   test("- Deve destruir gráfico quando não há pokemons", () => {
      const mockDestroy = jest.fn();
      const mockChart = jest.fn().mockReturnValueOnce({
         destroy: mockDestroy,
      });

      render(
         <PokemonContext.Provider
            value={{
               getPokemons: jest.fn(),
               pokemons: [],
               setPokemons: jest.fn(),
            }}
         >
            <PokemonChart />
         </PokemonContext.Provider>
      );

      expect(mockChart).toHaveBeenCalledTimes(0);
      expect(mockDestroy).toHaveBeenCalledTimes(0);
   });
});
