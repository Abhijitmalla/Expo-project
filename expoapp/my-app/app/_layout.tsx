import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      {/* <Stack.Screen name="login" /> 
      <Stack.Screen name="signup" /> */}
    </Stack>
  </GestureHandlerRootView>
);

export default RootLayout;


