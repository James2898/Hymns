import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import HymnScreen from './screens/HymnScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const COLORS = {
  primary: '#82589F',
  header: '#ffffff'
}

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  }
  
  return (
    <View>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function homeScreenStack ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
          headerLeft: () =>
            <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
    </Stack.Navigator>
  );
}



function hymnScreenStack ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hymn Screen"
        component={HymnScreen}
        options={{
          title: 'Hymn Screen',
          headerLeft: () =>
            <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      />
    </Stack.Navigator>
  );
}

function aboutScreenStack ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={AboutScreen}
        options={{
          headerLeft: () =>
            <NavigationDrawerStructure navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerTintColor: COLORS.header,
          title: 'About Screen'
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: COLORS.primary,
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="HomeScreen"
          options={{ drawerLabel: 'Home' }}
          component={homeScreenStack} />
        <Drawer.Screen
          name="HymnScreen"
          options={{ drawerLabel: 'Hymns' }}
          component={hymnScreenStack} />
        <Drawer.Screen
          name="AboutScreen"
          options={{ drawerLabel: 'About' }}
          component={aboutScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
