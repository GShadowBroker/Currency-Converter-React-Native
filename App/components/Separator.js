import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components";
import colors from "../constants/colors";

const SSeparator = styled.View`
  background: ${colors.border};
  height: ${StyleSheet.hairlineWidth}px;
  margin-left: 20px;
`;

export default () => {
  return <SSeparator />;
};
