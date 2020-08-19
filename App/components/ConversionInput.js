import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components";
import colors from "../constants/colors";

const SWrapper = styled.View`
  background-color: ${(props) =>
    props.disabled ? colors.offWhite : colors.white};
  margin: 10px 20px;
  border-radius: 5px;
  flex-direction: row;
`;
const SButton = styled.TouchableOpacity`
  background-color: ${colors.white};
  padding: 10px;
  border-right-color: ${colors.border};
  border-right-width: 1px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
const SText = styled.Text`
  font-size: 18px;
  color: ${colors.blue};
  font-weight: bold;
`;
const SInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  color: ${colors.textLight};
  font-size: 16px;
`;

export const ConversionInput = ({
  text,
  onButtonPress,
  disabled,
  ...props
}) => {
  return (
    <SWrapper disabled={disabled}>
      <SButton onPress={onButtonPress}>
        <SText>{text}</SText>
      </SButton>
      <SInput {...props} />
    </SWrapper>
  );
};
