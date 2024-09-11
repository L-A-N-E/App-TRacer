// Importando dependencias
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
// Importando autenticação
import { auth } from '../firebase/firebaseConfig.jsx';
// Importando tela
import LoadingScreen from './LoadingScreen';
// Importando componentes
import TeamButton from '../components/home/TeamButton.jsx';
import NextRaceSection from '../components/home/NextRaceSection.jsx';
import TeamPointsSection from '../components/home/TeamFavoriteSection.jsx';
// Importando funções
import { fetchFavoriteTeam, handleSetFavoriteTeam } from '../utils/homeUtils';
// Importando dados
import sampleFormulaETeamsData from '../constant/teamsData.jsx';
// Importando estilos
import { HomeSafeView, TeamSelectGradient, TeamText, HelloWellcome, HomeText, HomeWellcomeText, HomeContainerText } from '../styles/HomeStyles.jsx';
import WellcomeHomeSection from '../components/home/WellcomeHomeSection.jsx';

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
      <View>
        {/* Se o usuário ainda não escolheu seu time favorito, ele terá que escolher um */}
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
        {/* Se o usuário ainda já escolheu um time favorito (verificado no FIREBASE), ele verá a tela do HOME */}
        {favoriteTeam && (
          <View>
            {/* Seção Wellcome Home */}
            <WellcomeHomeSection user={user}/>

            <Text>Your favorite team is {favoriteTeam}.</Text>

            {/* Seção Próxima Corrida */}
            <NextRaceSection navigation={navigation}/>

            {/* Seção Pontos da Equipe */}
            <TeamPointsSection teamName={favoriteTeam} />
          </View>
        )}
      </View>
    </HomeSafeView>
  );
};

export default HomeScreen;
