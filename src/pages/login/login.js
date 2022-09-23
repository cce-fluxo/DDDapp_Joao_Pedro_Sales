import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  LoginBox,
  LoginContainer,
  UserInput,
  LoginButton,
  Titulo,
  Subtitulo,
  Imagem,
  Esqueci,
  Cadastro,
  LabelErro,
  ButtonText,
} from "./styles";

import Logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

const Login = ({ navigation }) => {
  const { signin } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
    return;
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigation.navigate("Home");
  };

  return (
    <LoginContainer>
      <Imagem source={Logo} />
      <Titulo> ConheCCEmento </Titulo>
      <Subtitulo>Todo seu conhecimento</Subtitulo>
      <Subtitulo>em um só lugar</Subtitulo>
      <UserInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={(e) => [setEmail(e), setError("")]}
        margintop={"30px"}
        keyboardType="email-address"
      ></UserInput>
      <UserInput
        margintop={"10px"}
        placeholder="Digite sua senha"
        value={senha}
        secureTextEntry={true}
        onChangeText={(e) => [setSenha(e), setError("")]}
      ></UserInput>
      <LabelErro>{error}</LabelErro>
      <LoginButton title="Login" onPress={handleLogin}>
        <ButtonText>LOGIN</ButtonText>
      </LoginButton>
      <TouchableOpacity onPressIn={() => navigation.navigate("Esqueci")}>
        <Esqueci>Esqueci minha senha</Esqueci>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={() => navigation.navigate("Cadastro")}>
        <Cadastro>Não possui conta? Cadastre-se</Cadastro>
      </TouchableOpacity>
    </LoginContainer>
  );
};

export default Login;
