import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import colors from "../constants/colors";
import Constants from "expo-constants";

const SText = styled.Text`
  font-size: 16px;
  color: ${colors.text};
`;
const STouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: ${colors.blue};
  padding: 16px 20px;
`;

export default ({ title, icon, handlePress }) => {
  return (
    <STouchableOpacity onPress={() => handlePress()}>
      <SText>{title}</SText>
      {icon}
    </STouchableOpacity>
  );
};
