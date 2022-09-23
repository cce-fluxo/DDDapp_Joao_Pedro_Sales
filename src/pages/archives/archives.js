import React, { useState } from "react";
import {
  ArchivesContainer,
  ImageIconCard,
  AddImageButton,
  ArchivesCarrousel,
} from "./styles";
import { Image, ScrollView, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const Archives = () => {
  const [uploadsList, setUploadsList] = useState([1, 2, 3, 4, 5, 6, 7]);

  const HandleImage = async () => {
    result = await ImagePicker.launchImageLibraryAsync({});

    console.log(result);

    if (!result.cancelled) {
      setUploadsList([...uploadsList, result.uri]);
    }
  };

  return (
    <ArchivesContainer>
      <ScrollView>
        <ArchivesCarrousel>
          <AddImageButton onPress={async () => HandleImage}>
            <Feather name="plus" size={40} color="gray" />
          </AddImageButton>
          {uploadsList.map((imagem) => (
            <ImageIconCard key={imagem}>
              <Text>{imagem}</Text>
            </ImageIconCard>
          ))}
        </ArchivesCarrousel>
      </ScrollView>
    </ArchivesContainer>
  );
};

export default Archives;
