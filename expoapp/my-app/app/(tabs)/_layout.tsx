import { Tabs } from 'expo-router';
import { ClerkProvider } from '@clerk/clerk-expo';
import { FontAwesome } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  return (
    <ClerkProvider publishableKey="pk_test_cHJvcGVyLWltcGFsYS03NS5jbGVyay5hY2NvdW50cy5kZXYk">
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color="darkblue" />,
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: 'Favorite',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome name="heart" size={24} color="red"/>,
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'Inbox',
            headerShown: false,
            tabBarIcon: ({ color }) => <Fontisto name="hipchat" size={24} color="green"/>,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome6 name="people-group" size={24} color="blue" />,
          }}
        />
      </Tabs>
    </ClerkProvider>
  );
}
