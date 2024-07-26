import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Style from './Style';
import { AntDesign } from '@expo/vector-icons';

import defaultImage from '../../../assets/UserIcon.png';

import db from '../../db/db';

const ContactListEntry = ({ navigation, item }) => {

    const [fav, setFav] = useState(item.fav);

    const handleClick = () => {
        db.transaction(tx => {
            tx.executeSql("Update contact SET fav = ? where id = ?", [!fav ? 1 : 0, item.id])
        })
        setFav(!fav);
    }

    useEffect(() => {
        setFav(item.fav);
    }, [item.fav]);

    return (
        <TouchableHighlight onPress={() => navigation.navigate("AddContact", { type: 'Update', item })}>
            <View style={Style.contactView}>
                <Image style={Style.image} alt={`${item.name} Profile Image`} source={{ uri: item.photoURI ? item.photoURI : 'https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg' }} />
                <View style={Style.TextViewGrid}>
                    <Text style={Style.UserName} >{item.name}</Text>
                    <TouchableWithoutFeedback onPress={handleClick} >
                        <AntDesign name={ fav ? 'star' : 'staro'} size={30} color={fav ? '#FFAE42' : 'black'} />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </TouchableHighlight>   
    )
}

export default ContactListEntry