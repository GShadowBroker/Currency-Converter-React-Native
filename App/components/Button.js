import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styled from "styled-components";
import colors from "../constants/colors";

const STouchableOpacity = styled.TouchableOpacity`
  margin: 20px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SImage = styled.Image`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;
const SText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
`;

export const Button = ({ text, handlePress }) => {
  return (
    <STouchableOpacity onPress={handlePress}>
      <SImage
        source={require("../assets/images/reverse.png")}
        resizeMode="contain"
      />
      <SText>{text}</SText>
    </STouchableOpacity>
  );
};
