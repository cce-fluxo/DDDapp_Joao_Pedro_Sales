import styled from "styled-components/native";

export const ArchivesContainer = styled.View`
  padding: 10px;
  justify-content: center;
`;

export const ImageIconCard = styled.View`
  height: 100px;
  width: 100px;
  background-color: red;
  border: solid 1px gray;
  margin: 6px;
  border-radius: 6px;
`;

export const AddImageButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin: 6.6px;
  border: solid 1px gray;
`;

export const ArchivesCarrousel = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
