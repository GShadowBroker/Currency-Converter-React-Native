import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import styled from "styled-components";
import { ConversionInput } from "../components/ConversionInput";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Button } from "../components/Button";
import { Entypo } from "@expo/vector-icons";
import { ConversionContext } from "../utils/ConversionContext";

import api from "../utils/api";

const screen = Dimensions.get("window");

const SBackground = styled.View`
  flex: 1;
  background-color: ${colors.blue};
`;

const SHeader = styled.SafeAreaView`
  align-items: flex-end;
  padding: 10px 20px;
`;

const SContent = styled.View`
  padding-top: ${screen.width * 0.08};
`;

const SLogoContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
const SLogoBackground = styled.Image`
  width: ${screen.width * 0.45}px;
  height: ${screen.height * 0.3}px;
`;
const SLogo = styled.Image`
  position: absolute;
  width: ${screen.width * 0.25}px;
  height: ${screen.height * 0.25}px;
`;
const STextHeader = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 30px;
  margin: 20px 0;
  text-align: center;
`;
const STextFooter = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  text-align: center;
`;

export default ({ navigation }) => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [value, setValue] = useState("1");
  const {
    baseCurrency,
    setBaseCurrency,
    quoteCurrency,
    setQuoteCurrency,
    conversionRate,
    setConversionRate,
    swapCurrencies,
    loading,
  } = useContext(ConversionContext);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () =>
      setScrollEnabled(true)
    );
    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      setScrollEnabled(false);
    });
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <SBackground>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <SHeader>
        <TouchableOpacity onPress={() => navigation.push("Options")}>
          <Entypo name="cog" size={32} color={colors.white} />
        </TouchableOpacity>
      </SHeader>

      <ScrollView scrollEnabled={scrollEnabled}>
        <SContent>
          <SLogoContainer>
            <SLogoBackground
              source={require("../assets/images/background.png")}
              resizeMode="contain"
            />
            <SLogo
              source={require("../assets/images/logo.png")}
              resizeMode="contain"
            />
          </SLogoContainer>
          <STextHeader>Conversor de Moedas</STextHeader>
          <ConversionInput
            text={baseCurrency}
            value={value}
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Moeda Base",
                selectedCurrency: baseCurrency,
              })
            }
            onChangeText={(text) => setValue(text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value={
              value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
            }
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Moeda de Cotação",
                selectedCurrency: quoteCurrency,
              })
            }
            onChangeText={(text) => console.log("text", text)}
            keyboardType="numeric"
            editable={false}
            disabled
          />
          {loading ? (
            <ActivityIndicator color={colors.white} />
          ) : (
            <STextFooter>{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency}. Atualizado: ${format(
              new Date(),
              "d MMMM, yyyy",
              { locale: ptBR }
            )}.`}</STextFooter>
          )}
          <Button text="Inverter Moedas" handlePress={() => swapCurrencies()} />
        </SContent>
      </ScrollView>
    </SBackground>
  );
};
