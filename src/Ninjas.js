import React from "react";
import './ninja.css';

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <li className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Qualification: { ninja.qualification }</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
            </li>
        ) : null;
    });

    return (
        <ul className="ninja-list">
            {ninjaList}
        </ul>
    );
};

export default Ninjas;
