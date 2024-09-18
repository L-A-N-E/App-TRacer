import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Button, StyleSheet } from 'react-native';
import sampleFormulaETeamsData from '../constant/teamsData.jsx';
import { db } from '../firebase/firebaseConfig.jsx';
import { doc, updateDoc } from 'firebase/firestore';

const PilotSelectionScreen = ({ navigation, route }) => {
  const { TRpoints, setTRPoints, pilots, setPilots, user } = route.params;
  const [availableTeams] = useState(sampleFormulaETeamsData.teams);

  const handleSelectPilot = async (pilot) => {
    if (TRpoints >= pilot.cust_tr && pilots.length < 2) {
      const updatedPilots = [...pilots, { name: pilot.name, points: pilot.current_RacesPoints }];
      const userRef = doc(db, 'users', user.uid);

      try {
        await updateDoc(userRef, {
          selectedPilots: updatedPilots,
          tr_points: TRpoints - pilot.cust_tr
        });
        setPilots(updatedPilots);
        setTRPoints(TRpoints - pilot.cust_tr);
        navigation.goBack();
      } catch (error) {
        console.error('Error updating document: ', error);
      }
    } else {
      alert('Not enough points or already selected two pilots.');
    }
  };

  const confirmPilotSelection = (pilot) => {
    Alert.alert(
      "Confirm Purchase",
      `Do you want to buy ${pilot.name} for ${pilot.cust_tr} points?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Buy",
          onPress: () => handleSelectPilot(pilot)
        }
      ]
    );
  };

  const renderPilotItem = (pilot) => (
    <View>
      <Text>{pilot.name} - Cost: {pilot.cust_tr} Points</Text>
      <Button title="Buy" onPress={() => confirmPilotSelection(pilot)} />
    </View>
  );

  const renderTeamItem = ({ item }) => (
    <View>
      <FlatList
        data={item.drivers}
        keyExtractor={driver => driver.name}
        renderItem={({ item: driver }) => renderPilotItem(driver)}
      />
    </View>
  );

  return (
    <View>
      <View>
        <Text>TOTAL: {TRpoints}</Text>
      </View>
      <FlatList
        data={availableTeams}
        keyExtractor={item => item.id}
        renderItem={renderTeamItem}
      />
    </View>
  );
};


export default PilotSelectionScreen;
