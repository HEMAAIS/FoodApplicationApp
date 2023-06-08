import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import pic from '../../Image/pic.png'
import food from '../../Image/food.png'
import Logo from '../../Image/Logo.png'


SplashScreen.preventAutoHideAsync();

export default function Onboarding1({ navigation }) {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync(Entypo.font);
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);
    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);
    if (!appIsReady) {
        return null;
    }
    return (
        <View style={{ backgroundColor: '#FFEEDA' }}
            onLayout={onLayoutRootView}>
            {/* <Text>SplashScreen Demo! 👋</Text>
            <Entypo name="rocket" size={50} color={'green'} /> */}
            <View style={styles.container1}>
                <TouchableOpacity onPress={() => navigation.navigate('Onboarding2')}>
                    <Image source={pic} style={{ height: 730 }} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 150 }}></View>

            {/* <View style={styles.container1}>
                <View style={{ marginTop: 34 }}></View>
                <TouchableOpacity onPress={() => navigation.navigate('Onboarding2')}>
                    <View>
                        <Image source={Logo} style={{ height: 127, width: 130, alignItems: 'center', marginTop: 280 }}/>
                    </View>
                </TouchableOpacity>
                <View>
                    <Image source={food} style={{ height: 213.5, width: 210.5, marginTop: 95, marginLeft: -110 }} />
                </View>
            </View > */}

        </View>
    );
}
const styles = StyleSheet.create({
    container1: {
        alignItems: 'center',
        backgroundColor: '#FFEEDA',
    }
});