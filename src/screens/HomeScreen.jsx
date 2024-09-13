import React, { useEffect, useState } from 'react';
import { Text, View, FlatList} from 'react-native';
// Importando autenticação
import { auth } from '../firebase/firebaseConfig.jsx';
// Importando tela
import LoadingScreen from './LoadingScreen';
// Importando componentes
import TeamButton from '../components/home/TeamButton.jsx';
import NextRaceSection from '../components/home/NextRaceSection.jsx';
import TeamPointsSection from '../components/home/TeamFavoriteSection.jsx';
import WellcomeHomeSection from '../components/home/WellcomeHomeSection.jsx';
// Importando funções
import { fetchFavoriteTeam, handleSetFavoriteTeam } from '../utils/homeUtils';
// Importando dados
import sampleFormulaETeamsData from '../constant/teamsData.jsx';
// Importando estilos
import { HomeSafeView, TeamSelectGradient, TeamText, HomeContainer } from '../styles/HomeStyles.jsx';

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
          console.error('Error fetching data:', error);
        }

        setLoading(false);
      } else {
        navigation.navigate('Login');
      }
    };

    checkUser();
  }, [navigation]);

  const handleFavoriteTeamSelection = (team) => {
    if (user) {
      handleSetFavoriteTeam(user.uid, team, setFavoriteTeam, navigation);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <HomeSafeView>
      {!favoriteTeam && (
        <TeamSelectGradient>
          <TeamText>Select your favorite team</TeamText>
          <FlatList
            data={sampleFormulaETeamsData.teams}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TeamButton
                team={item}
                onSelect={handleFavoriteTeamSelection}
              />
            )}
          />
        </TeamSelectGradient>
      )}
      {favoriteTeam && (
        <FlatList
          ListHeaderComponent={
            <HomeContainer>
              {/* Seção de bem vidas */}
              <WellcomeHomeSection user={user}/>
              {/* Seção do Ranking */}
              {/* Seção da próxima corrida */}
              <NextRaceSection navigation={navigation}/>
              {/* Seção dos ponstos pilotos */}
              <TeamPointsSection teamName={favoriteTeam} />
            </HomeContainer>
          }
          data={[]}
          renderItem={() => null} 
        />
      )}
    </HomeSafeView>
  );
};


export default HomeScreen;
