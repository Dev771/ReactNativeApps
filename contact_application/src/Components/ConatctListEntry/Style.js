import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    contactView: {
        padding: 20,
        paddingHorizontal: 40,
        borderWidth: 1,
        borderTopWidth: 0,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        maxHeight: 100
    },
    image: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'black',
        width: 60,
        aspectRatio: 1/1,
    },
    TextViewGrid: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        width: '80%'
    },
    UserName: {
        fontSize: 35,
        fontWeight: '900'
    }
});

export default Style;