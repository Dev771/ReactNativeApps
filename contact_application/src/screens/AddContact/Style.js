import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    textBox: {
        padding: 20,
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        fontSize: 25,
        fontWeight: "500",
    },
    textBoxGroup: {
        gap: 20,
        flexDirection: 'column',
        margin: 30,
        paddingHorizontal: 30,
        width: "100%"
    },
    PictureButton: {
        width: 100,
        aspectRatio: 1/1,
        backgroundColor: 'transparent',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 6,
        borderColor: 'black',
        overflow: 'hidden'
    },
    main: {
        paddingVertical: 30,
        paddingHorizontal: 0,
        alignItems: 'center',
    },
    modalBottom: {
        height: "20%",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopWidth: 4,
        borderTopColor: 'black'
    },
    modalButtonClose: {
        backgroundColor: 'red',
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    DisplayDataModel: {
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    modalButtons: {
        padding: 20,
        backgroundColor: '#0275d8',
        width: 100,
        aspectRatio: 3/2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
    },
    icon: {
        position: 'absolute',
        alignItems: 'center',
        right: 20,
        top: 20,
        gap: 20
    },
    modalHeader: {
        position: 'absolute',
        top: 10,
        width: "100%",
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        color: 'red',
        textShadowColor: 'black',
        textShadowRadius: 1
    },
    textFieldBox: {
        gap: 4
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, .7)'
    }
});

export default Style;