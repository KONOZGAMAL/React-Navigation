import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Palette from "../screens/palette";
import routes from "../common/routes";
const Stack =createNativeStackNavigator()

export default function Root(){
    return  <Stack.Navigator>
    <Stack.Screen name={routes.home}
     component={Home}
     options={{
        headerTitle:'Home',
        // header:()=>null,
        headerStyle:{
         // backgroundColor:'yellow',
        },
        // headerTintColor:'gre',
        headerTitleStyle:{
            fontSize:30,
        },
     }}/>
    <Stack.Screen name={routes.palette} component={Palette}/>

    </Stack.Navigator>
}


