import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// Importa o arquivo de configuração
import config from '../constant/config';

const RacesScreen = () => {
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRaces = async () => {
      try {
        const response = await fetch(config.API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRaces(data);
      } catch (error) {
        console.error('Failed to fetch races:', error);
        setError('Failed to load races.');
      } finally {
        setLoading(false);
      }
    };

    loadRaces();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ff0000" />
        <Text>Loading races...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  const renderRaceItem = ({ item }) => (
    <View style={styles.raceItem}>
      <Text style={styles.raceName}>{item.name}</Text>
      <Text style={styles.raceDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={races}
        keyExtractor={(item) => item.id}
        renderItem={renderRaceItem}
        contentContainerStyle={styles.raceList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  raceList: {
    marginTop: 16,
  },
  raceItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  raceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  raceDate: {
    fontSize: 14,
    color: '#555',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

export default RacesScreen;
