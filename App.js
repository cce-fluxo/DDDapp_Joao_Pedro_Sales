import { StatusBar } from "expo-status-bar";
import React from "react";
import Routes from "./src/routes/routes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "./src/styles/theme";
import { ThemeProvider } from "styled-components";
import Login from "./src/pages/login/login";
import Signup from "./src/pages/signup/signup";
import EsqueciSenha from "./src/pages/esqueci/esqueciSenha";
import { AuthProvider } from "./src/contexts/auth";

const Stack = createNativeStackNavigator();

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Cadastro"
              component={Signup}
              options={{
                title: "",
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="Esqueci"
              component={EsqueciSenha}
              options={{
                title: "",
                headerShown: true,
              }}
            />
            <Stack.Screen
              name="Home"
              component={Routes}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}
