import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    table: {
        flexDirection: 'column',
        flex: 1,
    },
    tableRow: {
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 0,
    },
    header: {
        backgroundColor: '#777',
        borderLeftColor: "#555",
        borderWidth: 2,
        borderRightColor: "#777",
        borderTopColor: "#555",
        borderBottomColor: '#333',
        fontWeight: 'bold',
        marginVertical: 10,
    },
    headerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 13,
        borderLeftColor: 'rgba(255, 255, 255, .6)',
        borderLeftWidth: 1,
        borderRightColor: 'rgba(255, 255, 255, .6)',
        borderRightWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 5
    },
    gap: {
        borderWidth: 1
    },
    flexGrow: {
        flexGrow: 1,
        flexBasis: 1,
        padding: 10,
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    Sno: {
        maxWidth: "10%"
    },
    footer: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        height: "10%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footerText: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default style;