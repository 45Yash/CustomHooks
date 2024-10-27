import React from 'react';
import useStorage from './useStorage';

const App = () => {
    const [name, setName] = useStorage('name', 'Guest');  // Using local storage by default

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome, {name}!</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={{ padding: '8px', fontSize: '16px', width: '200px' }}
            />
        </div>
    );
};

export default App;
