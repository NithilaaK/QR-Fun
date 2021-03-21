import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

class ScannerScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal',
    };
  }
  getCameraPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions: status == 'granted',
      buttonState: 'clicked',
      scanned: false,
    });
  };
  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({
      scanned: true,
      scannedData: data,
      buttonState: 'normal',
    });
  };
  render() {
    const hasCameraPermissions = this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;
    if (buttonState == 'clicked' && hasCameraPermissions) {
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
          style={styles.entryT}>Hello there! This is a small but useful tool that you can take anywhere! Need to scan a QR code or barcode? Use this scanner to scan it! So, what are you waiting for? SCAN IT!</Text>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
        </SafeAreaProvider>
      );
    } else if (buttonState == 'normal') {
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
          style={styles.entryT}>Hello there! This is a small but useful tool that you can take anywhere! Need to scan a QR code or barcode? Use this scanner to scan it! So, what are you waiting for? SCAN IT!</Text>
          <Image 
          style={styles.img}
          source={require('../assets/w.png')}/>
          <Text style={styles.displayText}>
            {hasCameraPermissions == true
              ? this.state.scannedData
              : 'Please Request Camera Permissions'}
          </Text>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={this.getCameraPermissions}>
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaProvider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    backgroundColor: '#83fbd5',
    flex: 1,
    alignItem: 'center',
  },
  displayText: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'verdana',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  scanButton: {
    backgroundColor: '#475cc5',
    padding: 10,
    margin: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'verdana',
  },
  entryT:{
    borderTopWidth: 5,
    borderBottomWidth: 5,
    fontSize: 15,
    fontFamily: 'verdana',
    backgroundColor: '#fff',
    padding: 3,
  },
  img:{
    marginTop: 20,
    height: 75,
    width: 75,
    alignSelf: 'center',
    
  },
});

export default ScannerScreen;
