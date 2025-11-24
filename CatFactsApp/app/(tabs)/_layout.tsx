import { Tabs } from "expo-router";
import { useThemeContext } from "../../hooks/useThemeContext";

export default function TabsLayout() {
  const { theme } = useThemeContext();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme === "dark" ? "#fff" : "#000",
        tabBarStyle: {
          backgroundColor: theme === "dark" ? "#000" : "#fff",
        },
      }}
    />
  );
}
