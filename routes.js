import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AdoptScreen from './src/views/Adopt';
import CreateAdoptionScreen from './src/views/CreateAdoption';
import ProfileScreen from './src/views/Profile';
import PetScreen from './src/views/Pet';

const AdoptStack = createStackNavigator({
  Adopt: AdoptScreen,
  Pet: PetScreen,
},{
  headerMode: 'none'
});

const CreateAdoptionStack = createStackNavigator({
  CreateAdoption: CreateAdoptionScreen
},{
  headerMode: 'none'
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
},{
  headerMode: 'none'
});

const bottomTabApp = createBottomTabNavigator({
    Adopt: AdoptStack,
    CreateAdoption: {
        screen: CreateAdoptionStack,
        navigationOptions: {
          title: "Create Adoption",
        }
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
          title: "Profile",
        }
    },
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Adopt') {
            iconName = `ios-paw`;
          } else if (routeName === 'CreateAdoption') {
            iconName = `ios-add-circle`;
            title = "Create Adoption"
          }else if (routeName === 'Profile') {
            iconName = `ios-person`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'brown',
        inactiveTintColor: 'gray',
    },
})

export default Routes =  createAppContainer(bottomTabApp)