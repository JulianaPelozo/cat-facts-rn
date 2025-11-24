import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal aberto! 🎉</Text>
      <Text style={styles.text}>
        Este é o modal padrão do Expo Router. Você pode personalizar ou
        remover como quiser.
      </Text>

      <Button title="Fechar" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },
});
