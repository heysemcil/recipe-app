// import LoginStyle from "./Login.style"
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";

import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    username: "Doe",
  };

  // const [user, setUser] = useState({ username: "", password: "" });
  const { user, setUser } = useContext(LoginContext);
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<CW/>"}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            name="username"
            value={user?.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
          />
          <StyledInput
            type="password"
            placeholder="password"
            name="password"
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
