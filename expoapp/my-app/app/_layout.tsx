import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => (
  <GestureHandlerRootView>
  <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="index" />
    <Stack.Screen name="login" />

    <Stack.Screen name="signup" />

  </Stack>
  </GestureHandlerRootView>
);

export default RootLayout;
