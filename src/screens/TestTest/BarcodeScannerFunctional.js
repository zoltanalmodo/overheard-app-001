import React, { useState, useContext, useEffect}  from 'react';
import { Text, View, StyleSheet, Dimensions, Button, ImageBackground, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

import backimage from '../../img/newbg.png';

import BackButton from '../../components/BackButton/BackButton';

import OverheardDealsLogo from '../../components/OverheardDealsLogo/OverheardDealsLogo.js';

import { Context as AuthContext } from '../../context/AuthContext';



const BarcodeScannerFunctional = ({navigation}) => {


    const { 
        state,

        setCameraPermissionTrue,
        setCameraPermissionFalse,
        
        setScannedTrue,
        setScannedFalse,

        verifyQRCode,
    
    
    } = useContext(AuthContext);


//   state = {
//     hasCameraPermission: null,
//     scanned: false,
//   };


    componentDidMount = async () => {

        this.getPermissionsAsync();

    };

    getPermissionsAsync = async () => {

        const { status } = await Permissions.askAsync(Permissions.CAMERA);

// state >>> hasCameraPermission: null, (setCameraPermission)
// trigger camera permission state change >>> true OR false

        status === 'granted' ? setCameraPermissionTrue() : setCameraPermissionFalse();

        // this.setState({ hasCameraPermission: status === 'granted' });
// trigger camera permission state change <<< true OR false

    };

    handleBarCodeScanned = ({ type, data }) => {


        verifyQRCode({data, merchant: state.merchantObject.id});

            setScannedTrue();
            
               
    };


    showScanResult = () => {

        switch (state.qrResult) {

            case '': return;
            case 'Invalid QR Code - If the user was ever a genuine customer, please contact technical support.'
                : alert('Invalid QR Code - If the user was ever a genuine customer, please contact technical support.');
            break;
            case 'APPROVED - Enjoy your discount!'
                : alert('APPROVED - Enjoy your discount!');
            break;
            case 'DECLINED - Please ensure you are up-to-date with payments in order to continue redeeming discounts using our app.'
                : alert('DECLINED - Please ensure you are up-to-date with payments in order to continue redeeming discounts using our app.');
            break;

            default : return;
   
       }

    };



    const { hasCameraPermission, scanned } = state;



    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera. Please set permission in settings.</Text>;
    }
    return (

        <ImageBackground source={backimage} style={styles.backImageContainer}>

            <BackButton navigate='MerchantPlatformScreen' />

            <View style={styles.logoPosition}>
                <OverheardDealsLogo style={styles.logoSize}/>
            </View>

            <View style={styles.scannerContainer}>

                <BarCodeScanner
                    onBarCodeScanned={scanned ? showScanResult() : handleBarCodeScanned}
                    style={styles.scannerWrapper}
                />

                {scanned && (

                    <View style={styles.repLoginButtonPosition}>

                        <TouchableOpacity
                            onPress={ () => setScannedFalse() }
                            
                        >                    
                            <View style={styles.loginButtonPosition}>
                                <Text style={styles.repLoginButton}>Tap To Scan Again</Text>

                            </View>
                        </TouchableOpacity>

                    </View>

                )}

            </View>

        </ImageBackground>

    );


};



BarcodeScannerFunctional.navigationOptions = () => {
    return {
        header: null,
    };
};

const deviceDisplayWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    backImageContainer: {
        marginTop: 33,
        backgroundColor: 'white',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },

    logoPosition: {
        marginTop: 28,
    },
    

    scannerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 25,
        marginBottom: 125,
    },

    scannerWrapper: {
        width: (deviceDisplayWidth-20),
        height: (deviceDisplayWidth-20),
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },

    showResultPosition: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    showResultTextBOX: {
        height: 100,
        width: 200,
        backgroundColor: 'magenta',
    },

    showResultText: {
        textAlign: 'center',
        color: 'red',
        fontSize: 22,
        fontWeight: '800',
    },


    repLoginButtonPosition: {
        marginTop: -26,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    repLoginButton: {
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 24,
        fontWeight: 'bold',
        color:  'black',
        height: 50,
        width: 270,
        borderColor: '#FF8D4F',
        borderWidth: 2,
        backgroundColor: '#FF8D4F',

        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,

    },


});



export default BarcodeScannerFunctional;