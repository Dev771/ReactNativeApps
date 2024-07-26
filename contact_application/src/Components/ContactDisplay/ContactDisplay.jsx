import React from 'react'
import { Text, View,  } from 'react-native'
import ContactListEntry from '../ConatctListEntry/ContactListEntry'
import Style from './Style';
import { SwipeListView } from 'react-native-swipe-list-view';
import SwipedHiddenButtons from '../SwipedHiddenButtons/SwipedHiddenButtons';

const ContactDisplay = ({ navigation, data }) => {
    return (
        <View style={Style.table}>
            {
                data.length > 0 ? (
                    <SwipeListView
                        style={Style.list}
                        data={data}
                        renderItem={(data) => 
                            <ContactListEntry navigation={navigation} item={data.item} />
                        }
                        renderHiddenItem={ (data, rowMap) => (
                            <SwipedHiddenButtons navigation={navigation} item={data.item} />
                        )}
                        rightOpenValue={-200}
                        key={(item) => item.index}
                    />
                ) : (
                    <View style={Style.contactView}>
                        <Text>Currently No Contacts Available!!</Text>
                    </View>
                )
            }
            
        </View>
    )
}

export default ContactDisplay