import React from 'react';
import { useUserContext } from '../context/UserContext';

const UserInput = () => {
    const { userName, setUserName } = useUserContext();

    const handleChange = (event) => {
        setUserName(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={userName}
                onChange={handleChange}
                placeholder="Escribe tu nombre"
            />
        </div>
    );
};

export default UserInput;
