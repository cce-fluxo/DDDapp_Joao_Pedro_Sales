import React from "react";
import { TouchableOpacity } from "react-native";
import {
  LoginContainer,
  Titulo,
  UserInput,
  LabelErro,
  LoginButton,
  ButtonText,
  Esqueci,
  Cadastro,
  Imagem,
} from "../login/styles";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Logo from "../../assets/logo.png";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();

  const handleSignup = () => {
    navigation.navigate("Login");
    return;
    if (!email | !senhaConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (senha !== senhaConf) {
      setError("As senhas não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigation.navigate("Login");
  };

  return (
    <LoginContainer>
      <Imagem source={Logo} />

      <Titulo> Cadastre-se </Titulo>
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
      <UserInput
        margintop={"10px"}
        placeholder="Digite novamente sua senha"
        value={senhaConf}
        secureTextEntry={true}
        onChangeText={(e) => [setSenhaConf(e), setError("")]}
      ></UserInput>
      <LabelErro>{error}</LabelErro>
      <LoginButton title="CADASTRE-SE" onPress={handleSignup}>
        <ButtonText>CADASTRE-SE</ButtonText>
      </LoginButton>
      <TouchableOpacity onPressIn={() => navigation.navigate("")}>
        <Esqueci>Esqueci minha senha</Esqueci>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={() => navigation.navigate("Login")}>
        <Cadastro>Já possui conta? Faça Login</Cadastro>
      </TouchableOpacity>
    </LoginContainer>
  );
};

export default Signup;
