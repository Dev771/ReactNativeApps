import React, { useState } from 'react'
import { View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import Style from './TextInputFieldStyle';


const TextInputField = ({name, update, ...props}) => {

    const [pressed, setPressed] = useState(false);

    return (
        <View style={{ width: "100%" }} >
            <Text style={{ fontSize: 20, fontWeight: '700' }} >{name === 'name' ? "Name" : name === 'Pamount' ? "Planned Amount" : "Actual Amount"}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                { name === "name" ? (null) : (<Text style={{ fontWeight: '900', fontSize: 25 }} >{'\u0024'}</Text>) }
                <TextInput style={{ backgroundColor: 'none', width: "100%" }} keyboardType={props.keyboardType} onChangeText={(text) => { setPressed(true); props.onChangeText(text, name)}} placeholder={props.placeholder} value={props.value} />
            </View>
            { pressed && ((name == 'name' && props.value.length <= 0) || (name != 'name' && props.value == 0)) && !update ? (<Text style={Style.error} >Please Enter The Value</Text>) : (<></>) }
        </View>
    )
}

export default TextInputField