import React, { useState } from 'react'
import { Text, View } from 'react-native'
import BudgetListingTable from '../../Components/BudgetListingTable/BudgetListingTable';
import Dropdown from '../../Components/Dropdown/Dropdown'
import { useSelector } from 'react-redux'
import { DataTable } from 'react-native-paper';

const BudgetListingPage = () => {

    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");

    const list = useSelector((state) => state.expenditure.data);

    const handleClick = (item, type) => {
        if(type === 'year') {
            setYear(item);
            setMonth("");
        } else {
            setMonth(item);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <Dropdown value={year}  type='year' list={Object.keys(list) || []} clickEvent={handleClick} />
                <Dropdown value={month} type='month' list={year in list ? Object.keys(list[year]) : []}  clickEvent={handleClick} />
            </View>
            <BudgetListingTable year={year} month={month} />
        </View>
    )
}

export default BudgetListingPage;