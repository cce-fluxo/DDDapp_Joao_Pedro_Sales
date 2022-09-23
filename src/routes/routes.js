import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Archives from "../pages/archives/archives";
import Notes from "../pages/notes/notes";
import Profile from "../pages/profile/profile";
import Forms from "../pages/forms/forms";
import { Entypo, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "transparent",
          paddingBottom: 5,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen
        name="Arquivos"
        component={Archives}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="archive" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notas"
        component={Notes}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="file" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Colaboradores"
        component={Forms}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="help-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
