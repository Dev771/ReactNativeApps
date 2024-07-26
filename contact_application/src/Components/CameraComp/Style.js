import { StyleSheet, Dimensions } from "react-native";

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },  
    camera: {
        flex: 1,
        position: 'relative',
    },
    PictureButton: {
        width: 100,
        aspectRatio: 1/1,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 20,
        left: "50%",
        transform: [{ translateX: -'50' }],
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 6,
        borderColor: 'white'
    },
    modalButtonClose: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    cameraSwitch: {
        position: 'absolute',
        bottom: 60,
        right: 60
    }
});

export default Style;