import React, { useState, useContext, useEffect}  from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
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


        // state >>> scanned (state = modify) setScannedTrue
        // change scanned state >>> true
                setScannedTrue();
        // // change scanned state <<< true
            
                alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        
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
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
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


const styles = StyleSheet.create({

    scannerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    scannerWrapper: {
        ...StyleSheet.absoluteFillObject,
        marginTop: 33,
    },

});



export default BarcodeScannerFunctional;