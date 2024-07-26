import db from "./db";
import constants from '../constants/DataBaseResponses.json';

export const getAllContacts = (search, type) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`Select * from contact where ${type == 'fav' ? 'fav = 1 AND ' : ""} name like ? ORDER BY name`, ["%" + search + "%"],
                (txObj, resultSet) => {
                    const contacts = resultSet.rows._array.map((contact) => ({ ...contact, fav: !!contact.fav }));
                    resolve(contacts);
                },
                (txObj, error) => reject(error)
            )
        })
    })
}

export const findContactById = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("Select * FROM contact where id = ?", [id], 
                (txObj, resultSet) => resolve(resultSet),
                (txObj, error) => reject(error)
            )
        })
    })
}

export const findContactByName = (name) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("Select * FROM contact where name = ?", [name],
                (txObj, resultSet) => {
                    resolve(resultSet);
                },
                (txObj, error) => reject(error)
            )
        })
    }) 
}

export const InsertContact = (contact) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`INSERT INTO contact (name, mobileNumber, landLine, photoURI, fav) VALUES (?, ?, ?, ?, ?)`,
                [...contact],
                (txObj, resultSet) => resolve(constants.INSERT_SUCCESS),
                (txObj, error) => reject(constants.ERROR_RESPONSE)
            )
        })
    })
}

export const UpdateContact = (contact) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(`Update contact SET name=?, mobileNumber=?, landLine=?, photoURI=?, fav=? where id=?`,
                [...contact],
                (txObj, resultSet) => {
                    resolve(constants.CONTACT_UPDATE_SUCCESS)
                },
                (txObj, error) => reject(constants.ERROR_RESPONSE)
            )
        })
    })
}

export const deleteContact = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("DELETE FROM contact where id=?", [id],
                ()=> resolve(constants.DELETE_SUCCESS),
                (error) => reject(error)
            )
        })
    }) 
}