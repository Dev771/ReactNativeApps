import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    table: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {
        height: "80%"
    },
    hiddenContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    contactView: {
        padding: 20,
        paddingHorizontal: 40,
        borderWidth: 1,
        borderTopWidth: 0,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default Style;