import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'

const DatePicker = ({ date, Style, handleChange }) => {

    const [openDate, setOpenDate] = useState(false);

    const handleDateChange = (e) => {
        if(e.type === "set") {
            handleChange(e.nativeEvent.timestamp, 'DateTimePicker');
        }
        setOpenDate(false);
    }

    return (
        <>
            <TouchableOpacity style={[Style.inputField]} onPress={() => setOpenDate(true)}>
                <TextInput editable={false} style={{ textAlign: 'center', fontSize: 20, fontWeight: '700' }} value={date.toDateString()} />
            </TouchableOpacity>
            {
                openDate ? (
                    <DateTimePicker
                        value={date}
                        mode='date'
                        display='spinner'
                        onChange={handleDateChange}
                    />
                ) : (<></>)
            }
        </>
    )
}

export default DatePicker