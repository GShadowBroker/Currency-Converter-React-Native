import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import colors from "../constants/colors";
import styled from "styled-components";

const SView = styled.View`
  margin-top: 200px;
`;

export default () => {
  return (
    <SView>
      <TouchableOpacity handlePress={() => alert("press in")}>
        <Text>djasndnalskd</Text>
      </TouchableOpacity>
    </SView>
  );
};
