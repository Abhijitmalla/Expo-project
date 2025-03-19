import { tokenCache } from '@/cache'
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

  if (!publishableKey) {
    throw new Error('Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
        {/* Slot is where expo-router dynamically renders your child routes */}
        <Slot />
      </ClerkProvider>
    </GestureHandlerRootView>
  )
}

// import { Stack } from "expo-router";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// const RootLayout = () => (
//   <GestureHandlerRootView style={{ flex: 1 }}>
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="(tabs)" />
//       {/* <Stack.Screen name="login" /> 
//       <Stack.Screen name="signup" /> */}
//     </Stack>
//   </GestureHandlerRootView>
// );

// export default RootLayout;


