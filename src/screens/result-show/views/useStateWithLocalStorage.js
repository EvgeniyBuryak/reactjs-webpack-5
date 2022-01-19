import React, {useState, useEffect} from "react";

const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(localStorageKey.username)) || localStorageKey
    );

    useEffect(()=>{
        if (localStorage.getItem(localStorageKey.username) == null)
            localStorage.setItem(localStorageKey.username, JSON.stringify(localStorageKey));
    }, []);

    return [value, setValue];
};

export { useStateWithLocalStorage };