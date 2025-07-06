import React from 'react'
import PersonHero from './PersonHero';

function NameLists() {
    const names = ['Bruce', 'Clark', 'Diana', 'Wade', 'Barry'];
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);
    const persons = [
        { id: 1, name: 'Bruce', heroName: 'Batman', age: 30 },
        { id: 2, name: 'Clark', heroName: 'Superman', age: 35 },
        { id: 3, name: 'Diana', heroName: 'Wonder Woman', age: 28 },
        { id: 4, name: 'Wade', heroName: 'Deadpool', age: 40 },
        { id: 5, name: 'Barry', heroName: 'Flash', age: 24 }

    ];
    const personList = persons.map(person => <PersonHero key={person.id} person={person} />);
    return (
        <div>
            {nameList}
            {personList}
        </div>
    )
}
const names = ['Bruce', 'Clark', 'Diana', 'Wade'];

export default NameLists