import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "green",
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
        }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: () => <AntDesign name="search1" size={24} color="black" />
        }} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
