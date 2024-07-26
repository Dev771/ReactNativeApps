import React, { useState, useEffect } from 'react'
import { Button, Text, TextInput, View, TouchableHighlight, Modal, Image } from 'react-native'
import CameraComp from '../../Components/CameraComp/CameraComp'

import Style from './Style';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { InsertContact, UpdateContact, deleteContact, findContactById, findContactByName } from '../../db/contact';
import { ERROR_RESPONSE, USER_ALREADY_EXISTS, ADD_ALL_Details } from '../../constants/DataBaseResponses.json';

const AddContact = ({ navigation, route }) => {

    const [type, setType] = useState(route.params.type);

    const [data, setData] = useState(type === "Add" ? { name: "", mobileNumber: "", landLine: "", photoURI: "", fav: 0 } : route.params.item);
    const [modal, setModel] = useState(false);
    const [cameraOpen, setCameraOpen] = useState(false);

    useEffect(() => {
        if(type === 'Update') {
            findContactById(route.params.item.id)
                .then((resultSet) => setData(resultSet.rows._array[0]))
                .catch((error) => alert(ERROR_RESPONSE));
        }
    }, []);


    const handleClick = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.canceled && result.assets[0].type === 'image') {
            setData({ ...data, photoURI: result.assets[0].uri });
        } 

        setModel(!modal);
    }

    const handleCameraClick = (Imagedata) => {
        setData({ ...data, photoURI: Imagedata.uri });
        setCameraOpen(!cameraOpen);
    }

    const handleCloseCamera = () => {
        setCameraOpen(!cameraOpen);
    }

    const changeFav = () => {
        setData({ ...data, fav: !data.fav ? 1 : 0 })
    }

    const handleSubmit = () => {
        if(data.name === "" || data.mobileNumber === "" || data.landLine === "") {
            alert(ADD_ALL_Details);
            return;
        }
        if(data.mobileNumber.length < 10) {
            alert("Enter Correct Mobile Number!!");
            return;
        } else if(data.landLine.length < 10) {
            alert("Enter Correct Landline Number!!!");
            return;
        }
        if(type === "Add") { 
            findContactByName(data.name)
                .then((resultSet) => {
                    if(resultSet.rows._array.length <= 0) {
                        InsertContact([data.name, data.mobileNumber, data.landLine, data.photoURI, data.fav ? 1 : 0, data.id])
                            .then((data) => {
                                alert(data);
                                navigation.navigate("HomeScreen");
                            })
                            .catch((error) => alert(ERROR_RESPONSE))
                    } else {
                        alert(USER_ALREADY_EXISTS);
                        return;
                    }
                })
                .catch((error) => console.log(error));

        } else {
            findContactByName(data.name)
                .then((resultSet) => {
                    if(resultSet.rows._array.length <= 0) {
                        UpdateContact([data.name, data.mobileNumber, data.landLine, data.photoURI, data.fav ? 1 : 0, data.id])
                            .then((data) => {
                                alert(data)
                                navigation.navigate("HomeScreen");
                            })
                            .catch((error) => alert(ERROR_RESPONSE))
                    } else if(resultSet.rows._array.length <= 1 && resultSet.rows._array[0].id == data.id) {
                        UpdateContact([data.name, data.mobileNumber, data.landLine, data.photoURI, data.fav ? 1 : 0, data.id])
                            .then((data) => {
                                alert(data)
                                navigation.navigate("HomeScreen");
                            })
                            .catch((error) => alert(ERROR_RESPONSE))
                    } else {
                        alert(USER_ALREADY_EXISTS);
                        return;
                    }
                })
        }
    }

    const handleDelete = () => {
        deleteContact(data.id)
            .then((data) => {
                alert(data)
                navigation.replace("HomeScreen")
            })
            .catch((error) => alert(ERROR_RESPONSE))
    }

    return cameraOpen ? (<CameraComp handleCameraClick={handleCameraClick} handleCloseCamera={handleCloseCamera} />) : (
        <View style={Style.main}>
            <View style={[Style.icon]}>
                <TouchableHighlight onPress={changeFav}  >
                    <AntDesign name={data.fav ? 'star' : 'staro'} size={30} color={data.fav ? '#FFAE42' : 'black' } />
                </TouchableHighlight>
                {
                    type !== "Add" ? (
                        <TouchableHighlight onPress={handleDelete}>
                            <AntDesign name='delete' size={35} color='red' />
                        </TouchableHighlight>
                    ) : (null)
                }
            </View>
            <TouchableHighlight style={Style.PictureButton} onPress={() => setModel(!modal)} >
                {
                    <Image width={100} height={100} source={{ uri: data.photoURI != "" ? data.photoURI : "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" }} alt='haha' />
                }
            </TouchableHighlight>
            <View style={Style.textBoxGroup} >
                <View style={Style.textFieldBox} >
                    <Text style={Style.text} >Name</Text>
                    <TextInput style={Style.textBox} placeholder='Name' value={ data.name } onChangeText={(text) => setData({ ...data, name: text })}  />
                </View>
                <View style={Style.textFieldBox} >
                    <Text style={Style.text} >Mobile Number</Text>
                    <TextInput style={Style.textBox} keyboardType='numeric' placeholder='Mobile Number' value={ data.mobileNumber } onChangeText={(text) => setData({ ...data, mobileNumber: text.replace(/[^0-9]/g, '') })}  />
                </View>
                <View style={Style.textFieldBox} >
                    <Text style={Style.text} >LandLine Number</Text>
                    <TextInput style={Style.textBox} keyboardType='numeric' placeholder='LandLine Number' value={ data.landLine } onChangeText={(text) => setData({ ...data, landLine: text.replace(/[^0-9]/g, '') })}  />
                </View>
                <Button title={type === "Add" ? 'Save' : "Update" } onPress={handleSubmit} />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
            >
                <View style={Style.modalBottom}>
                    <Text style={Style.modalHeader}>Select Avatar</Text>
                    <TouchableHighlight style={Style.modalButtonClose} onPress={() => setModel(!modal)}>
                        <Ionicons name='close' size={30} color={'white'} />
                    </TouchableHighlight>
                    <View style={Style.DisplayDataModel} >
                        <TouchableHighlight style={Style.modalButtons} onPress={() => { setCameraOpen(!cameraOpen); setModel(!modal) }} >
                            <Text style={{ color: 'white', fontWeight: '800' }} >Camera</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={Style.modalButtons} onPress={handleClick} >
                            <Text style={{ color: 'white', fontWeight: '800' }} >Gallery</Text>
                        </TouchableHighlight>
                        {
                            data.photoURI !== "" ? (
                                <TouchableHighlight style={Style.modalButtons} onPress={() => setData({ ...data, photoURI: "" })} >
                                    <Text style={{ color: 'white', fontWeight: '800' }} >Remove</Text>
                                </TouchableHighlight>
                            ) : null
                        }
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default AddContact