import React from 'react'
import { TextInput, View } from 'react-native'
import Style from './Style'

const SearchBox = ({ search, setSearch }) => {

    return (
        <View style={Style.SearchBox}>
            <TextInput placeholder='Search Contact' onChangeText={(text) => setSearch(text)} value={search} style={Style.TextInput} />
        </View>
    )
}

export default SearchBox