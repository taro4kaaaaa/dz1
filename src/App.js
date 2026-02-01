import React, { useRef } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
    const inputRef = useRef(null);
    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    return (
        <div className="app-container">
            <Input ref={inputRef} placeholder="Введите текст..." />
            <Button onClick={handleClear} />
        </div>
    );
}

export default App;