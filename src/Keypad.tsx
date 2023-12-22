import React from 'react';

interface KeypadProps {
    onKeyPress: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
    const keys = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'];

    return (
        <div>
            {keys.map(key => (
                <button key={key} onClick={() => onKeyPress(key)}>
                    {key}
                </button>
            ))}
        </div>
    );
};

export default Keypad;
