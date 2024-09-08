// Importando dependencias
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, FlatList } from 'react-native';
// Importando autenticação
import { auth } from '../firebase/firebaseConfig.jsx'; 
// Importando telas
import LoadingScreen from './LoadingScreen';
// Importando componentes
import TeamButton from '../components/TeamButton.jsx';
// Importando funções
import { fetchFavoriteTeam, handleSetFavoriteTeam } from '../utils/homeUtils';
// Importando dados
import sampleFormulaETeamsData from '../constant/teamsData.jsx';  

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [favoriteTeam, setFavoriteTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const user = auth.currentUser;
      if (user) {
        setUser(user);

        try {
          const team = await fetchFavoriteTeam(user.uid);
          setFavoriteTeam(team);
        } catch (error) {
          // Lidar com erros se necessário
          console.log(error)
        }

        setLoading(false);
      } else {
        navigation.navigate('Login');
      }
    };

    checkUser();
  }, []);

  const handleFavoriteTeamSelection = (team) => {
    if (user) {
      handleSetFavoriteTeam(user.uid, team, setFavoriteTeam, navigation);
    }
  };

  if (loading) {
    return <LoadingScreen/>
  }

  return (
    <SafeAreaView>
      <View>
        {!favoriteTeam && (
          <View>
          <Text>Qual é o seu time favorito da Fórmula E?</Text>
          <FlatList
            data={sampleFormulaETeamsData.teams}
            renderItem={({ item }) => (
              <TeamButton
                team={item}
                onSelect={handleFavoriteTeamSelection}
              />
            )}
            keyExtractor={item => item.id}
          />
          </View>
        )}
        {favoriteTeam && (
          <View>
            <Text>Hello, {user.displayName} 👋</Text>
            <Text>The nearest you can get to FE!</Text>
            <Text>And have fun with others fans!</Text>
            <Image source={require('../assets/images/logo/FE_logo.png')}/>
            <Text>Seu time favorito é {favoriteTeam}.</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
