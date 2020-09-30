import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';


export const useDarkMode = (initialValue) => {
    // Setting State to Local Storage

    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

    // Use Effect to Toggle Dark Mode

    useEffect(() => {
        darkMode
        ? document.querySelector("body").classList.add("dark-mode")
        : document.querySelector("body").classList.remove("dark-mode");
    }, [darkMode]);

    
    return [darkMode, setDarkMode];
};