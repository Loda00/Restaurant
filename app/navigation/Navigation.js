import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoriteStack'
import TopRestaurantsStack from './TopRestaurantStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: '#646464',
          activeTintColor: '#00a380'
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color)
        })}
      >
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: 'Restaurantes' }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: 'Favoritos' }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: 'Top 5' }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: 'Buscar' }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: 'Cuenta' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const screenOptions = (route, color) => {
  let nameIcon = null

  switch (route.name) {
    case 'restaurants':
      nameIcon = 'compass-outline'
      break;

    case 'favorites':
      nameIcon = 'heart-outline'
      break;

    case 'top-restaurants':
      nameIcon = 'star-outline'
      break;

    case 'search':
      nameIcon = 'magnify'
      break;

    case 'account':
      nameIcon = 'home-outline'
      break;
  
    default:
      break;
  }

  return (
    <Icon
      type="material-community"
      name={nameIcon}
      size={22}
      color={color}
    />
  )
}