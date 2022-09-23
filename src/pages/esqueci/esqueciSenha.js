import React from "react";
import { TouchableOpacity } from "react-native";
import {
  LoginContainer,
  UserInput,
  LoginButton,
  Titulo,
  Subtitulo,
  Cadastro,
  ButtonText,
  Imagem,
  LabelErro,
} from "../login/styles";
import { useState } from "react";

import Logo from "../../assets/logo.png";
import { api } from "../../services/api";

const EsqueciSenha = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmitEmail() {
    if (!email) {
      setError("Preencha o Email");
    }
    try {
      const response = await api.post("/Esqueci", email);
      alert("Email de recuperação enviado");
    } catch {
      alert("Não foi possível enviar para esse email");
    }
  }

  return (
    <LoginContainer>
      <Imagem source={Logo}></Imagem>
      <Titulo> Esqueci minha senha </Titulo>
      <Subtitulo>Insira seu email</Subtitulo>
      <UserInput
        placeholder="Digite seu email"
        value={email}
        onChangeText={(e) => [setEmail(e)]}
        margintop={"20px"}
        keyboardType="email-address"
      ></UserInput>
      <LabelErro>{error}</LabelErro>

      <TouchableOpacity
        onPressIn={() => navigation.navigate("Login")}
      ></TouchableOpacity>

      <LoginButton title="Enviar" onPress={() => navigation.navigate("Login")}>
        <ButtonText>Enviar</ButtonText>
      </LoginButton>
    </LoginContainer>
  );
};

export default EsqueciSenha;
