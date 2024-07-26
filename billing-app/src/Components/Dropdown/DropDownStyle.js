import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainS: {
        gap: 0,
        position: 'relative'
    },
    dropDownBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 10,
        margin: 10,
        marginBottom: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
        width: 'auto',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100
    },
    dropDownBoxText: {
        fontSize: 18,
        borderRightWidth: 2,
        borderColor: 'rgba(0, 0, 0, .2)',
        paddingRight: 6,
        flexGrow: 1
    },
    have: {
        fontWeight: 'bold'
    },
    notHave: {
        fontWeight: '400',
        color: 'rgba(0, 0, 0, .3)'
    },
    list: {
        textAlign: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0, 1)',
        paddingTop: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        transform: [{ translateY: -50 }],
        zIndex: 99,
    },
    listText: {
        color: 'white',
        fontWeight: '800',
        textAlign: 'center',
        padding: 10
    }
})

export default style;