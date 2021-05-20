import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import TimerScreen from "../screens/TimerScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "ios-planet" : "ios-planet-outline";
              break;
            case "Profile":
              iconName = focused ? "ios-person" : "ios-person-outline";
              break;
            case "Timer":
              iconName = focused ? "ios-timer" : "ios-timer-outline";
          }
          return <Ionicons name={iconName} size={26} color={"#78EFE4"} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarBadge: null }}
      />
      <Tab.Screen name="Timer" component={TimerScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export const tabBarOptions: BottomTabBarOptions = {
  inactiveTintColor: "#78EFE4",
  activeTintColor: "#8B78EF",
  showLabel: false,
  tabStyle: {
    flex: 1,
    justifyContent: "space-around",
    borderTopColor: "#333333",
    backgroundColor: "#333333",
  },
};

export default Tabs;
