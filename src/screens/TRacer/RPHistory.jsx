// Importando com ponentes
import { View, Text, Alert, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
// Importando telas
import LoadingScreen from "../LoadingScreen";
// Importando componentes
import Error from '../../components/error/Error'
// Importando estilo
import { RPFlatListView, RPInfoContainer, RPInfoText, RPText, RPTextContainer, RPView } from '../../styles/TRacerStyles';

const RPHistory = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("fiware-service", "smart");
        myHeaders.append("fiware-servicepath", "/");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://20.206.249.122:8666/STH/v1/contextEntities/type/TrackVision/id/urn:ngsi-ld:TRV:027/attributes/lap?lastN=10", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); 
            })
            .then((result) => {
                setData(result['contextResponses'][0]['contextElement']['attributes'][0]['values']);
                setLoading(false);
            })
            .catch((error) => {
                setData([1,2,3])
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    if (error) {
        return <Error/>
    }

    const renderItem = ({ item, index }) => (
        <RPView key={index}>
            <RPTextContainer>
                <RPText>{index + 1}st Lap</RPText>
            </RPTextContainer>
            <RPInfoContainer>
                <RPInfoText>{index === 0 ? "" : `${index + 1}x `}+ Pole Position</RPInfoText>
                <RPInfoText>RP: {item['attrValue'][0] * 1}</RPInfoText>
                <RPInfoText>time: {item['attrValue'][1]}</RPInfoText>
            </RPInfoContainer>
        </RPView>
    );

    return (
        <RPFlatListView>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </RPFlatListView>
    );
}

export default RPHistory;
