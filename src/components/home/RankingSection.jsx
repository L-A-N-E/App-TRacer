import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HomePilotsText, HomeRankingContainer, HomeUpRaces, HomeUpText, HomeUpTextContainer } from '../../styles/HomeStyles'

const RankingSection = () => {

    return (
      <HomeUpRaces>
        <HomeUpTextContainer>
            <HomeUpText>Ranking</HomeUpText>
            <TouchableOpacity onPress={() => navigation.navigate('#')}>
                <HomeUpText>See All</HomeUpText>
            </TouchableOpacity>
        </HomeUpTextContainer>
        < HomeRankingContainer>
            <View>
                <HomePilotsText>Global</HomePilotsText>
                <HomePilotsText>Top 1: X Points</HomePilotsText>
            </View>
            <View>
                <HomePilotsText>Club</HomePilotsText>
                <HomePilotsText>Top 1: X Points</HomePilotsText>
            </View>
        </ HomeRankingContainer>
      </HomeUpRaces>
    )

}

export default RankingSection