import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import pic from '../../Image/pic.png'
import food from '../../Image/food.png'
import Logo from '../../Image/Logo.png'

SplashScreen.preventAutoHideAsync();

export default function Onboarding1() {
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
        <View style={styles.container}
            onLayout={onLayoutRootView}>
            {/* <Text>SplashScreen Demo! 👋</Text>
            <Entypo name="rocket" size={50} color={'green'} /> */}
            {/* <Image source={pic} style={{height:780,width:383}} /> */}
            <Image source={Logo} style={{ height: 127, width: 130, position:'absolute',}} />
            <Image source={food} style={{ height: 213.5, width: 210.5,marginTop:520,marginLeft:-178}} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFEEDA',
      
    }
});