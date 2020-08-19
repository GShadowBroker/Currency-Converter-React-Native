import React, { useContext } from "react";
import { View, StatusBar, FlatList } from "react-native";
import colors from "../constants/colors";
import RowItem from "../components/RowItem";
import Separator from "../components/Separator";
import currencies from "../data/currencies.json";
import styled from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { ConversionContext } from "../utils/ConversionContext";

const SView = styled.View`
  background-color: ${colors.white};
`;

export default ({ navigation, route = {} }) => {
  const insets = useSafeAreaInsets();
  const params = route.params || {};
  const { setBaseCurrency, setQuoteCurrency } = useContext(ConversionContext);
  return (
    <SView>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const isSelected = params.selectedCurrency === item;
          return (
            <RowItem
              title={item}
              handlePress={() => {
                if (!params.title) return;
                if (params.title.toLowerCase() === "moeda base") {
                  setBaseCurrency(item);
                } else if (params.title.toLowerCase() === "moeda de cotação") {
                  setQuoteCurrency(item);
                }
                navigation.navigate("Home");
              }}
              icon={
                isSelected && (
                  <View>
                    <Entypo name="check" size={20} color={colors.blue} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </SView>
  );
};
