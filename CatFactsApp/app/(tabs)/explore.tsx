import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { useThemeContext } from "../../hooks/useThemeContext";

export default function ExploreScreen() {
  const { theme } = useThemeContext();

  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const isDark = theme === "dark";

  const fetchFacts = async (pageNumber = 1) => {
    try {
      const response = await fetch("https://catfact.ninja/facts?limit=10");
      const data = await response.json();

      if (pageNumber === 1) {
        setFacts(data.data.map((item: any) => item.fact));
      } else {
        setFacts((prev) => [...prev, ...data.data.map((item: any) => item.fact)]);
      }
    } catch (error) {
      console.error("Erro ao buscar fatos:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchFacts(page);
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(1);
  }, []);

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: isDark ? "#000" : "#fff" }]}>
        <ActivityIndicator size="large" color={isDark ? "#fff" : "#000"} />
        <Text style={{ color: isDark ? "#fff" : "#000", marginTop: 10 }}>
          Carregando fatos de gatos...
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: isDark ? "#000" : "#fff" }]}>
      <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>
        Cat Facts 🐱
      </Text>

      <FlatList
        data={facts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              {
                backgroundColor: isDark ? "#1a1a1a" : "#f2f2f2",
                borderColor: isDark ? "#333" : "#ddd",
              },
            ]}
          >
            <Text style={{ color: isDark ? "#fff" : "#000", fontSize: 16 }}>
              {item}
            </Text>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={isDark ? "#fff" : "#000"}
          />
        }
        ListFooterComponent={
          <ActivityIndicator style={{ marginVertical: 20 }} color={isDark ? "#fff" : "#000"} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
