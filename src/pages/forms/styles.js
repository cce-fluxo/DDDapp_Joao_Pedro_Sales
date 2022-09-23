import styled from "styled-components/native";

export const FormsContainer = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 30px;
  background-color: ${(props) => props.theme.colors.lightPrimary};
`;

export const FormsBox = styled.View`
  background-color: ${(props) => props.theme.colors.secondary};
  flex: 1;
  padding: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid transparent;
  box-shadow: rgba(149, 157, 165, 0.5) 1px 5px 25px;
  font-weight: 500;
`;

export const AddButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ModalCollab = styled.Modal`
  position: relative;
  width: 250px;
  height: 100px;
  background-color: #fff;
  justify-content: center;
  align-self: center;
`;

export const ListaColaboradores = styled.View``;

export const TopPart = styled.View`
  width: 100%;
  height: 90%;
  flex: 1;
  padding: 20px;
`;

export const BottomPart = styled.View`
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;
