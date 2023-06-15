import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import star from '../../Image/star.png'
import camera from '../../Image/camera.png'
import { Button } from 'react-native-elements';



const Promo = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 45 }}></View>
            <View >
                <Text style={styles.text}>Order Complete</Text>
            </View>
            <View style={{ marginTop: 65 }}></View>
            <View style={styles.container1}>
                <View>
                    <Text style={styles.text1}>What is your rate?</Text>
                </View>
                <View style={styles.image}>
                    <View>
                        <Image source={star} style={styles.star} />
                    </View>
                    <View>
                        <Image source={star} style={styles.star} />
                    </View>
                    <View>
                        <Image source={star} style={styles.star} />
                    </View>
                    <View>
                        <Image source={star} style={styles.star} />
                    </View>
                    <View>
                        <Image source={star} style={styles.star} />
                    </View>
                </View>
                <View>
                    <Text style={styles.text2}>Please share your opinion{'\n'}about the Food</Text>
                </View>
                <View>
                    <Text style={styles.text3}>Your review</Text>
                </View>
                <View style={styles.container2}>
                    <View style={{alignItems:'center',marginTop: 12}}>
                        <Image source={camera} />
                    </View>
                    <View>
                        <Text style={styles.text4}>Add your photos</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View >
                        <Button onPress={() => navigation.navigate('Rate')}
                            title="Send review"
                            buttonStyle={{ backgroundColor: '#EC2578', width: 315, height: 50, borderRadius: 4 }}
                            titleStyle={{ fontSize: 17, fontWeight: 600 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 34 }}></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        alignItems: 'center',

    },
    text: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 700,
        color: '#EC2578',
        textAlign: 'center'
    },
    container1: {
        width: 385,
        height: 626,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'grey',
        alignItems: 'center',
    },
    text1: {
        fontSize: 21,
        fontWeight: 600,
        color: '#000000',
        textAlign: 'center',
        marginTop: 20
    },
    image: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 180,
        marginTop: 20,
        alignSelf: 'center'
    },
    text2: {
        fontSize: 17,
        fontWeight: 600,
        color: '#000000',
        textAlign: 'center',
        marginTop: 25
    },
    text3: {
        fontSize: 12,
        fontWeight: 400,
        color: '#000000',
        marginTop: 70,
        marginLeft: -155
    },
    container2:{
        width:104,
        height:110,
        backgroundColor:'#EDEDED',
        // backgroundColor:'red',
        borderRadius:4,
        marginTop:90,
        marginLeft:-220
    },
    text4:{
        fontSize: 11,
        fontWeight: 600,
        color: '#000000',
        textAlign: 'center',
        marginTop: 18,
    },
    container3: {
        alignItems: 'center',
        marginTop:25
    }
});
export default Promo