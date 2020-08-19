import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";

import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";
import { ConversionContextProvider } from "../utils/ConversionContext";

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Options"
        component={Options}
        options={{ headerTitleAlign: "center", headerTitle: "Opções" }}
      />
    </MainStack.Navigator>
  );
};

const ModalStack = createStackNavigator();
const ModalStackScreen = () => {
  return (
    <ModalStack.Navigator>
      <ModalStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <ModalStack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={({ navigation, route }) => ({
          title: route.params && route.params.title,
          headerTitleAlign: "center",
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{ paddingHorizontal: 10 }}
            >
              <Entypo name="cross" size={30} color={colors.blue} />
            </TouchableOpacity>
          ),
        })}
      />
    </ModalStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <ConversionContextProvider>
        <ModalStackScreen />
      </ConversionContextProvider>
    </NavigationContainer>
  );
};
