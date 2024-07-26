import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
 
import style from './DropDownStyle';

const Dropdown = ({ value, clickEvent, type, list }) => {

    const [active, setActive] = useState(false);

    return (
        <View style={style.mainS}>
            <TouchableOpacity style={style.dropDownBox} onPress={() => setActive(!active)} >
                <Text style={[style.dropDownBoxText, style.notHave]} >{value || "Select " + type}</Text>
                <AntDesign name='caretdown' />
            </TouchableOpacity>
            {
                active ? list.length > 0 ? 
                    (<FlatList 
                        style={style.list}
                        data={list}
                        renderItem={({item}) => <Text style={style.listText} onPress={() => { setActive(false); clickEvent(item, type)}}>{item}</Text>}
                    />) : (<Text style={style.list} >No data</Text>) : (<></>)
            }
        </View>
    )
}

export default Dropdown