import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import star from '../../Image/star.png'
import burger from '../../Image/burger.png'
import roll from '../../Image/roll.png'
import camera from '../../Image/camera.png'
import { Button } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';


const Rate = ({navigation}) => {
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
                {/* <View style={styles.image}>
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
                                     
                </View> */}
                <View style={{ marginTop:5 }}>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={25}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10, }}
                        defaultRating={5}
                    />
                </View>
                <View>
                    <Text style={styles.text2}>Please share your opinion{'\n'}about the Food</Text>
                </View>
                <View>
                    <TextInput style={styles.input1} placeholder='I’m super happy with the service! I have never order
food online and i did not think they have better 
food quality but it turns out they fit prety perfectly.
I got fresh burger and on time delivery' placeholderTextColor={'#000000'} />
                </View>
                <View style={styles.photo}>
                    <View style={styles.container2}>
                        <View style={{ alignItems: 'center', marginTop: 18 }}>
                            <Image source={burger} />
                        </View>
                    </View>
                    <View style={styles.container2a}>
                        <View style={{ alignItems: 'center', marginTop: 18 }}>
                            <Image source={roll} />
                        </View>
                    </View>
                    <View style={styles.container2}>
                        <View style={{ alignItems: 'center', marginTop: 12 }}>
                            <Image source={camera} />
                        </View>
                        <View>
                            <Text style={styles.text4}>Add your photos</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View >
                        <Button onPress={() => navigation.navigate('VoucherPromo')}
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
    // image: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     width: 180,
    //     marginTop: 15,
    //     alignSelf: 'center'
    // },
    text2: {
        fontSize: 17,
        fontWeight: 600,
        color: '#000000',
        textAlign: 'center',
        marginTop: 15
    },
    input1: {
        // paddingTop:-50,
        paddingStart: 15,
        height: 119,
        width: 315,
        fontSize: 12,
        borderRadius: 4,
        textAlign: 'left',
        borderWidth: 1,
        borderColor: '#646464',
        marginTop: 40

    },
    photo: {
        width: 340,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container2: {
        width: 106,
        height: 110,
        backgroundColor: '#EDEDED',
        // backgroundColor: 'red',
        borderRadius: 4,
        marginTop: 30,
        // marginLeft: -220
    },
    container2a: {
        width: 116,
        height: 110,
        backgroundColor: '#EDEDED',
        // backgroundColor: 'red',
        borderRadius: 4,
        marginTop: 30,
        // marginLeft: -220
    },
    text4: {
        fontSize: 11,
        fontWeight: 600,
        color: '#000000',
        textAlign: 'center',
        marginTop: 18,
    },
    container3: {
        alignItems: 'center',
        marginTop: 30
    },


});
export default Rate