import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import Filter from '../../Image/Filter.png'
import ice from '../../Image/ice.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import burger from '../../Image/burger.png'
import b1 from '../../Image/b1.png'
import biscuts from '../../Image/biscuts.png'
import b2 from '../../Image/b2.png'
const Yourorder = ({navigation}) => {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

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
                <View style={styles.container2}>
                    <View style={styles.food}>
                        <View>
                            <Image source={burger} style={{ margin: 3 }} />
                        </View>
                        <View style={styles.head}>
                            <Text style={styles.label}>Processing</Text>
                            <TextInput style={styles.input} placeholder='2$' placeholderTextColor={'#000000'} />
                        </View>
                        <View>
                            <Text style={styles.text1}>Order ID : 1452547</Text>
                        </View>
                    </View>
                    <View style={styles.food}>
                        <View>
                            <Image source={biscuts} style={{ margin: 3 }} />
                        </View>
                        <View style={styles.head}>
                            <Text style={styles.label}>Processing</Text>
                            <TextInput style={styles.input} placeholder='3$' placeholderTextColor={'#000000'} />
                        </View>
                        <View>
                            <Text style={styles.text1}>Order ID : 1452548</Text>
                        </View>
                    </View>
                    <View style={styles.food}>
                        <View>
                            <Image source={b1} style={{margin: 2,}} />
                        </View>
                        <View style={styles.head}>
                            <Text style={styles.label}> Cancelled</Text>
                            <TextInput style={styles.input} placeholder='2$' placeholderTextColor={'#000000'} />
                        </View>
                        <View>
                            <Text style={styles.text1}>  Order ID : 1452549</Text>
                        </View>
                    </View>
                    <View style={styles.food}>
                        <View>
                            <Image source={b2} style={{ margin: 2 }} />
                        </View>
                        <View style={styles.head}>
                            <Text style={styles.label}>Deliverred</Text>
                            <TextInput style={styles.input} placeholder='4$' placeholderTextColor={'#000000'} />
                        </View>
                        <View>
                            <Text style={styles.text1}>Order ID : 1452540</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.container4}>
                    <View >
                        <Button onPress={() => navigation.navigate('FindLocation')}
                            title="Check out"
                            buttonStyle={{ backgroundColor: '#EC2578', width: 315, height: 50, borderRadius: 4 }}
                            titleStyle={{ fontSize: 17, fontWeight: 600 }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 45 }}></View>
            </View>
        </ScrollView>


    )
}
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
        marginTop: 15
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
    container2:{
marginTop:30,
// backgroundColor:'pink'
    },
    food: {
        width: 355,
        height: 85,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        marginBottom: 5,
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        shadowColor: '#FFFFF',
        borderWidth:0.2
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 125,
        marginRight: 18,
        marginTop: -60
    },
    label: {
        fontSize: 14,
        fontWeight: 600,
        textAlign: 'center',
        marginLeft: 12,

    },
    text1: {
        fontSize: 12,
        fontWeight: 400,
        textAlign: 'center',
        marginLeft: 18,
        marginTop: 5
    },
    input: {
        fontSize: 14,
    },
    container4: {
        alignItems: 'center',
        marginTop: 60
    },
});
export default Yourorder