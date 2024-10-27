import { useState } from 'react';

const useStorage = (key, initialValue, storageType = 'local') => {
    const storage = storageType === 'session' ? window.sessionStorage : window.localStorage;

    // Initialize state with value from storage or the initial value
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = storage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error reading storage', error);
            return initialValue;
        }
    });

    // Function to update storage and state
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            storage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error('Error saving to storage', error);
        }
    };

    return [storedValue, setValue];
};

export default useStorage;
