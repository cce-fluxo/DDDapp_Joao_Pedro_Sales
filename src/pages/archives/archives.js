import React, { useState } from "react";
import {
  ArchivesContainer,
  ImageIconCard,
  AddImageButton,
  ArchivesCarrousel,
  IconCard,
} from "./styles";
import { Image, ScrollView, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { launchImageLibraryAsync } from "expo-image-picker";

const Archives = () => {
  const [uploadsList, setUploadsList] = useState([]);

  const HandleImage = async () => {
    try {
      result = await launchImageLibraryAsync({});
    } catch {
      alert("Não foi possível buscar uma imagem");
    }
    if (!result.cancelled) {
      setUploadsList([...uploadsList, result.uri]);
    }
  };

  return (
    <ArchivesContainer>
      <ScrollView>
        <ArchivesCarrousel>
          <AddImageButton onPress={async () => HandleImage()}>
            <Feather name="plus" size={40} color="gray" />
          </AddImageButton>
          {uploadsList.map((imagem) => (
            <ImageIconCard key={imagem}>
              <IconCard source={{ uri: imagem }} />
            </ImageIconCard>
          ))}
        </ArchivesCarrousel>
      </ScrollView>
    </ArchivesContainer>
  );
};

export default Archives;
