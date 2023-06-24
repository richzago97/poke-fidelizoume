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
import toUpperFirstLetter from "../../utils/pokemonCard/toUpperFirstLetter";
import convertWeight from "../../utils/pokemonCard/convertWeight";
import getTypeColor from "../../utils/pokemonCard/getTypeColor";

const PokemonCard: React.FC = () => {
   const { pokemons } = useContext(PokemonContext);

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
