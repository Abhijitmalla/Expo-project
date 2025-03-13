import { View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import MyButton from '@/components/MyButton'; // Import button

const Index = () => {
  const router = useRouter();

  const onContinue = () => {
    router.navigate('/login'); // Correct navigation method
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyButton title="Continue" onPress={onContinue} /> 
    </View>
  );
};

export default Index;
