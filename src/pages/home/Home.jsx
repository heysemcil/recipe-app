import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState(null);

  const APP_ID = import.meta.env.VITE_REACT_APP_APP_ID;
  const APP_KEY = import.meta.env.VITE_REACT_APP_APP_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter your meal");
    }
  };
  // console.log(recipes);

  return (
    <div>
      <Header setQuery={setQuery} getData={getData} />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && <HeaderText>Food Can not be found!</HeaderText>}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
