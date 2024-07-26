import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: 'blue',
        position: 'relative',
        borderBottomColor: 'red',
        borderBottomWidth: 2
    },
    buttonPosition: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    AddContactButton: {
        borderRadius: 50,
        width: 50,
        aspectRatio: 1/1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    shadow: {
        shadowColor: 'black',
        elevation: 10,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Style;