import { Stack } from "expo-router";
import { useEffect } from "react";
import { injectGlobalStyles } from "../styles/global";

export default function RootLayout() {
  useEffect(() => {
    injectGlobalStyles();
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
