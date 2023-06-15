import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Chat from '../Chat/Chat';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Burger from '../Burger/Burger';
import Yourorder from '../Yourorder/Yourorder';

const Tab = createBottomTabNavigator();

const New = () => {
  return (
    // <View style={{backgroundColor:'#FFFFFF'}}>
    <Tab.Navigator 
      initialRouteName="Home" 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EC2578',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: 'white',

        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#EC2578',
          height: 60,
          width: 335,
          paddingBottom: 5,
          paddingTop: 5,
          paddingLeft: 8,
          paddingRight: 8,
          alignItems: 'center',
          // margin:25,
          marginLeft:28,
        marginRight:20,
        marginBottom:10,
        borderRadius: 4,
        },
        // tabBarOptions: {
        //   tabBarType: 'zoomInOut',
        //   tabBarHeight: 70,
        // }
        // tabBarType:''
        tabBarItemStyle: {
          borderRadius: 8,
          width: '30%', height: 45,
          // paddingBottom: 5,
          // paddingTop: 5,
          // paddingLeft: 12,
          // paddingRight: 12,
          // paddingVertical:3
        },
        // tabBarIndicatorStyle: { width: 30 }
        

      }}

    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={28} />
          ),
         
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-sharp" color={color} size={28} />
          ),
        
        }}
      />
      <Tab.Screen
        name="Yourorder"
        component={Yourorder}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={28} />
          ),
         
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" color={color} size={28} />
          ),
        
        }}
      />
    </Tab.Navigator>
    

    // </View>
  )
}

export default New
