import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import ice from '../../Image/ice.png'
import cake from '../../Image/cake.png'



const VoucherPromo = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ marginTop: 45 }}></View>
        <View style={{ marginLeft: 5 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Rate')} >
            <Ionicons name="chevron-back-sharp" size={25} color={'#000000'} />
          </TouchableOpacity>
        </View>
        <View >
          <View style={{ marginTop: 8, marginLeft: 15 }}>
            <Text style={styles.text}>Voucher Promo</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
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
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.container2}>
            <View style={{ marginTop: 25 }}>
              <Text style={styles.text2}>Special Deal For{'\n'}December</Text>
            </View>
            <View style={{ marginLeft: 18, marginTop: 20 }}>
              <Button
                title="Buy Now"
                buttonStyle={{ width: 99, height: 35, borderRadius: 4, backgroundColor: '#FFFFFF', }}
                titleStyle={{ fontSize: 14, fontWeight: 500, color: '#EC2578', textAlign: 'center' }}
              />
            </View>
            <View style={{ marginTop: -108, marginLeft: 190 }}>
              <Image source={cake} style={styles.cake} />
            </View>
          </View>
        </View>
        <View style={styles.container3}>
          <View >
            <Button onPress={() => navigation.navigate('Notification')}
              title="Check out"
              buttonStyle={{ backgroundColor: '#EC2578', width: 315, height: 50, borderRadius: 4 }}
              titleStyle={{ fontSize: 17, fontWeight: 600 }}
            />
          </View>
        </View>
        <View style={{ marginTop: 34 }}></View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFF',
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 700,
    textAlign: 'left',
  },
  container1: {
    width: 355,
    height: 150,
    // backgroundColor:'grey',
    backgroundColor: '#EC2578',
    borderRadius: 4,
    marginTop: 20
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
    height: 150,
    // backgroundColor:'grey',
    backgroundColor: '#E9F7BA',
    borderRadius: 4,
    marginTop: 20
  },
  text2: {
    fontSize: 17,
    fontWeight: 700,
    // color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 18
  },
  container3: {
    alignItems: 'center',
    marginTop: 190
  },

});
export default VoucherPromo