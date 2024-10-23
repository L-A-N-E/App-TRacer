import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
// Importando autenticação
import { auth } from '../firebase/firebaseConfig.jsx';
// Importando tela
import LoadingScreen from './LoadingScreen';
// Importando componentes
import TeamButton from '../components/favoriteTeam/TeamButton.jsx';
import NextRaceSection from '../components/home/NextRaceSection.jsx';
import PilotPointsSection from '../components/home/PilotFavoriteSection.jsx';
import WellcomeHomeSection from '../components/home/WellcomeHomeSection.jsx';
import TeamPointsSection from '../components/home/TeamFavoriteSection.jsx';
import RankingSection from '../components/home/RankingSection.jsx';
// Importando funções
import { fetchFavoriteTeam, handleSetFavoriteTeam } from '../utils/homeUtils';
import { verifyPlataform } from '../utils/plataformUtils.js';
// Importando dados
import sampleFormulaETeamsData from '../constant/teamsData.jsx';
// Importando estilos
import { HomeSafeView, TeamSelectGradient, TeamText, HomeContainer } from '../styles/HomeStyles.jsx';
import TeamSelect from '../components/favoriteTeam/TeamSelect.jsx';

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
  }, [navigation, favoriteTeam]);

  const handleFavoriteTeamSelection = (team) => {
    if (user) {
      setFavoriteTeam(handleSetFavoriteTeam(user.uid, team));
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <HomeSafeView style={{paddingTop: verifyPlataform ? StatusBar.currentHeight : 0 }}>
      {!favoriteTeam && (
        <TeamSelect handleFavoriteTeamSelection={handleFavoriteTeamSelection} />
      )}
      {favoriteTeam && (
        <FlatList
          ListHeaderComponent={
            <HomeContainer>
              {/* Seção de bem vidas */}
              <WellcomeHomeSection user={user}/>
              {/* Seção do Ranking */}
              <RankingSection navigation={navigation}/>
              {/* Seção da próxima corrida */}
              <NextRaceSection navigation={navigation}/>
              {/* Seção dos pontos pilotos */}
              <PilotPointsSection teamName={favoriteTeam} />
              {/* Seção dos pontos do time */}
              <TeamPointsSection teamName={favoriteTeam}/>
            </HomeContainer>
          }
          data={[]}
        />
      )}
    </HomeSafeView>
  );
};


export default HomeScreen;
