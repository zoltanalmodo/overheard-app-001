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
 
import { navigate } from '../../navigationRef';

const deviceDisplayWidth = Dimensions.get('window').width;

// ===== COMPONENT =====

const DealsScreen = ({navigation}) => {


    const { 
        
        state,
        hidePopUpDealsMenu,
        hidePopUpDealCard,
        hidePopUpProfile,
        displayPopUpProfileConfirmResetPassword,
        displayPopUpProfileCancelSubscription,
        LogOut,
    
    } = useContext(AuthContext);


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
                        <Text style={styles.profilePanelTextBox} >
                            { state.userObject.first }
                        </Text>
                    </View>

                    <Text style={styles.profileValues}>Surname:</Text>
                    <View style={styles.profilePanelTextBoxPosition}>
                        <Text style={styles.profilePanelTextBox} >
                            { state.userObject.last }
                        </Text>
                    </View>

                    <Text style={styles.profileValues}>E-mail address:</Text>
                    <View style={styles.profilePanelTextBoxPosition}>
                        <Text style={styles.profilePanelTextBox} >
                            { state.userObject.email }
                        </Text>
                    </View>

                    <Text style={styles.profileValues}>Renewal Date:</Text>
                    <View style={styles.profilePanelTextBoxPosition}>
                        <Text style={styles.profilePanelTextBox} >
                            { state.userObject.expiryDate }
                        </Text>
                    </View>

                    <Text style={styles.profileValues}>University:</Text>
                    <View style={styles.profilePanelTextBoxPosition}>
                        <Text style={styles.profilePanelTextBox} >
                            { state.userObject.university }
                        </Text>
                    </View>



                    <TouchableOpacity style={styles.touchableOpacity}
                        onPress={ () => displayPopUpProfileConfirmResetPassword() }
                        
                    >                    
                        <View style={styles.profileButtonPosition}>
                            <Text style={styles.profileButton}>Reset Password</Text>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.touchableOpacity}
                        onPress={ () => displayPopUpProfileCancelSubscription() }
                    >                    
                        <View style={styles.profileButtonPosition}>
                            <Text style={styles.profileButton}>Cancel Subscription</Text>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.touchableOpacity}
                        onPress={ () => LogOut() }
                    >                    
                        <View style={styles.profileButtonPosition}>
                            <Text style={styles.profileLogOutButton}>Log Out</Text>
                        </View>
                    </TouchableOpacity>

                </View>


            </View>

        </OverlayProfile>

    : state.overlayType === "ProfileResetPassword" ?
    
        <OverlayProfile

            containerStyle={styles.containerStyleProfile}
            visible={ state.overlayStatus }
            onClose={ () => hidePopUpProfile() }
            closeOnTouchOutside
            childrenWrapperStyle={styles.childrenWrapperStyleProfile}
            animationType={'fadeInDown'}
            animationOutType={'fadeOutUpBig'}
                
        >

            <View style={styles.infoBoxProfileConfirmPassword} >
                <Text style={styles.profileConfirmPasswordValues}>
                    A Link To Reset
                </Text>
                <Text style={styles.profileConfirmPasswordValues}>
                    Your Password
                </Text>
                <Text style={styles.profileConfirmPasswordValues}>
                    Has Been
                </Text>
                <Text style={styles.profileConfirmPasswordValues}>
                    SENT To:
                </Text>

                <Text style={styles.profileConfirmPasswordValues}>
                    { state.userObject.email }
                </Text>

                <TouchableOpacity style={styles.touchableOpacity}
                    onPress={ () => hidePopUpProfile() }
                >
                    <View style={styles.okButtonPosition}>
                        <Text style={styles.okButton}>* OK *</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </OverlayProfile>

    : state.overlayType === "ProfileCancelSubscription" ?
        
    <OverlayProfile

        containerStyle={styles.containerStyleProfile}
        visible={ state.overlayStatus }
        onClose={ () => hidePopUpProfile() }
        closeOnTouchOutside
        childrenWrapperStyle={styles.childrenWrapperStyleProfile}
        animationType={'fadeInDown'}
        animationOutType={'fadeOutUpBig'}
            
    >
        <View style={styles.infoBoxProfileCancelSubscription} >
            <Text style={styles.profileCancelSubscriptionValues}>
                To Cancel Your Subscription From The Next Renewal Date Please Email Us At:
            </Text>
            <Text style={styles.profileCancelSubscriptionValuesBlack}>
                memberships
            </Text>
            <Text style={styles.profileCancelSubscriptionValuesBlack}>
                @overheard.co.uk
            </Text>
            <Text style={styles.profileCancelSubscriptionValues}>
                With The Email You Used To Sign Up.
            </Text>

            <TouchableOpacity style={styles.touchableOpacity}
                onPress={ () => hidePopUpProfile() }
            >
                <View style={styles.okButtonPosition}>
                    <Text style={styles.okButton}>* OK *</Text>
                </View>
            </TouchableOpacity>
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




// CLEAR HEADER =======================================================

DealsScreen.navigationOptions = () => {
    return {
        header: null
    };
};


// STYLES =============================================================

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
        textAlign: 'center',
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

    },


    containerStyleDealsMenu: {
        backgroundColor: 'hsla(120, 0%, 99%, 0.0)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'center',
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
        textAlign: 'center',
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


    infoBoxProfileConfirmPassword: {
        marginTop: 120,
    },

    profileConfirmPasswordValues: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '400',
        color: 'blue',
        textAlign: 'center',
    },

    infoBoxProfileCancelSubscription: {
        marginTop: 80,
    },

    profileCancelSubscriptionValues: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '400',
        color: 'red',
    },

    profileCancelSubscriptionValuesBlack: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '400',
        color: 'black',
    },    

    okButtonPosition: {
        paddingTop: 0,
        marginTop: 120,
        marginLeft: 10,
        textAlign: 'center',
        height: 30,
        width: 228,
        backgroundColor: 'black',

        shadowColor: '#ababab',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0,
    },

    okButton: {
        marginLeft: 10,
        paddingTop: 3,
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
    },



    // profile content style =========================== end

});

export default DealsScreen;