import React, { useContext, useEffect, useRef } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import Chart from "chart.js/auto";
import { ChartContainer, ChartHeader, ChartTitle, Container } from "./style";

import SearchPokemon from "../searchPokemon";
import { Pokemon, Stat } from "../../interfaces/pokemon";

const PokemonChart = () => {
   const { pokemons } = useContext(PokemonContext);
   const chartRef = useRef<HTMLCanvasElement>(null);
   const chartInstanceRef = useRef<Chart<"doughnut"> | null>(null);

   useEffect(() => {
      if (!pokemons || pokemons.length === 0) return;

      const pokemon = pokemons[0];
      const chartCanvas = chartRef.current;

      if (chartCanvas) {
         if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
         }

         chartInstanceRef.current = createChart(chartCanvas, pokemon);
      }
   }, [pokemons]);

   const createChart = (
      canvas: HTMLCanvasElement,
      pokemon: Pokemon
   ): Chart<"doughnut"> => {
      const statLabels = pokemon.stats!.map((stat: Stat) => stat.stat.name);
      const statValues = pokemon.stats!.map((stat: Stat) => stat.base_stat);
      const statColors = ["green", "blue", "red", "purple", "orange", "yellow"];
      const totalValue = statValues.reduce(
         (total: number, value: number) => total + value,
         0
      );

      return new Chart(canvas, {
         type: "doughnut",
         data: {
            labels: [...statLabels, "Total"],
            datasets: [
               {
                  label: "Stats",
                  data: [...statValues, totalValue],
                  backgroundColor: [
                     ...statColors.slice(0, statValues.length),
                     "gray",
                  ],
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
      }) as Chart<"doughnut">;
   };

   if (!SearchPokemon || !pokemons || pokemons.length === 0) {
      return null;
   }

   return (
      <Container>
         <ChartHeader>
            <ChartTitle>Base Stats</ChartTitle>
         </ChartHeader>
         <ChartContainer>
            <canvas ref={chartRef} />
         </ChartContainer>
      </Container>
   );
};

export default PokemonChart;
