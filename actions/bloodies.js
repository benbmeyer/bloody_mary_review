import uuid from 'uuid';
import database from '../firebase/firebase';

//Add Bloody
export const addBloody = (bloody) => ({
    type: 'ADD_BLOODY',
    bloody
});

export const startAddBloody = (bloodyData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            location = '', 
            price = 0, 
            rating = 0, 
            spice = 0,
            comment = '',
        } = bloodyData;
        const bloody = { location, price, rating, spice, comment };

        return database.ref(`users/${uid}/bloodies`).push(bloody).then((ref) => {
            dispatch(addBloody({
                id: ref.key,
                ...bloody
            }));
        });
    };
};

//Remove Bloody
export const removeBloody = ({ id } = {}) => ({
    type: 'REMOVE_BLOODY',
    id
});

export const startRemoveBloody = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/bloodies/${id}`).remove().then(() => {
            dispatch(removeBloody({ id }));
        });
    };
};

//Edit Bloody
export const editBloody = (id, updates) => ({
    type:'EDIT_BLOODY',
    id,
    updates
});

export const startEditBloody = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/bloodies/${id}`).update(updates).then(() => {
            dispatch(editBloody(id, updates));
        });
    };
};

//Set Bloodies
export const setBloodies = (bloodies) => ({
    type: 'SET_BLOODIES',
    bloodies
});

export const startSetBloodies = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/bloodies`).once('value').then((snapshot) => {
            const bloodies = [];
            
            snapshot.forEach((childSnapshot) => {
                bloodies.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setBloodies(bloodies));
        });
    };
};