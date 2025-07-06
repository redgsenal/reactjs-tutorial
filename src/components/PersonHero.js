import React from 'react'

function PersonHero({ person }) {
    return (
        <div>
            <h2 key={person.id}>
                {person.name} is {person.age} years old and is known as {person.heroName}.
            </h2>
        </div>
    )
}

export default PersonHero