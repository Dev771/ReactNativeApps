import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    hiddenView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: "100%",
    },
    hiddenItem: {
        height: '100%',
        aspectRatio: 1/1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editButton: {
        backgroundColor: '#FFAE42'
    },
    deleteButton: {
        backgroundColor: 'red'
    }
});

export default Style;