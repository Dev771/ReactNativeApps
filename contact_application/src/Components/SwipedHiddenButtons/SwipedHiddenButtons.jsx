import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { TouchableHighlight, View } from 'react-native'
import Style from './Style'
import { deleteContact } from '../../db/contact'

import constants from '../../constants/DataBaseResponses.json';

const SwipedHiddenButtons = ({ navigation, item }) => {

    const handleDelete = () => {
        deleteContact(item.id)
            .then((data) => {
                alert(data)
                navigation.replace("HomeScreen")
            })
            .catch((error) => alert(constants.ERROR_RESPONSE))
    }

    return (
        <View style={Style.hiddenView} >
            <TouchableHighlight style={[Style.hiddenItem, Style.editButton]} onPress={() => navigation.navigate("AddContact", { type: 'Update', item })}>
                <AntDesign name='edit' size={40} color={'white'} />
            </TouchableHighlight>
            <TouchableHighlight style={[Style.hiddenItem, Style.deleteButton]} onPress={handleDelete}>
                <AntDesign name='delete' size={40} color={'white'} />
            </TouchableHighlight>
        </View>
    )
}

export default SwipedHiddenButtons