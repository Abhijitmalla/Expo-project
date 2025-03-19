import { View, Text, Button } from 'react-native';
import React from 'react';
import { useUser, useClerk } from '@clerk/clerk-expo'; // Use useClerk for sign out

const Header = () => {
  const { user } = useUser();
  const { signOut } = useClerk(); // Get signOut function from useClerk

  console.log("User Data:", user); // Log user data

  return (
    <View>
      <Text>Welcome</Text>
      <Text>{user?.fullName}</Text> {/* Render the user's full name if available */}

      {/* Custom sign-out button */}
      <Button 
        title="user" 
        onPress={() => signOut()} // Trigger sign out when button is pressed
      />
    </View>
  );
}

export default Header;
