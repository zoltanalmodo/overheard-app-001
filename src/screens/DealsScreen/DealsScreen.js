import React, { useContext } from 'react';
import { StyleSheet, ImageBackground, Dimensions, View, Text } from 'react-native';

import backimage from '../../img/newbg.png'
import Header from '../../components/Header/Header.js'
import ReactNativeSnapCarousel from '../../components/ReactNativeSnapCarousel/ReactNativeSnapCarousel.js'

import { Context as AuthContext } from '../../context/AuthContext';


import OverlayDealCard from 'react-native-modal-overlay';
import OverlayDealsMenu from 'react-native-modal-overlay';
import OverlayProfile from 'react-native-modal-overlay';


import DealCardPopUp from '../../components/DealCardPopUp/DealCardPopUp';
import DealCardPopUpQR from '../../components/DealCardPopUpQR/DealCardPopUpQR';
 
const deviceDisplayWidth = Dimensions.get('window').width;



// ===== COMPONENT =====

    const DealsScreen = ({navigation}) => {


        const { state, hidePopUpDealsMenu, hidePopUpDealCard, hidePopUpProfile  } = useContext(AuthContext);


        const renderOverlayType = () => state.overlayType === "DealsMenu" ?
        
            <OverlayDealsMenu

                containerStyle={styles.containerStyleDealsMenu}
                visible={ state.overlayStatus }
                onClose={ () => hidePopUpDealsMenu() }
                closeOnTouchOutside
                childrenWrapperStyle={styles.childrenWrapperStyleDealsMenu}
                animationType={'fadeInDown'}
                animationOutType={'fadeOutUpBig'}

            >

                <View style={styles.cardContentCenter}>

                    <Text style={styles.cardPopUpContentText}>========================</Text>
                    <Text style={styles.cardPopUpContentText}>====== Deals Menu ======</Text>
                    <Text style={styles.cardPopUpContentText}>========================</Text>

                </View>

            </OverlayDealsMenu>

        :   state.overlayType === "DealCard" ?

            <OverlayDealCard

                containerStyle={styles.containerStyleDealCard}
                visible={ state.overlayStatus }
                onClose={ () => hidePopUpDealCard() }
                closeOnTouchOutside
                childrenWrapperStyle={styles.childrenWrapperStyleDealCard}
                animationType={'zoomIn'}
                animationOutType={'zoomOut'}

            >

                <View>
                    
                    <DealCardPopUp />
                    
                </View>

            </OverlayDealCard>

        

        :   state.overlayType === "DealCardQR" ?

        <OverlayDealCard

        containerStyle={styles.containerStyleDealCard}
        visible={ state.overlayStatus }
        onClose={ () => hidePopUpDealCard() }
        closeOnTouchOutside
        childrenWrapperStyle={styles.childrenWrapperStyleDealCard}
        animationType={'zoomIn'}
        animationOutType={'zoomOut'}

        >

            <View>
                
                <DealCardPopUpQR />
                
            </View>

        </OverlayDealCard>



        : state.overlayType === "Profile" ?

                <OverlayProfile

                    containerStyle={styles.containerStyleProfile}
                    visible={ state.overlayStatus }
                    onClose={ () => hidePopUpProfile() }
                    closeOnTouchOutside
                    childrenWrapperStyle={styles.childrenWrapperStyleProfile}
                    animationType={'fadeInDown'}
                    animationOutType={'fadeOutUpBig'}
                        
                >

                    <View style={styles.cardContentCenter}>

                        <Text style={styles.cardPopUpContentText}>========================</Text>
                        <Text style={styles.cardPopUpContentText}>======== Profile =======</Text>
                        <Text style={styles.cardPopUpContentText}>========================</Text>

                    </View>

                </OverlayProfile>

        : <View></View>

     

        return (

            <ImageBackground source={backimage} style={styles.container} >


                <Header />

                <ReactNativeSnapCarousel />

                {renderOverlayType()}        

                
            </ImageBackground>

        )
    };



DealsScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 33,
        backgroundColor: 'white',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },


    
    containerStyleDealCard: {
        backgroundColor: 'hsla(120, 0%, 99%, 0.40)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignText: 'center',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },
    childrenWrapperStyleDealCard: {

        flexDirection: 'column',
        justifyContent: 'center',

        marginLeft: (deviceDisplayWidth / 2),
        left: -130,
        marginRight: (deviceDisplayWidth / 2),
        right: -130,
        width: 260,
        height: 569,
        backgroundColor: 'hsla(300, 71%, 50%, 1)',
        backgroundColor: 'hsla(300, 71%, 100%, 1)',
        borderWidth: 1,
        borderColor: 'gray',
        position: 'absolute',

        // backgroundColor: 'magenta'
    },





    containerStyleDealsMenu: {
        backgroundColor: 'hsla(120, 0%, 99%, 0.0)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignText: 'center',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },
    childrenWrapperStyleDealsMenu: {
        marginTop: 0,
        top: 123,
        width: 260,
        height: 480,
        backgroundColor: 'hsla(129, 70%, 84%, 0.96)',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        position: 'absolute',
    },





    containerStyleProfile: {
        backgroundColor: 'hsla(300, 0%, 99%, 0.0)',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignText: 'center',
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    },
    childrenWrapperStyleProfile: {
        marginTop: 0,
        top: 123,
        width: 260,
        height: 480,
        backgroundColor: 'hsla(50, 97%, 86%, 0.96)',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        position: 'absolute',
    },

});

export default DealsScreen;