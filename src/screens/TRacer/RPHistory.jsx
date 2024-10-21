import { View, Text, Alert, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import LoadingScreen from "../LoadingScreen";

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
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    if (error) {
        Alert.alert("Error", error.message);
    }

    const renderItem = ({ item, index }) => (
        <View key={index}>
            <Text>{index + 1}st Lap</Text>
            <View>
                <Text>{index === 0 ? "" : `${index + 1}x `}+ Pole Position</Text>
                <Text>RP: {item['attrValue'][0] * 1}</Text>
                <Text>{item['attrValue'][1]}</Text>
            </View>
        </View>
    );

    const renderHeader = () => (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>RPHistory</Text>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={renderHeader}
        />
    );
}

export default RPHistory;
