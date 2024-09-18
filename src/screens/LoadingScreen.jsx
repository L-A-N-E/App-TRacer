// Importando dependencias
import React, { useEffect, useRef } from 'react';
import {  Animated, StyleSheet } from 'react-native';
// Importando cores
import Colors from '../constant/Colors';
// Importando estilo
import { LoadingContainer } from '../styles/LoadingStyle';

const Loading = () => {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const startAnimation = () => {
            rotateAnim.setValue(0);
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
                friction: 1,
            }).start(() => startAnimation());
        };
        startAnimation();
    }, [rotateAnim]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg'],
    });

    return (
        <LoadingContainer>
            <Animated.View style={[styles.loader, { transform: [{ rotate: spin }] }]}>
            </Animated.View>
        </LoadingContainer>
    );
};

const styles = StyleSheet.create({
    loader: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderRightWidth: 4,
        borderRightColor: Colors.red_color,
        position: 'relative',
    },
});

export default Loading;
