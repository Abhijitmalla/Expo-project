import { View, Text, Image } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

const Header = () => {
  const { user } = useUser();
  console.log("User Data:", user);

  return (
    <View>
      <View>
        <Text style={{ fontFamily: 'Outfit', fontSize: 18 }}>Welcome</Text>
        <Text style={{ fontFamily: 'Outfit-Medium', fontSize: 25 }}>
          {user?.fullName}
        </Text>
        {user?.imageUrl && ( // Ensure imageUrl exists before rendering the Image component
          <Image
            source={{ uri: user.imageUrl }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20, // Make it circular if it's a profile pic
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Header;
