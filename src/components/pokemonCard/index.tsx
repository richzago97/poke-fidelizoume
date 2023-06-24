import React, { useContext } from "react";
import {
   CardContainer,
   CardWrapper,
   CardID,
   CardType,
   CardLabel,
   CardAbilities,
   CardAbility,
   StyledCardLabelValue,
   StyledCardValue,
} from "./style";
import { PokemonContext } from "../../context/PokemonContext";
import { Ability, Pokemon } from "../../interfaces/pokemon";

const PokemonCard: React.FC = () => {
   const { pokemons } = useContext(PokemonContext);

   const toUpperFirstLetter = (string: string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   };

   const convertWeight = (weight: number) => {
      const convertedWeight = weight / 10;
      return convertedWeight.toFixed(1);
   };

   const getTypeColor = (type: string) => {
      switch (type) {
         case "fire":
            return "#FF3B30";
         case "poison":
            return "#B97FC9";
         case "grass":
            return "#4CAF50";
         case "bug":
            return "#4CAF50";
         case "water":
            return "#007AFF";
         case "ground":
            return "#D3B357";
         case "electric":
            return "#FFC400";
         case "ice":
            return "#7ED4FF";
         default:
            return "#CCCCCC";
      }
   };

   return (
      <CardWrapper>
         {pokemons.map((pokemon: Pokemon) => (
            <CardContainer
               key={pokemon.id}
               style={{
                  backgroundColor: getTypeColor(pokemon.types[0].type.name),
               }}
            >
               <h2>{toUpperFirstLetter(pokemon.name)}</h2>
               <CardID>ID: #{pokemon.id.toString().padStart(3, "0")}</CardID>
               <CardType>{pokemon.types[0].type.name}</CardType>
               <img src={pokemon.sprites.front_default} alt={pokemon.name} />
               <StyledCardLabelValue>
                  <StyledCardValue>Height: {pokemon.height} cm</StyledCardValue>
               </StyledCardLabelValue>
               <StyledCardLabelValue>
                  <StyledCardValue>
                     Weight: {convertWeight(pokemon.weight)} kg
                  </StyledCardValue>
               </StyledCardLabelValue>
               <CardLabel>Abilities:</CardLabel>
               <CardAbilities>
                  {pokemon.abilities.map((ability: Ability) => (
                     <CardAbility key={ability.ability.name}>
                        {ability.ability.name}
                     </CardAbility>
                  ))}
               </CardAbilities>
            </CardContainer>
         ))}
      </CardWrapper>
   );
};

export default PokemonCard;
