import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Simulação de dados de feed
const sampleFeedData = [
  { id: '1', content: 'Primeira corrida emocionante!' },
  { id: '2', content: 'Outra corrida incrível!' },
  { id: '3', content: 'Mais uma corrida interessante!' },
];

const RacesScreen = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    // Simulando carregamento de dados
    setFeed(sampleFeedData);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.feedItem}>
            <Text>{item.content}</Text>
          </View>
        )}
        contentContainerStyle={styles.feed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  feed: {
    marginTop: 16,
  },
  feedItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default RacesScreen;
