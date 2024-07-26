import React from 'react'
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';

import style from './BudgetListingTableStyle';
import { useState } from 'react';
import { useEffect } from 'react';

const BudgetListingTable= ({ year, month }) => {

    const list = useSelector((state) => state.expenditure.data);
    const [plannedAmount, setPlannedAmount] = useState(0);
    const [actualAmount, setActualAmount] = useState(0);

    useEffect(() => {
        if(year in list && month in list[year]) {
            setPlannedAmount(list[year][month].reduce((a, b) => a + parseInt(b.Pamount), 0));
            setActualAmount(list[year][month].reduce((a, b) => a + parseInt(b.Aamount), 0));
        } else {
            setPlannedAmount(0);
            setActualAmount(0);
        }
    }, [year, month]);

    return (
        <>
            <View style={[style.table]}>
                <View style={[style.tableRow, style.header]}>
                    <Text style={[style.flexGrow, style.Sno, style.headerText, style.textAlignCenter ]} >S.No</Text>
                    <Text style={[style.flexGrow, style.headerText, style.textAlignCenter ]} >Name</Text>
                    <Text style={[style.flexGrow, style.headerText, style.textAlignCenter ]} >Planned Amount</Text>
                    <Text style={[style.flexGrow, style.headerText, style.textAlignCenter ]} >Actual Amount</Text>
                </View>
                {
                    year in list ? month in list[year] ? (
                        <FlatList
                            data={list[year][month]}
                            renderItem={({item, index}) => 
                                <View style={style.tableRow}>
                                    <Text style={[ style.flexGrow, style.Sno, style.textAlignCenter, style.gap ]} >{index+1}</Text>
                                    <Text style={[ style.flexGrow, style.textAlignCenter, style.gap ]} >{item.name}</Text>
                                    <Text style={[ style.flexGrow, style.gap ]} ><Text style={{ fontWeight: 'bold' }}>{'\u0024'} </Text>{parseInt(item.Pamount)}</Text>
                                    <Text style={[ style.flexGrow, style.gap ]} ><Text style={{ fontWeight: 'bold' }}>{'\u0024'} </Text>{parseInt(item.Aamount)}</Text>
                                </View>
                            }
                            key={({item, index}) => index}
                        />
                    ) : (
                        <View style={style.tableRow} >
                            <Text style={[style.flexGrow, style.textAlignCenter]} >No Records Available</Text>
                        </View>
                    ) : (
                        <View style={style.tableRow} >
                            <Text style={[style.flexGrow, style.textAlignCenter]} >No Records Available</Text>
                        </View>
                    )
                }
            </View>
            <View style={style.footer}>
                <View>
                    <Text style={style.footerText} >Total Planned Amount: </Text>
                    <Text style={style.footerText} >{'\u0024'}{plannedAmount}</Text>
                </View>
                <View>
                    <Text style={style.footerText} >Total Actual Amount Spent: </Text>
                    <Text style={style.footerText} >{'\u0024'}{actualAmount}</Text>
                </View>
            </View>
        </>
    )
}

export default BudgetListingTable