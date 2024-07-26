import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import Style from './Style';
import { useIsFocused } from '@react-navigation/native';
import ContactDisplay from '../../Components/ContactDisplay/ContactDisplay';
import SearchBox from '../../Components/SearchBox/SearchBox';
import { getAllContacts } from '../../db/contact';
import { ERROR_RESPONSE } from '../../constants/DataBaseResponses.json';

const FavList = ({ navigation }) => {

  const isFocused = useIsFocused();

  const [contactList, setContactList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearch("");
    setLoading(true);
    getAllContacts(search, 'fav')
      .then((data) => {
        setLoading(false);
        setContactList(data)
      })
      .catch((error) => {
        alert(ERROR_RESPONSE)
      })
  }, [isFocused]);

  useEffect(() => {
    getAllContacts(search, 'fav')
      .then((data) => {
          setContactList(data)
      })
      .catch((error) => {
          alert(ERROR_RESPONSE)
      })
  }, [search])

  return loading ? (
    <View style={Style.loader} >
      <ActivityIndicator size={'large'} />
    </View>
  ) : (
    <View style={Style.main}>
      <SearchBox search={search} setSearch={setSearch} />
      <ContactDisplay navigation={navigation} data={contactList} />
    </View>
  )
}

export default FavList