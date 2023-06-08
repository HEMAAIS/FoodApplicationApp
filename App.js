import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding1 from './src/Component/Onboarding1/Onboarding1';
import Onboarding2 from './src/Component/Onboarding2/Onboarding2';
import Onboarding3 from './src/Component/Onboarding3/Onboarding3';
import Login from './src/Component/Login/Login';
import Signup from './src/Component/Signup/Signup';
import SignupProcess from './src/Component/SignupProcess/SignupProcess';
import PaymentMethod from './src/Component/PaymentMethod/PaymentMethod';
import UploadPhoto from './src/Component/UploadPhoto/UploadPhoto';
import UploadPreview from './src/Component/UploadPreview/UploadPreview';
import SetLocation from './src/Component/SetLocation/SetLocation';
import Success from './src/Component/Success/Success';
import Home from './src/Component/Home/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Burger from './src/Component/Burger/Burger';
import Soup from './src/Component/Soup/Soup';
import XBurger from './src/Component/XBurger/XBurger';
import Chat from './src/Component/Chat/Chat';
import Chat1 from './src/Component/Chat1/Chat1';
import CallRinging from './src/Component/CallRinging/CallRinging';
import Call from './src/Component/Call/Call';
import VoucherPromo from './src/Component/VoucherPromo/VoucherPromo';
import Promo from './src/Component/Promo/Promo';

const Stack = createStackNavigator();
function App() {
  return (
    <View style={styles.container}>
      <Onboarding1 />
      {/* <Onboarding2 /> */}
      {/* <Onboarding3/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <SignupProcess/> */}
      {/* <PaymentMethod/> */}
      {/* <UploadPhoto/> */}
      {/* <UploadPreview/> */}
      {/* <SetLocation/> */}
      {/* <Success /> */}
      {/* <Home /> */}
      {/* <Burger /> */}
      {/* <XBurger/> */}
      {/* <Soup/> */}
      {/* <Chat/> */}
      {/* <Chat1/> */}
      {/* <CallRinging /> */}
      {/* <Call /> */}
      {/* <VoucherPromo/> */}
      {/* <Promo/> */}
    
      {/* <NavigationContainer>
      <Home />
     </NavigationContainer> */}

    </View>
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{
    //     headerShown: false,
    //   }}>
    //     <Stack.Screen name="Onboarding1" component={Onboarding1} />
    //     <Stack.Screen name="Onboarding2" component={Onboarding2} />
    //     <Stack.Screen name="Onboarding3" component={Onboarding3} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Signup" component={Signup} />
    //     <Stack.Screen name="SignupProcess" component={SignupProcess} />
    //     <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
    //     <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
    //     <Stack.Screen name="UploadPreview" component={UploadPreview} />
    //     <Stack.Screen name="SetLocation" component={SetLocation} />
    //     <Stack.Screen name="Success" component={Success} />
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Burger" component={Burger} />
    //     <Stack.Screen name="XBurger" component={XBurger} />
    //     <Stack.Screen name="Soup" component={Soup} />
    //     <Stack.Screen name="Chat" component={Chat} />
    //     <Stack.Screen name="Chat1" component={Chat1} />
    //     <Stack.Screen name="CallRinging" component={CallRinging} />
    //     <Stack.Screen name="Call" component={Call} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
