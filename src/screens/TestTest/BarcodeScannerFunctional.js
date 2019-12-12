import React, { useState, useContext, useEffect}  from 'react';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';



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
            break;
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

        <View style={styles.scannerContainer}>

            <BarCodeScanner
                onBarCodeScanned={scanned ? showScanResult() : handleBarCodeScanned}
                style={styles.scannerWrapper}
            />

            {scanned && (

                <Button
                    title={'Tap to Scan Again'}

// state >>> scanned: false (state = setScannedFalse)
// change scanned state >>> false
                    onPress={ () => setScannedFalse() } />
// change scanned state <<< false
            
            )}

        </View>

    );


};




BarcodeScannerFunctional.navigationOptions = () => {
    return {
        header: null,
    };
};

const deviceDisplayWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    scannerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 33,
        backgroundColor: 'yellow', 
    },
    scannerWrapper: {
        width: deviceDisplayWidth,
        height: deviceDisplayWidth,
    },

    showResultPosition: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    showResultTextBOX: {
        height: 100,
        width: 200,
        backgroundColor: 'yellow',
    },
    showResultText: {
        textAlign: 'center',
        color: 'red',
        fontSize: 22,
        fontWeight: '800',
    }

});



export default BarcodeScannerFunctional;