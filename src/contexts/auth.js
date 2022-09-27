import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function loadStorageData() {
      const userToken = await AsyncStorage.getItem("user_token");
      const usersStorage = await AsyncStorage.getItem("users_bd");

      if (userToken && usersStorage) {
        const hasUser = await JSON.parse(usersStorage)?.filter(
          (user) => user.email === JSON.parse(userToken).email
        );

        if (hasUser) setUser(hasUser[0]);
      }
    }
    loadStorageData();
  }, []);

  const signin = async (email, password) => {
    const aux = await AsyncStorage.getItem("users_bd");
    const usersStorage = JSON.parse(aux);

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        await AsyncStorage.setItem(
          "user_token",
          JSON.stringify({ email, token })
        );
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = async (email, password) => {
    const aux = await AsyncStorage.getItem("users_bd");
    const usersStorage = JSON.parse(aux);

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já existe uma conta com esse E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    await AsyncStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
