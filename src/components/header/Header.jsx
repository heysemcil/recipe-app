import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
} from "./Header.style";

const Header = ({ setQuery, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>Recipe APP</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">SEARCH</Button>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
