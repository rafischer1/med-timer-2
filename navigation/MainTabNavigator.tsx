import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import TimerScreen from "../screens/TimerScreen";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="🏡 Home" component={HomeScreen} options={bottomNavOptions} />
      <Tab.Screen name="⏱ Timer" component={TimerScreen} options={bottomNavOptions} />
      <Tab.Screen
        name="👋 Profile"
        component={ProfileScreen}
        options={bottomNavOptions}
      />
    </Tab.Navigator>
  );
}

export const bottomNavOptions: BottomTabNavigationOptions = {
  unmountOnBlur: true,
  tabBarBadgeStyle: { fontSize: 34, borderColor: "green", padding: 5 },
};

export const tabBarOptions: BottomTabBarOptions = {
  allowFontScaling: true,
  tabStyle: {
    flex: 1,
    justifyContent: "space-around",
    borderTopColor: "#333333",
    backgroundColor: "#dfdfdf",
  },
};

export default Tabs;
