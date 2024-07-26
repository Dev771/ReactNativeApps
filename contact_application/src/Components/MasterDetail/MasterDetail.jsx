import React from 'react'

import ContactList from '../../screens/ContactList/ContactList';
import FavList from '../../screens/FavList/FavList';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MasterDetail = () => {
    
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Contact List' component={ContactList} options={{ title: 'Contact List', drawerLabel: 'Contact List Screen' }} />
            <Drawer.Screen name='Favorite List' component={FavList} options={{ title: 'Favorite Contact List', drawerLabel: 'Favorite List' }} />
        </Drawer.Navigator>
    )
}

export default MasterDetail