import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import Filter from '../../Image/Filter.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import home from '../../Image/home.png'
import basket from '../../Image/basket.png'
import user from '../../Image/user.png'
import chat from '../../Image/chat.png'
import burger from '../../Image/burger.png'
import roll from '../../Image/roll.png'
import pizza from '../../Image/pizza.png'
import beef from '../../Image/beef.png'
import b1 from '../../Image/b1.png'
import b2 from '../../Image/b2.png'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

const XBurger = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const Burger = [
        {
            uri: require("../../Image/burger.png"),
            name: "Zinger Burger",
            rupees: "2$",
        },
        {
            uri: require("../../Image/b1.png"),
            name: "Long Burger",
            rupees: "2$",
        },
        {
            uri: require("../../Image/beef.png"),
            name: "Beef burger",
            rupees: "3$",

        },
        {
            uri: require("../../Image/b2.png"),
            name: "Sandwich",
            rupees: "3$",

        },
        {
            uri: require("../../Image/pizza.png"),
            name: "Pizza roll",
            rupees: "2$",

        },
        {
            uri: require("../../Image/roll.png"),
            name: "Roll Paratha",
            rupees: "3$",

        },

    ];
    const [burgers, setBurgers] = useState(Burger);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ marginTop: 45 }}></View>
                <View style={{ marginLeft: -150 }}>
                    <Text style={styles.text}>Find Your {'\n'}Favourite Food</Text>
                </View>
                <View style={styles.search}>
                    <View style={styles.inputContainer}>
                        <Searchbar
                            style={{ width: 293, height: 54, borderRadius: 30, backgroundColor: '#EDEDED' }}
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                        />
                        <Image source={Filter} style={styles.Filter} />
                    </View>
                    <View>
                        <MaterialCommunityIcons name='bell-badge-outline' size={35} color={'#EC2578'} style={{ marginLeft: 20 }} />
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={{ marginLeft: 25, marginTop: 6, marginBottom: 5 }}>
                        <Button onPress={() => navigation.navigate('New')}
                            title="Burger"
                            buttonStyle={{ width: 112, height: 44, borderRadius: 4, backgroundColor: '#FFEEDA', }}
                            titleStyle={{ fontSize: 14, fontWeight: 500, color: '#646464', textAlign: 'center' }}
                            icon={
                                <MaterialCommunityIcons
                                    name="close"
                                    size={20}
                                    color={'#646464'}
                                    marginLeft={18}
                                />
                            }
                            iconRight
                        />
                    </View>
                </View>

                <View style={{ marginTop: 5 }}>
                    <View style={styles.head}>
                        <View style={{ marginLeft: 30 }}>
                            <Text style={styles.texta}>Burgers</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: -25 }}>
                        <View style={styles.tamil}>
                            {burgers.map((data) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={styles.A}>
                                            <Image source={data.uri}></Image>
                                            <Text style={styles.input}>{data.name}</Text>
                                            <Text style={styles.input1}>{data.rupees}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                </View>
                {/* <View style={styles.container2}>
                    <View style={styles.head}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.texta}>Burger</Text>
                        </View>
                    </View>
                    <View style={styles.Burgers}>
                        <View style={styles.A}>
                            <Image source={burger} />
                            <Text style={styles.input}>Zinger Burger</Text>
                            <Text style={styles.input1}>2$</Text>
                        </View>
                        <View style={styles.A}>
                            <Image source={b1} />
                            <Text style={styles.input}>Burger</Text>
                            <Text style={styles.input1}>2$</Text>
                        </View>
                    </View>
                    <View style={styles.Burgers}>
                        <View style={styles.A}>
                            <Image source={beef} />
                            <Text style={styles.input}>Beef burger</Text>
                            <Text style={styles.input1}>3$</Text>
                        </View>
                        <View style={styles.A}>
                            <Image source={b2} />
                            <Text style={styles.input}>Sandwich</Text>
                            <Text style={styles.input1}>3$</Text>
                        </View>
                    </View>
                    <View style={styles.Burgers}>
                        <View style={styles.A}>
                            <Image source={pizza} />
                            <Text style={styles.input}>Pizza roll</Text>
                            <Text style={styles.input1}>2$</Text>
                        </View>
                        <View style={styles.A}>
                            <Image source={roll} />
                            <Text style={styles.input}>Roll Paratha</Text>
                            <Text style={styles.input1}>3$</Text>
                        </View>

                    </View>
                </View> */}

                {/* <View style={styles.container3}>
                    <View style={styles.appbar}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Image source={home} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Image source={user} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Image source={basket} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                                <Image source={chat} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}
            </View>
            <View style={{ marginTop: 5 }}></View>
        </ScrollView>
    )
}
export default XBurger
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFEFF',
        alignItems: 'center',

    },
    text: {
        fontSize: 30,
        fontWeight: 700,
        color: '#000000',
        textAlign: 'left',
        // marginLeft: 15
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3,
        paddingBottom: 3,

    },
    Filter: {
        position: 'absolute',
        right: 20,
    },
    container1: {
        width: 355,
        alignSelf: 'flex-start',
        // backgroundColor:'red',

    },
    text1: {
        fontSize: 17,
        fontWeight: 700,
        color: '#FFFFFF',
        textAlign: 'left',
        marginLeft: 18
    },
    container2: {
        width: 355,
        marginTop: 5,
        // backgroundColor: 'red',

    },
    head: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'green'
    },
    texta: {
        fontSize: 17,
        fontWeight: 600,
        color: '#000000',
        textAlign: 'left'
    },
    textb: {
        fontSize: 12,
        fontWeight: 400,
        color: '#646464',
        textAlign: 'right'
    },
    Burgers: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tamil: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 26
    },
    A: {
        width: 160,
        height: 140,
        backgroundColor: '#FFEEDA',
        alignItems: 'center',
        padding: 15,
        marginBottom: 10,
        marginTop: 10,
        // marginLeft:13,
        // marginRight:13,
    },
    input: {
        fontSize: 17,
        fontWeight: 600,
        color: '#000000',
        textAlign: 'center'
    },
    input1: {
        fontSize: 17,
        fontWeight: 600,
        color: '#EC2578',
        textAlign: 'center'
    },
    container3: {
        //   marginTop:-65
    },
    appbar: {
        width: 335,
        height: 60,
        backgroundColor: '#EC2578',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
