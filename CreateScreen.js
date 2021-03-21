import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';
 
export default class CreateScreen extends React.Component {
  openGen = async() => {
    WebBrowser.openBrowserAsync('https://www.the-qrcode-generator.com/');
  }
  openQR = async() => {
    WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/QR_code');
  }
  openBar = async() => {
    WebBrowser.openBrowserAsync('https://en.wikipedia.org/wiki/Barcode');
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
           <Header
          backgroundColor={'#f3b4cf'}
          centerComponent={{
            text: 'QR Fun!',
            style: { color: '#fff', fontSize: 20, fontFamily: 'verdana' },
          }}
        />
          <Text
          style={styles.entryT}>Hello there! Want to learn more about the use of QR codes and barcodes? Check out these links at your pleasure!</Text>
        <TouchableOpacity
        style={styles.openButton}
        onPress={this.openGen}>
          Generate a QR Code!
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.openButton}
        onPress={this.openQR}>
          Learn About QR Codes...
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.openButton}
        onPress={this.openBar}>
          Learn About Barcodes...
        </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    borderWidth: 5,
    flex: 1,
    backgroundColor: '#83fbd5',
  },
  openButton:{
    height: 50,
    width: 250,
    backgroundColor: '#475cc5',
    fontFamily: 'verdana',
    color: '#fff',
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
    alignSelf: 'center',
  },
  entryT:{
    borderTopWidth: 5,
    borderBottomWidth: 5,
    fontSize: 15,
    fontFamily: 'verdana',
    backgroundColor: '#fff',
    padding: 3,
  },
})