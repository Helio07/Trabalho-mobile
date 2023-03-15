import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../SCREENS/signln";
import Home from "../SCREENS/HOME";

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
        </Navigator>
    )
}