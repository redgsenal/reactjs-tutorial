import React from 'react';

const Greet = ({name, heroName}) => {
    console.log('name:', name);
    console.log('heroName:', heroName);
  return (
    <div>
      <h1>Hello, {name} aka {heroName}!!!</h1>
    </div>
  );
}

export default Greet;
