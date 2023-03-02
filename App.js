import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const Drawer = createDrawerNavigator();


const artImg = require('./assets/art.png');
const ArtScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={artImg}/>
      <Button info onPress={() => WebBrowser.openBrowserAsync("https://www.artic.edu/")}>More Information</Button>
    </View>
  );
}

const mileImg = require('./assets/mile.png');
const MileScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={mileImg}/>
      <Button info onPress={() => WebBrowser.openBrowserAsync("https://www.themagnificentmile.com/")}>More Information</Button>
    </View>
  );
}

const pierImg = require('./assets/pier.png');
const PierScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={pierImg}/>
      <Button info onPress={() => WebBrowser.openBrowserAsync("https://navypier.org/")}>More Information</Button>
    </View>
  );
}

const waterImg = require('./assets/water.png');
const WaterScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={waterImg}/>
      <Button info onPress={() => WebBrowser.openBrowserAsync("https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html")}>More Information</Button>
    </View>
  );
}

const willisImg = require('./assets/willis.png');
const WillisScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={willisImg}/>
      <Button info onPress={() => WebBrowser.openBrowserAsync("https://www.willistower.com/")}>More Information</Button>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Art Institue of Chicago" component={ArtScreen}/>
        <Drawer.Screen name="Magnificent Mile" component={MileScreen}/>
        <Drawer.Screen name="Navy Pier" component={PierScreen}/>
        <Drawer.Screen name="Water Tower" component={WaterScreen}/>
        <Drawer.Screen name="Willis Tower" component={WillisScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 480,
    marginBottom: 20,
  },
});
