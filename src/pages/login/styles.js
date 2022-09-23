import styled from "styled-components/native";

export const LoginContainer = styled.View`
  height: 100%;
  background-color: ${(props) => props.theme.colors.lightPrimary};
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
`;

export const LoginBox = styled.View``;

export const Imagem = styled.Image`
  height: 80px;
  width: 80px;
`;

export const Titulo = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Subtitulo = styled.Text`
  font-size: 15px;
`;

export const UserInput = styled.TextInput`
  width: 100%;
  height: 45px;
  font-size: 15px;
  padding: 0px 13px;
  border-radius: 6px;
  border: 0.5px solid gray;
  outline-style: none;
  margin-top: ${(props) => props.margintop};
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const Esqueci = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Cadastro = styled.Text`
  color: ${(props) => props.theme.colors.darkPrimary};
`;

export const LabelErro = styled.Text`
  color: red;
  font-size: 14px;
`;
