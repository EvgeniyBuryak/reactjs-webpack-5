import React, {useReducer, useEffect} from "react";

const useReducerWithLocalStorage = users => {
    const initialState = {
        name:       users.name,
        username:   users.username,
        email:      users.email,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case 'name':
                return {
                    name: action.value,
                    // username:   users.username,
                    // email:      users.email,
                };
            case '':
                return
            default:
                throw new Error();
        }
    }

    // const [value, setValue] = useReducer(
    //     users.getItem(users.username) || users.name
    // );

    // useEffect(()=>{
    //     users.setItem(users.username, value);
    // }, [value]);

    return [state, dispatch];
};

export { useReducerWithLocalStorage };