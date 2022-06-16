import { View, Text,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {COLORS, icons} from "../constants";
import { Home } from '../screens';


const Tab = createBottomTabNavigator();


const tabBarOptions= {
    showLabels: false,
    style: {
        height:"10%"
    }
}

const CameraButton = () =>{
    return(
        <View
            style = {{
                alignItems:'center',
                justifyContent:'center',
                width:40,
                height:40,
                borderRadius:25,
                backgroundColor:COLORS.primary
            }}
        >
            <Image  
                source={icons.camera}
                resizeMode = 'contain'
                style={{
                    width:23,
                    height:23,
                }}
            />
        </View>
    )
}

export default function Tabs() {
  return (
    <Tab.Navigator
        // tabBarOptions={tabBarOptions}
        tabBarStyle = {{
            marginHorizontal: 20
        }}
        screenOptions={({route}) =>({
            headerShown: false,
            tabBarIcon: ({focused}) =>{
                const tintColor = focused ? COLORS.primary : COLORS.gray;
                switch (route.name){
                    case "Home":
                        return (
                            <Image 
                                source={icons.flash} 
                                resizeMode = 'contain'
                                style = {{
                                    tintColor: tintColor,
                                    width:25,
                                    height:25,
                                }}
                            />
                        )
                    case "Box":
                        return (
                            <Image 
                                source={icons.cube} 
                                resizeMode = 'contain'
                                style = {{
                                    tintColor: tintColor,
                                    width:25,
                                    height:25,
                                }}
                            />
                        )
                    case "Camera":
                        return (
                            <CameraButton 
                            />

                        )
                     
                    case "Search":
                        return (
                            <Image 
                                source={icons.search}  
                                resizeMode = 'contain'
                                style = {{
                                    tintColor: tintColor,
                                    width:25,
                                    height:25,
                                }}
                            />
                        ) 
                    case "Favourite":
                        return (
                            <Image 
                                source={icons.heart}  
                                resizeMode = 'contain'
                                style = {{
                                    tintColor: tintColor,
                                    width:25,
                                    height:25,
                                }}
                            />
                        )   
                }
            }
        })
        
        
    }
    >
        <Tab.Screen 
            name="Home"
            component={Home}
        />
        <Tab.Screen 
            name="Box"
            component={Home}
        />
        <Tab.Screen 
            name="Camera"
            component={Home}
        />
        <Tab.Screen 
            name="Search"
            component={Home}
        />
        <Tab.Screen 
            name="Favourite"
            component={Home}
        />



    </Tab.Navigator>
  )
}