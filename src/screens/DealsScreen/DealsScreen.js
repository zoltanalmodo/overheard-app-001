import React, { useContext } from 'react';
import { StyleSheet, ImageBackground, Dimensions, View, Text, TouchableOpacity } from 'react-native';

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

                        <View style={styles.infoBox}>

                            <Text style={styles.profileInitials}>Contact Details:</Text>

                            <Text style={styles.profileValues}>First Name:</Text>
                            <View style={styles.profilePanelTextBoxPosition}>
                                <Text style={styles.profilePanelTextBox} >{ state.userObject.first }</Text>
                            </View>

                            <Text style={styles.profileValues}>Surname:</Text>
                            <View style={styles.profilePanelTextBoxPosition}>
                                <Text style={styles.profilePanelTextBox} >{ state.userObject.last }</Text>
                            </View>

                            <Text style={styles.profileValues}>E-mail address:</Text>
                            <View style={styles.profilePanelTextBoxPosition}>
                                <Text style={styles.profilePanelTextBox} >{ state.userObject.email }</Text>
                            </View>

                            <Text style={styles.profileValues}>Renewal Date:</Text>
                            <View style={styles.profilePanelTextBoxPosition}>
                                <Text style={styles.profilePanelTextBox} >{ state.userObject.expiryDate }</Text>
                            </View>

                            <Text style={styles.profileValues}>University:</Text>
                            <View style={styles.profilePanelTextBoxPosition}>
                                <Text style={styles.profilePanelTextBox} >{ state.userObject.university }</Text>
                            </View>



                            <TouchableOpacity style={styles.touchableOpacity}
                                onPress={ () => navigate('ConfirmProfileResetPasswordScreen')}
                                
                            >                    
                                <View style={styles.profileButtonPosition}>
                                    <Text style={styles.profileButton}>Reset Password</Text>

                                </View>
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.touchableOpacity}
                                onPress={ () => navigate('ProfileWarningScreen')}
                            >                    
                                <View style={styles.profileButtonPosition}>
                                    <Text style={styles.profileButton}>Cancel Subscription</Text>

                                </View>
                            </TouchableOpacity>



                            <TouchableOpacity style={styles.touchableOpacity}
                                onPress={ () => navigate('LoginScreen')}
                            >                    
                                <View style={styles.profileButtonPosition}>
                                    <Text style={styles.profileLogOutButton}>Log Out</Text>

                                </View>
                            </TouchableOpacity>

                        </View>


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




    // profile content style =========================== start

    profileInitials: {
        marginTop: 5,
        // marginLeft: 10,
        fontSize: 16,
        fontWeight: '800',
    },
    profileValues: {
        marginTop: 4,
        // marginLeft: 10,
        fontSize: 14,
        fontWeight: '400',
    },

    profilePanelTextBoxPosition: {
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    profilePanelTextBox: {
        textAlign: 'center',
        paddingTop: 4,
        fontSize: 14,
        color:  '#ababab',
        height: 30,
        width: 228,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#ECECEC',
        
    },
    profilePanelText: {
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        color: '#ababab',
    },



    profileButtonPosition: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 0,
        marginTop: 15,
        // marginLeft: 6,
        textAlign: 'center',
        height: 30,
        width: 228,
        backgroundColor: 'black',

        shadowColor: '#ababab',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,
    },

    profileButton: {
        
        paddingTop: 3,
        color: 'white',

        fontSize: 18,
        fontWeight: '800',
    },

    profileLogOutButton: {
        marginLeft: 10,
        paddingTop: 3,
        color: 'white',
        fontSize: 18,
        fontWeight: '800',

    },

    // profile content style =========================== end

});

export default DealsScreen;