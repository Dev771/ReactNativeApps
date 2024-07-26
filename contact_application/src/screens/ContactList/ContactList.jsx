import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native';

import Style from './Style'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Foundation } from '@expo/vector-icons'
import ContactDisplay from '../../Components/ContactDisplay/ContactDisplay'

import SearchBox from '../../Components/SearchBox/SearchBox';
import { getAllContacts } from '../../db/contact';

import { ERROR_RESPONSE } from '../../constants/DataBaseResponses.json';

const ContactList = ({ navigation }) => {

    const isFocused = useIsFocused();

    const [contactList, setContactList] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setSearch("");
        setLoading(true);
        getAllContacts(search, 'ContactList')
            .then((data) => {
                setLoading(false);
                setContactList(data)
            })
            .catch((error) => {
                alert(ERROR_RESPONSE)
            })
    }, [isFocused]);

    useEffect(() => {
        getAllContacts(search, 'ContactList')
            .then((data) => {
                setContactList(data)
            })
            .catch((error) => {
                alert(ERROR_RESPONSE)
            })
    }, [search])

    return loading ? (
        <View style={Style.loader}>
            <ActivityIndicator size={'large'} />
        </View>
    ) : (
        <View style={Style.main}>
            <SearchBox search={search} setSearch={setSearch} />
            <ContactDisplay navigation={navigation} data={contactList} />
            <View style={[Style.buttonPosition]}>
                <TouchableHighlight style={[Style.AddContactButton, Style.shadow]} onPress={() => navigation.navigate("AddContact", { type: "Add" })} >
                    <Foundation name='plus' size={24} color='aqua' />
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default ContactList