import { ThemeProvider } from "styled-components";
import { Text, StyleSheet, View } from "react-native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Dashboard } from "./src/pages/Dashboard";
import theme from "./src/global/styles/theme";
import { Signin } from "./src/pages/Signin";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando</Text>
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Dashboard /> */}
      <Signin />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});
