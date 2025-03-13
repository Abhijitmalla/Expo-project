import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ backgroundColor: "blue", paddingHorizontal: 40, paddingVertical: 15, borderRadius: 10 ,textAlign:"center"}}
      onPress={onPress} 
    >
      <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
