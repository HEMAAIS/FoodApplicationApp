import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Searchbar, Card } from 'react-native-paper';
import Filter from '../../Image/Filter.png'
import ice from '../../Image/ice.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
// import burger from '../../Image/burger.png'
// import b1 from '../../Image/b1.png'
import home from '../../Image/home.png'
import basket from '../../Image/basket.png'
import user from '../../Image/user.png'
import chat from '../../Image/chat.png'
// import cup from '../../Image/cup.png'
// import biscuts from '../../Image/biscuts.png'
// import roll from '../../Image/roll.png'
// import Homemade from '../../Image/Homemade.png'
// import carrot from '../../Image/carrot.png'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const Popular = [
        {
            uri: require("../../Image/burger.png"),
            name: "Zinger Burger",
            rupees: "2$",
        },
        {
            uri: require("../../Image/roll.png"),
            name: "Roll Paratha",
            rupees: "3$",

        },
    ];
    const Desert = [
        {
            uri: require("../../Image/biscuts.png"),
            name: "Biscuts",
            rupees: "2$",

        },
        {
            uri: require("../../Image/cup.png"),
            name: "Cup Cake",
            rupees: "3$",

        },
    ];
    const Burger = [
        {
            uri: require("../../Image/b1.png"),
            name: "Cup Cake",
            rupees: "2$",

        },
        {
            uri: require("../../Image/burger.png"),
            name: "Cup Cake",
            rupees: "3$",

        },
    ];
    const Soup = [
        {
            uri: require("../../Image/Homemade.png"),
            name: "Tomatto Soup",
            rupees: "2$",

        },
        {
            uri: require("../../Image/carrot.png"),
            name: "Carrot Soup",
            rupees: "3$",

        },
    ];
    const [populars, setPopulars] = useState(Popular);
    const [deserts, setDeserts] = useState(Desert);
    const [burgers, setBurgers] = useState(Burger);
    const [soups, setSoups] = useState(Soup);

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
                    <View style={{ marginTop: 25 }}>
                        <Text style={styles.text1}>Special Deal For{'\n'}December</Text>
                    </View>
                    <View style={{ marginLeft: 18, marginTop: 20 }}>
                        <Button
                            title="Buy Now"
                            buttonStyle={{ width: 99, height: 35, borderRadius: 4, backgroundColor: '#FFFFFF', }}
                            titleStyle={{ fontSize: 14, fontWeight: 500, color: '#EC2578', textAlign: 'center' }}
                        />
                    </View>
                    <View style={{ marginTop: -118, marginLeft: 203 }}>
                        <Image source={ice} style={styles.ice} />
                    </View>
                </View>
                <View style={{ marginTop: 8 }}>
                    <View style={styles.head}>
                        <View style={{ marginLeft: 0 }}>
                            <Text style={styles.texta}>Popular Menu</Text>
                        </View>
                        <View style={{ marginLeft: 180 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Burger')}>
                                <Text style={styles.textb}>View More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: -5 }}>
                        <View style={styles.tamil}>
                            {populars.map((data) => {
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
                <View style={{ marginTop: -3 }}>
                    <View style={styles.head}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.texta}>Deserts</Text>
                        </View>
                        <View style={{ marginLeft: 220 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Burger')}>
                                <Text style={styles.textb}>View More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: -5 }}>
                        <View style={styles.tamil}>
                            {deserts.map((data) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={styles.A1}>
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
                <View style={{ marginTop: -4 }}>
                    <View style={styles.head}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.texta}>Burgers</Text>
                        </View>
                        <View style={{ marginLeft: 220 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('XBurger')}>
                                <Text style={styles.textb}>View More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: -3 }}>
                        <View style={styles.tamil}>
                            {burgers.map((data) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={styles.A1}>
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
                <View style={{ marginTop: -4 }}>
                    <View style={styles.head}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.texta}>Soups</Text>
                        </View>
                        <View style={{ marginLeft: 230 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Soup')}>
                                <Text style={styles.textb}>View More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: -8 }}>
                        <View style={styles.tamil}>
                            {soups.map((data) => {
                                return (
                                    <TouchableOpacity>
                                        <View style={styles.A1}>
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
                        <View style={{ marginLeft: 5 }}>
                            <Text style={styles.texta}>Popular Menu</Text>
                        </View>
                        <View style={{ marginLeft: 178 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Burger')}>
                                <Text style={styles.textb}>View More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Burgers}>
                        <View style={styles.A}>
                            <Image source={burger} />
                            <Text style={styles.input}>Zinger Burger</Text>
                            <Text style={styles.input1}>2$</Text>
                        </View>
                        <View style={styles.A}>
                            <Image source={roll} />
                            <Text style={styles.input}>Roll Paratha</Text>
                            <Text style={styles.input1}>3$</Text>
                        </View>
                    </View>
                    <View style={styles.head}>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={styles.texta}>Deserts</Text>
                        </View>
                        <View style={{ marginLeft: 220 }}>
                            <Text style={styles.textb}>View More</Text>
                        </View>
                    </View>
                    <View style={styles.Burgers}>
                        <View style={styles.A}>
                            <Image source={biscuts} />
                            <Text style={styles.input}>Biscuts</Text>
                            <Text style={styles.input1}>2$</Text>
                        </View>
                        <View style={styles.A}>
                            <Image source={cup} />
                            <Text style={styles.input}>Cup Cake</Text>
                            <Text style={styles.input1}>3$</Text>
                        </View>
                    </View>
                    <View style={styles.head}>
                        <View style={{ marginLeft: 6 }}>
                            <Text style={styles.texta}>Burger</Text>
                        </View>
                        <View style={{ marginLeft: 230 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('XBurger')}>
                                <Text style={styles.textb}>View More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Burgers}>
                        <View style={styles.A}>
                            <Image source={b1} />
                            <Text style={styles.input}>Burger</Text>
                            <Text style={styles.input1}>2$</Text>
                        </View>
                        <View style={styles.A}>
                            <Image source={burger} />
                            <Text style={styles.input}>Zinger Burger</Text>
                            <Text style={styles.input1}>2$</Text>
                        </View>
                    </View>
                    <View style={styles.head}>
                        <View style={{ marginLeft: 6 }}>
                            <Text style={styles.texta}>Soup</Text>
                        </View>
                        <View style={{ marginLeft: 233 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Soup')}>
                                <Text style={styles.textb}>View More</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Burgers}>
                        <View style={styles.A}>
                            <Image source={Homemade} />
                            <Text style={styles.input}>Tomatto Soup</Text>
                            <Text style={styles.input1}>2$</Text>
                        </View>
                        <View style={styles.A}>
                            <Image source={carrot} />
                            <Text style={styles.input}>Carrot soup</Text>
                            <Text style={styles.input1}>3$</Text>
                        </View>
                    </View>
                </View> */}
                {/* <View style={styles.container3}>
                    <View style={styles.appbar}>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('XBurger')}>
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
                <View style={{ marginTop: 5 }}></View>
            </View>
        </ScrollView>
    )
}
export default Home
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
        height: 150,
        // backgroundColor:'grey',
        backgroundColor: '#EC2578',
        borderRadius: 4,
        marginTop: 10
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
        // backgroundColor:'red',

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
    A: {
        width: 160,
        height: 140,
        backgroundColor: '#FFEEDA',
        alignItems: 'center',
        padding: 15,
        //   marginLeft:16,
        //   marginRight:16,
        marginBottom: 10,
        marginTop: 10
        // margin:18 
    },
    A1: {
        width: 160,
        height: 140,
        backgroundColor: '#FFEEDA',
        alignItems: 'center',
        padding: 15,
          marginLeft:11.5,
          marginRight:11.5,
        marginBottom: 10,
        marginTop: 10
        // margin:18 
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
        marginTop: 15
    },
    appbar: {
        width: 335,
        height: 60,
        backgroundColor: '#EC2578',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tamil: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
});