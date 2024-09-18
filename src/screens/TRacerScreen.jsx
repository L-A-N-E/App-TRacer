import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db, auth } from '../firebase/firebaseConfig'; 
import LoadingScreen from './LoadingScreen';
import { getDoc, doc } from 'firebase/firestore';
import { LogBox } from 'react-native';

const TRacerScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [TRpoints, setTRPoints] = useState(120);
  const [pilots, setPilots] = useState([]);
  const [loading, setLoading] = useState(true);

  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

  useEffect(() => {
    const checkUser = async () => {
      const user = auth.currentUser;
      if (user) {
        setUser(user);
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setPilots(userData.selectedPilots || []);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        setLoading(false);
      } else {
        navigation.navigate('Login');
      }
    };
    checkUser();
  }, [navigation]);

  const navigateToPilotSelection = () => {
    navigation.navigate('PilotSelection', { TRpoints, setTRPoints, pilots, setPilots, user });
  };

  const navigateToPilotDetail = (pilot) => {
    navigation.navigate('PilotDetail', { pilot });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <View>
            <View>
              {pilots.length < 2 ? (
                <>
                  {pilots.length === 0 ? (
                    <>
                      <Text>Select Your Pilots</Text>
                      <TouchableOpacity onPress={navigateToPilotSelection}>
                        <Text>Add Pilot</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={navigateToPilotSelection}>
                        <Text>Add Pilot</Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      <Text>Select Your Pilot</Text>
                      {pilots.map((pilot, index) => (
                        <View key={index}>
                          <Text>{pilot.name} - Points: {pilot.points}</Text>
                          <TouchableOpacity onPress={() => navigateToPilotDetail(pilot)}>
                            <Text>See Details</Text>
                          </TouchableOpacity>
                        </View>
                      ))}
                      <TouchableOpacity onPress={navigateToPilotSelection}>
                        <Text>Add Pilot</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Text>Your Pilots</Text>
                  {pilots.map((pilot, index) => (
                    <View key={index} >
                      <Text>{pilot.name} - Points: {pilot.points}</Text>
                      <TouchableOpacity onPress={() => navigateToPilotDetail(pilot)}>
                        <Text>See Details</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </>
              )}
            </View>

            <Text>Total Points: 0</Text>
          </View>
        }
        data={[]}
        renderItem={() => null}
      />
    </SafeAreaView>
  );
};

export default TRacerScreen;
