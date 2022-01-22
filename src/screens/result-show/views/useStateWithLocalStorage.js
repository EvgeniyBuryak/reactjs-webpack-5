import React, {useState, useEffect} from "react";

const useStateWithLocalStorage = localStorageKey => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem(localStorageKey.username)) || localStorageKey
    );
        
    // useEffect(()=>{
    //     console.log(user);
    //     // if (localStorage.getItem(localStorageKey.username) == null)
    //     localStorage.setItem(localStorageKey.username, JSON.stringify(user));
    // }, [localStorageKey]);

    return [user, setUser];
};

export { useStateWithLocalStorage };