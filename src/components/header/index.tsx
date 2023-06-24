import { HeaderContainer, HeaderIcon, HeaderTitle } from "./style";
import pokemonIcon from "../../assets/icons/pokemon-icon.png";

const Header = () => {
   return (
      <HeaderContainer>
         <HeaderIcon src={pokemonIcon} alt="Pokemon Logo" />
         <HeaderTitle>Pokemons API</HeaderTitle>
      </HeaderContainer>
   );
};

export default Header;
