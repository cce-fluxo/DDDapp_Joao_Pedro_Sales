import React, { useState } from "react";
import {
  FormsBox,
  FormsContainer,
  AddButton,
  ModalCollab,
  ListaColaboradores,
  TopPart,
  BottomPart,
} from "./styles";
import {
  Titulo,
  UserInput,
  Subtitulo,
  LabelErro,
  LoginButton,
  ButtonText,
} from "../login/styles";
import { View, Text } from "react-native";
import { api } from "../../services/api";
import { Feather } from "@expo/vector-icons";

const Forms = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [listaColaboradores, setListaColaboradores] = useState([]);

  const handleFormsSubmit = async () => {
    if (!email | !nome | !senha) {
      setError("Preencha todos os campos");
      return;
    }
    setLoading(true);
    try {
      const dados = {
        nome: nome,
        email: email,
        senha: senha,
      };
      const response = await api.post("/formsData", dados);
      console.log(response.dados);

      alert("Colaborador Registrado!");
    } catch (erro) {
      alert("Não foi possível criar um colaborador");
    } finally {
      setLoading(false);
      setListaColaboradores([...listaColaboradores, nome]);
    }
  };

  return (
    <FormsContainer>
      <TopPart>
        <Titulo>Todos os Colaboradores:</Titulo>
        <ListaColaboradores>
          {listaColaboradores.map((colaborador) => (
            <Text
              id={colaborador}
              style={{ fontSize: 20, marginTop: 5, paddingLeft: 15 }}
            >
              {colaborador}
            </Text>
          ))}
        </ListaColaboradores>
      </TopPart>
      <ModalCollab
        animationType="slide"
        transparent={true}
        visible={addModal}
        onRequestClose={() => {
          setAddModal(!addModal);
        }}
      >
        <FormsBox>
          <View style={{ position: "absolute", top: 20, left: 20 }}>
            <Feather
              name="arrow-left"
              size={30}
              onPress={() => setAddModal(false)}
            />
          </View>
          <Titulo margin={"0px"}>Adicione um colaborador </Titulo>
          <Subtitulo>Preencha com os dados</Subtitulo>
          <UserInput
            placeholder="Digite seu nome"
            margintop={"10px"}
            value={nome}
            onChangeText={(e) => [setNome(e), setError("")]}
          ></UserInput>
          <UserInput
            placeholder="Digite seu email"
            margintop={"10px"}
            type="email"
            value={email}
            onChangeText={(e) => [setEmail(e), setError("")]}
          ></UserInput>
          <UserInput
            placeholder="Digite sua senha"
            type="password"
            margintop={"10px"}
            value={senha}
            onChangeText={(e) => [setSenha(e), setError("")]}
          ></UserInput>

          <LabelErro>{error}</LabelErro>
          {!loading ? (
            <LoginButton onPress={handleFormsSubmit}>
              <ButtonText>Cadastrar</ButtonText>
            </LoginButton>
          ) : (
            <LoginButton>
              <ButtonText>Carregando</ButtonText>
            </LoginButton>
          )}
        </FormsBox>
      </ModalCollab>
      <BottomPart>
        <AddButton onPressIn={() => setAddModal(true)}>
          <ButtonText>Adicionar</ButtonText>
        </AddButton>
      </BottomPart>
    </FormsContainer>
  );
};

export default Forms;
