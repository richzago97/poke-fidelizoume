/**
  @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import pokemonIcon from "../assets/icons/pokemon-icon.png";
import Header from "../components/header";

jest.mock("../assets/icons/pokemon-icon.png", () => "mocked-image-path");

describe("- Header", () => {
   test("- Renderiza o componente Header", () => {
      const { getByAltText, getByText } = render(<Header />);

      const headerIcon = getByAltText("Pokemon Logo");
      const headerTitle = getByText("Pokemons API");

      expect(headerIcon).toBeInTheDocument();
      expect(headerIcon.getAttribute("src")).toBe("mocked-image-path");
      expect(headerTitle).toBeInTheDocument();
   });
});
