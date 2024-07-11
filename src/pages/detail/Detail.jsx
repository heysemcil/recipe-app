import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngContainer,
  OtherPart,
} from "./Detail.style";
import { useLocation } from "react-router";

const Detail = () => {
  const { state } = useLocation();
  const { recipe } = state;
  // console.log(recipe);
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label}</h1>
      </HeaderContainer>
      <DetailPart wrap="wrap">
        <OtherPart>
          <h4>NUTRIENTS</h4>
          <p>
            {recipe.totalNutrients.CA.label} :{" "}
            {Math.round(recipe.totalNutrients.CA.quantity)}
          </p>
          <p>
            {recipe.totalNutrients.FAT.label} :{" "}
            {Math.round(recipe.totalNutrients.FAT.quantity)}
          </p>
          <p>
            {recipe.totalNutrients.SUGAR.label} :{" "}
            {Math.round(recipe.totalNutrients.SUGAR.quantity)}
          </p>
        </OtherPart>
        <ImgContainer>
          <img src={recipe.image} alt={recipe.label} />
        </ImgContainer>
        <IngContainer>
          {recipe.ingredientLines.map((line, index) => (
            <div key={index}>
              <p>
                {index + 1} = {line}
              </p>
            </div>
          ))}
        </IngContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;
