import {useState} from 'react';



export const useLocalStorage = (key, initialValue) => {

    // Setting State

    const [storedValue, setStoredValue] = useState(() => {

        // Setting to Local Storage

        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};