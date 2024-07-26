import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

import Style from './BudgetEntryStyle'
import { useDispatch } from 'react-redux';
import { addItem, removeAll } from '../../reducers/ExpenditureStore';
import TextInputField from '../../Components/TextInputField/TextInputField';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from '../../Components/DatePicker/DatePicker';
import { useEffect } from 'react';

const BudgetEntry = () => {
    const [data, setData] = useState({ name: '', Pamount: "0", Aamount: "0", createdAt: new Date() });
    const [update, setUpdate] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (val, inputField) => {
        setUpdate(false);
        if(inputField === 'name') {
            setData({ ...data, name: val });
        } else if(inputField === 'Pamount') {
            const amo = parseInt(val.replace(/[^0-9]/g, ''));
            setData({ ...data, Pamount: isNaN(amo) ? "0" : amo.toString() })
        } else if(inputField === 'Aamount') {
            const amo = parseInt(val.replace(/[^0-9]/g, ''));
            setData({ ...data, Aamount: isNaN(amo) ? "0" : amo.toString() })
        } else {
            setData({ ...data, createdAt: new Date(val) })
        }
    }

    const clearAll = () => {
        dispatch(removeAll());
    }

    const handleSubmit = () => {
        if(data.name.length <= 0) {
            alert("Please Enter All required Fields!!!")
        } else if(data.Pamount == 0 || data.Aamount == 0 || !data.Pamount || !data.Aamount) {
            alert("Please Enter All The Required Fields!!!");
        } else {
            dispatch(addItem(data));
            setUpdate(true);
            setData({ name: '', Pamount: "0", Aamount: "0", createdAt: new Date() })
        }
    }

    return (
        <View style={Style.main}>
            <TextInputField style={Style.inputField} name="name" update={update} onChangeText={handleChange} placeholder='Name' value={data.name} keyboardType='default'  />
            <TextInputField style={Style.inputField} name="Pamount" update={update} onChangeText={handleChange} placeholder='Planned Amount' value={data.Pamount} keyboardType='numeric'  />
            <TextInputField style={Style.inputField} name="Aamount" update={update} onChangeText={handleChange} placeholder='Actual Amount' value={data.Aamount} keyboardType='numeric'  />
            <DatePicker Style={Style} date={data.createdAt} handleChange={handleChange} />

            <Button title='Save' onPress={handleSubmit}   />
            {/* <Button title="Clear ALL" onPress={clearAll} /> */}
        </View>
    )
}

export default BudgetEntry;