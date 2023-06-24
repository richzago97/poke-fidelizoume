import Header from "../../components/header";
import PokemonCard from "../../components/pokemonCard";
import PokemonChart from "../../components/pokemonChart";
import SearchPokemon from "../../components/searchPokemon";
import { CardContainer, ChartContainer, Container } from "./style";

const Home = () => {
   return (
      <>
         <Header />
         <SearchPokemon />
         <Container>
            <CardContainer>
               <PokemonCard />
            </CardContainer>
            <ChartContainer>
               <PokemonChart />
            </ChartContainer>
         </Container>
      </>
   );
};
export default Home;
