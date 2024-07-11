import { Button, Card, Header, Image, MainContainer } from "./Cards.style";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router";

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {recipes.map((recipe, index) => (
        <Card key={index}>
          <Header>{recipe.recipe.label}</Header>
          <Image src={recipe.recipe.image || defaultImage} />
          <Button onClick={() => navigate("/detail", { state: recipe })}>
            View More
          </Button>
        </Card>
      ))}
    </MainContainer>
  );
};

export default Cards;
