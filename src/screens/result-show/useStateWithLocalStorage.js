import React, {useState, useEffect} from "react";

const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = useState(
        localStorage.getItem(localStorageKey.username) || localStorageKey.name
    );

    useEffect(()=>{
        localStorage.setItem(localStorageKey.username, value);
    }, [value]);

    return [value, setValue];
};

export { useStateWithLocalStorage };