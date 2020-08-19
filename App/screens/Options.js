import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from "react-native";
import RowItem from "../components/RowItem";
import Constants from "expo-constants";
import styled from "styled-components";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import Separator from "../components/Separator";

const SView = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
`;

const openUrl = (url) => {
  return Linking.openURL(url).catch(() =>
    Alert.alert(
      "Ooops! Deu ruim!",
      "Por favor tente de novo ou, se o problema persistir, reporte o bug."
    )
  );
};

export default () => {
  return (
    <SView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        <RowItem
          title="Temas"
          handlePress={() => openUrl("https://learn.handlebarslabs.com")}
          icon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
        />
        <Separator />
        <RowItem
          title="O Básico do React Native"
          handlePress={() =>
            openUrl(
              "https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter"
            )
          }
          icon={<Entypo name="export" size={20} color={colors.blue} />}
        />
        <Separator />
        <RowItem
          title="React Native Por Exemplos"
          handlePress={() => openUrl("https://reactnativebyexample.com")}
          icon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SView>
  );
};
