import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding1 from './src/Component/Onboarding1/Onboarding1';
import Onboarding2 from './src/Component/Onboarding2/Onboarding2';
import Onboarding3 from './src/Component/Onboarding3/Onboarding3';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Onboarding1/> */}
      {/* <Onboarding2/> */}
      <Onboarding3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
