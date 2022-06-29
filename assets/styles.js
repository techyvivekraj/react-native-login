import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        flex: 1,
        justifyContent: "center",
    },
    headerTxt: {
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.1,
        color: '#000',
        fontSize: 60,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    bottomCard: {
        backgroundColor: '#fff',
        opacity: 0.95,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    loginText: {
        fontSize: 24,
        marginTop: 12,
        marginBottom: 4,
        color: '#000',
        fontWeight: 'bold'
    },
    inputView: {
        height: 40,
        borderRadius: 10,
        backgroundColor: '#f1f3f6',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputIcon: {
        paddingHorizontal: 8,
        marginHorizontal: 8,
        tintColor: '#5352ed',
        width: 20,
        height: 25
    }, input: {
        height: 40,
        flex: 1,
        fontFamily: 'SourceSansProRegular',
        fontSize: 16,
        color: '#333',
    },
    forgotTxt: {
        marginTop: 20,
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#5352ed'
    },
    loginBtn: {
        backgroundColor: '#5352ed',
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    loginBtnText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }, accountText: {
        alignSelf: 'center',
        marginTop: 12,
        fontSize: 16,
        fontWeight: 'bold'
    },
    registerTxt: {
        color: '#5352ed',
        fontWeight: 'bold'
    }
})