import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import * as MediaLibrary from 'expo-media-library';
import Style from './Style';
import { AntDesign, FontAwesome6, Ionicons } from '@expo/vector-icons';

const CameraComp = ({ handleCameraClick, handleCloseCamera }) => {

    const [hasCameraPermissions, setHasCameraPermissions] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.front);
    const cameraRef = useRef();

    useEffect(() => {
        (async() => {
            MediaLibrary.requestPermissionsAsync();
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermissions(cameraPermission.status === 'granted');
        })();
    }, []);


    const handleClick = async () => {
        if(cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                setImage(data.uri);
                handleCameraClick(data);
            } catch(e) {
                console.log(e);
            }
        }
    }

    if(hasCameraPermissions === false) {
        return (
            <Text>Camera Access Not Provided For Camera</Text>
        )
    }

    return (
        <View style={Style.container}>
            <Camera ref={cameraRef} style={Style.camera} type={type}>
                <View style={{ flex: 1 }} >
                    <TouchableHighlight style={Style.PictureButton} onPress={handleClick} >
                        <AntDesign name='camera' size={40} color='white' />
                    </TouchableHighlight>
                    <TouchableOpacity style={Style.cameraSwitch} onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}>
                        <FontAwesome6 name="camera-rotate" size={25} color={'white'} />
                    </TouchableOpacity>
                    <TouchableHighlight style={Style.modalButtonClose} onPress={handleCloseCamera}>
                        <Ionicons name='close' size={30} color={'red'} />
                    </TouchableHighlight>
                </View>
            </Camera>
        </View>
    )
}

export default CameraComp