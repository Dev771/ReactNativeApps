import { borderColor } from '@mui/system';
import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    main: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        paddingHorizontal: 30,
        gap: 10
    },
    text: {
        color: "black"
    },
    inputField: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "100%",
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        fontSize: 20
    },
    submitButton: {
        backgroundColor: 'transparent',
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden',
    },

})

export default Style;