import React from 'react';
import { useUserContext } from '../context/UserContext';

function UserDisplay() {
    const { userName } = useUserContext();

    return (
        <div>
            <h2>Nombre de usuario: {userName}</h2>
        </div>
    );
}

export default UserDisplay;
